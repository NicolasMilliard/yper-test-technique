import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "application/redux/store";
import { setSearch } from "application/redux/searchSlice";
import SubmitInput from "presentation/components/Inputs/SubmitInput/SubmitInput";

interface Props {
  value: string;
}

const SubmitLocation: FC<Props> = ({ value }) => {
  const dispatch = useDispatch();
  const location = useSelector(({ location }: RootState) => location.value);

  const handleSubmit = () => {
    // Check if location is not empty
    if (location.lat !== 0 && location.lng !== 0) {
      dispatch(setSearch(true));
    } else {
      dispatch(setSearch(false));
    }
  };

  return <SubmitInput value={value} customFunc={handleSubmit} />;
};

export default SubmitLocation;
