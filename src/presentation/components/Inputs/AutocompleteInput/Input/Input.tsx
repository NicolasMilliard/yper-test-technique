import { FC, ChangeEvent } from "react";

import styles from "./Input.module.scss";

interface Props {
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
}

const Input: FC<Props> = ({ placeholder, value, onChange, disabled }) => {
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
