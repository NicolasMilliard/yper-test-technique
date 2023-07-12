import { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPagination } from "application/redux/paginationSlice";
import { setSearch } from "application/redux/searchSlice";
import { RootState } from "application/redux/store";
import PaginationButtons from "presentation/components/SearchRetailsPoints/PaginationButtons/PaginationButtons";
// Types
import { SearchResultsInterface } from "application/types/Search";

interface Props {
  currentResults: SearchResultsInterface[];
}

const Pagination: FC<Props> = ({ currentResults }) => {
  const dispatch = useDispatch();
  const pagination = useSelector(({ pagination }: RootState) => pagination.pagination);

  const decreasePagination = () => {
    dispatch(setPagination(pagination - 1));
  };

  const increasePagination = () => {
    dispatch(setPagination(pagination + 1));
  };

  const handlePagination = () => {
    dispatch(setSearch(true));
  };

  useEffect(() => {
    handlePagination();
  }, [pagination]);

  return (
    <PaginationButtons
      pagination={pagination}
      results={currentResults}
      increase={increasePagination}
      decrease={decreasePagination}
    />
  );
};

export default Pagination;
