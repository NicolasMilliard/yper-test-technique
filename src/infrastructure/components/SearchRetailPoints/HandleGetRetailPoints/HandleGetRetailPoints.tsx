import { FC, useTransition, useState, useEffect } from "react";
// API
import getRetailPoints from "infrastructure/api/Yper/getRetailPoints";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { setSearch } from "application/redux/searchSlice";
import { setResults } from "application/redux/resultsSlice";
import { RootState } from "application/redux/store";
// Components
import DefaultSearchResults from "presentation/components/SearchRetailsPoints/DefaultSearchResults/DefaultSearchResults";
import ErrorMessage from "presentation/components/Errors/ErrorMessage/ErrorMessage";
import Loader from "presentation/components/Loader/Loader";
import SearchResults from "presentation/components/SearchRetailsPoints/SearchResults/SearchResults";
// Types
import { isApiError } from "application/types/ApiError";
import { SearchResultsInterface } from "application/types/Search";

interface Props {
  lat: number;
  lng: number;
}

const HandleGetRetailPoints: FC<Props> = ({ lat, lng }) => {
  const dispatch = useDispatch();
  const isSearching = useSelector(({ search }: RootState) => search.isSearching);
  const results = useSelector(({ results }: RootState) => results);
  const pagination = useSelector(({ pagination }: RootState) => pagination.pagination);
  const [isPending, startTransition] = useTransition();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [data, setData] = useState<SearchResultsInterface[]>([]);
  const itemsPerPage: number = 10;

  useEffect(() => {
    if (isSearching) {
      fetchRetailPoints(itemsPerPage);
      // Search is complete
      dispatch(setSearch(false));
    }
  }, [isSearching, pagination]);

  const fetchRetailPoints = async (itemsPerPage: number) => {
    try {
      setIsLoading(true);
      // Check if the desired results are already stored in the application
      if (results.length >= (pagination + 1) * 10) {
        // Desired result is in the cache
        // Update state as a non-blocking transition
        startTransition(() => {
          const start: number = pagination * itemsPerPage;
          const end: number = (pagination + 1) * itemsPerPage;
          const cacheResults: SearchResultsInterface[] = results.slice(start, end);

          setData(cacheResults);
        });
      } else {
        const response = await getRetailPoints(lat, lng, pagination);
        // Update state as a non-blocking transition
        startTransition(() => {
          setData(response.result);
          // Used for cache
          dispatch(setResults(results.concat(response.result)));
        });
      }
      setIsLoading(false);
    } catch (error) {
      if (isApiError(error)) {
        setError(error.message);
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      {!isLoading && !error && data.length === 0 && <DefaultSearchResults />}
      {isLoading && <Loader />}
      {error && <ErrorMessage text={error} />}
      {data.length > 0 && <SearchResults results={data} latitude={lat} longitude={lng} />}
    </>
  );
};

export default HandleGetRetailPoints;
