import { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPagination } from "application/redux/paginationSlice";
import { setSearch } from "application/redux/searchSlice";
import { RootState } from "application/redux/store";
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
    <div>
      <button disabled={pagination === 0 ? true : false} onClick={decreasePagination}>
        Précédent
      </button>
      <button disabled={currentResults.length === 10 ? false : true} onClick={increasePagination}>
        Suivant
      </button>
    </div>
  );
};

export default Pagination;
