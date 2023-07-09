import { FC } from "react";
import styles from "./SubmitInput.module.scss";

interface Props {
  value: string;
  customFunc: () => void;
}

const SubmitInput: FC<Props> = ({ value, customFunc }) => {
  return <input className={styles.input} type="submit" value={value} onClick={customFunc} />;
};

export default SubmitInput;
