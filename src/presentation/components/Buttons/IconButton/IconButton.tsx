import { FC } from "react";
import styles from "./IconButton.module.scss";
// Types
import { IconButtonInterface } from "application/types/UI";

const IconButton: FC<IconButtonInterface> = ({ imageSource, imageAlt, customFunc }) => {
  return (
    <button onClick={customFunc} className={styles.button}>
      <img src={imageSource} alt={imageAlt} />
    </button>
  );
};

export default IconButton;
