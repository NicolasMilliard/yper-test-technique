import { FC, useState } from "react";
import styles from "./SubmitInput.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../application/redux/store";
import { setSearch } from "../../../../application/redux/searchSlice";

interface Props {
  value: string;
}

const SubmitInput: FC<Props> = ({ value }) => {
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

  return (
    <>
      <input className={styles.input} type="submit" value={value} onClick={handleSubmit} />
    </>
  );
};

export default SubmitInput;
