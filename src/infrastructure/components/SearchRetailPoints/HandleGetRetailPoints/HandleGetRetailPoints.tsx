import { FC, useTransition, useState, useEffect } from "react";
// API
import getRetailPoints from "infrastructure/api/Yper/getRetailPoints";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { setSearch } from "application/redux/searchSlice";
import { RootState } from "application/redux/store";
// Components
import DefaultSearchResults from "../DefaultSearchResults/DefaultSearchResults";
import ErrorMessage from "presentation/components/Errors/ErrorMessage/ErrorMessage";
import Loader from "presentation/components/Loader/Loader";
import SearchResults from "../SearchResults/SearchResults";

interface Props {
  lat: number;
  lng: number;
}

const HandleGetRetailPoints: FC<Props> = ({ lat, lng }) => {
  const dispatch = useDispatch();
  const isSearching = useSelector(({ search }: RootState) => search.isSearching);
  const [isPending, startTransition] = useTransition();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<string>("");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (isSearching) {
      fetchRetailPoints();
      // Search is complete
      dispatch(setSearch(false));
    }
  }, [isSearching]);

  const fetchRetailPoints = async () => {
    try {
      setIsLoading(true);
      const response = await getRetailPoints(lat, lng);
      // Update state as a non-blocking transition
      startTransition(() => {
        setData(response.result);
      });
      setIsLoading(false);
    } catch (error: any) {
      setIsError(error.message);
      setIsLoading(false);
    }
  };

  return (
    <>
      {!isLoading && !isError && data.length === 0 && <DefaultSearchResults />}
      {isLoading && <Loader />}
      {isError && <ErrorMessage text={isError} />}
      {data.length > 0 && <SearchResults results={data} latitude={lat} longitude={lng} />}
    </>
  );
};

export default HandleGetRetailPoints;
