import { FC } from "react";
import arrow from "application/constants/icons/nav/arrow_white.svg";
// Types
import { SearchResultsInterface } from "application/types/Search";

import styles from "./PaginationButtons.module.scss";

interface Props {
  pagination: number;
  results: SearchResultsInterface[];
  increase: () => void;
  decrease: () => void;
}

const PaginationButtons: FC<Props> = ({ pagination, results, increase, decrease }) => {
  return (
    <div className={styles.buttonContainer}>
      <button className={styles.button} disabled={pagination === 0 ? true : false} onClick={decrease}>
        <img src={arrow} alt="&lt;" />
      </button>
      <button className={styles.button} disabled={results.length === 10 ? false : true} onClick={increase}>
        <img src={arrow} alt="&gt;" className={styles.imageReverse} />
      </button>
    </div>
  );
};

export default PaginationButtons;
