import { FC } from "react";
import styles from "./IconButton.module.scss";
// Types
import { IconButtonInterface } from "application/types/UI";

const IconButton: FC<IconButtonInterface> = ({ imageSource, imageAlt, text, customFunc }) => {
  return (
    <button onClick={customFunc} className={styles.button}>
      <img src={imageSource} alt={imageAlt} />
      <span className={styles.text}>{text}</span>
    </button>
  );
};

export default IconButton;
