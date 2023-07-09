import { FC } from "react";
import styles from "./SubmitInput.module.scss";
// Types
import { SubmitInputInterface } from "application/types/UI";

const SubmitInput: FC<SubmitInputInterface> = ({ value, customFunc }) => {
  return <input className={styles.input} type="submit" value={value} onClick={customFunc} />;
};

export default SubmitInput;
