import { FC, useRef } from "react";

import styles from "./DistanceInput.module.scss";

interface Props {
  distance: number;
  handleDistance: (rangeInputValue: number) => void;
}

const DistanceInput: FC<Props> = ({ distance, handleDistance }) => {
  const rangeInputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = () => {
    if (rangeInputRef.current) {
      const inputValue = parseFloat(rangeInputRef.current.value);
      handleDistance(inputValue);
    }
  };

  return (
    <div className={styles.inputContainer}>
      <div>
        <label htmlFor="distance" className={styles.label}>
          Distance maximale
        </label>
      </div>
      <div>
        <input
          className={styles.inputRange}
          id="distance"
          ref={rangeInputRef}
          type="range"
          min={10}
          max={50}
          step={10}
          value={distance}
          onChange={handleChange}
        />
        <datalist id="values" className={styles.datalist}>
          <option value="10" label="10"></option>
          <option value="20" label="20"></option>
          <option value="30" label="30"></option>
          <option value="40" label="40"></option>
          <option value="50" label="50"></option>
        </datalist>
      </div>
    </div>
  );
};

export default DistanceInput;
