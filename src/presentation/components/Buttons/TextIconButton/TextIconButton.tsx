import { FC } from "react";
import styles from "./TextIconButton.module.scss";
// Types
import { TextIconButtonInterface } from "application/types/UI";

const TextIconButton: FC<TextIconButtonInterface> = ({ imageSource, imageAlt, text, customFunc }) => {
  return (
    <button onClick={customFunc} className={styles.button}>
      <img src={imageSource} alt={imageAlt} />
      <span className={styles.text}>{text}</span>
    </button>
  );
};

export default TextIconButton;
