import { FC } from "react";
import styles from "./Input.module.scss";
// Types
import { InputInterface } from "application/types/UI";

const Input: FC<InputInterface> = ({ placeholder, value, onChange, disabled }) => {
  return (
    <input
      type="text"
      className={styles.input}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  );
};

export default Input;
