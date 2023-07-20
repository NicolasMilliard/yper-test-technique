import { FC, useTransition, useState, useEffect } from "react";
// API
import getRetailPoints from "infrastructure/api/Yper/getRetailPoints";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { setSearch } from "application/redux/searchSlice";
import { setResults } from "application/redux/resultsSlice";
import { setPagination } from "application/redux/searchFiltersSlice";
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
  const pagination = useSelector(({ filters }: RootState) => filters.pagination);
  const distance = useSelector(({ filters }: RootState) => filters.distance);
  const [isPending, startTransition] = useTransition();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [data, setData] = useState<SearchResultsInterface[]>([]);
  const [prevDistance, setPrevDistance] = useState<number>(distance);
  const [prevLat, setPrevLat] = useState<number>(lat);
  const [prevLng, setPrevLng] = useState<number>(lng);
  const itemsPerPage: number = 10;

  // Used when user navigates through the results (same search)
  useEffect(() => {
    // New search
    if (isSearching) {
      // At least one filter has been updated
      if (distance !== prevDistance || lat !== prevLat || lng !== prevLng) {
        // Reset cache and filters
        setData([]);
        dispatch(setResults([]));
        dispatch(setPagination(0));
        setPrevLat(lat);
        setPrevLng(lng);
        // API call
        fetchRetailPoints(itemsPerPage);
        // Search is complete
        setPrevDistance(distance);
        // Search is complete
        dispatch(setSearch(false));
      } else if (distance === prevDistance && lat === prevLat && lng === prevLng) {
        // API or cache call
        fetchRetailPoints(itemsPerPage);
        // Search is complete
        dispatch(setSearch(false));
      }
    }
  }, [isSearching, distance, lat, lng]);

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
        const response = await getRetailPoints(lat, lng, pagination, distance);
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
