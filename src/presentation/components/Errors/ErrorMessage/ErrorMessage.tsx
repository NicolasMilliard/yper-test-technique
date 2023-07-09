import { FC } from "react";
import styles from "./ErrorMessage.module.scss";

interface Props {
  text: string;
}

const ErrorMessage: FC<Props> = ({ text }) => {
  return <span className={styles.text}>{text}</span>;
};

export default ErrorMessage;
