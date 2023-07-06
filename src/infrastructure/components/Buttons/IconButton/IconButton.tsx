import { FC } from "react";
import styles from "./IconButton.module.scss";

interface Props {
  imageSource: string;
  imageAlt: string;
  text: string;
  customFunc: () => void;
}

const IconButton: FC<Props> = ({ imageSource, imageAlt, text, customFunc }) => {
  return (
    <button onClick={customFunc} className={styles.button}>
      <img src={imageSource} alt={imageAlt} />
      <span className={styles.text}>{text}</span>
    </button>
  );
};

export default IconButton;
