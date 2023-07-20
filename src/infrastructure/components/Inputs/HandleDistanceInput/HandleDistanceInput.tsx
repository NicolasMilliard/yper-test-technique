import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDistance } from "application/redux/searchFiltersSlice";
import { RootState } from "application/redux/store";
import DistanceInput from "presentation/components/Inputs/DistanceInput/DistanceInput";

const HandleDistanceInput: FC = () => {
  const dispatch = useDispatch();
  const distance = useSelector(({ filters }: RootState) => filters.distance);

  const handleDistance = (rangeInputValue: number) => {
    dispatch(setDistance(rangeInputValue));
  };
  return (
    <DistanceInput distance={distance} handleDistance={(rangeInputValue: number) => handleDistance(rangeInputValue)} />
  );
};

export default HandleDistanceInput;
