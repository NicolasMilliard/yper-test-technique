import { FC } from "react";
import ErrorMessage from "presentation/components/Errors/ErrorMessage/ErrorMessage";

import styles from "./ResultsError.module.scss";

interface Props {
  error: string;
}

const ResultsError: FC<Props> = ({ error }) => {
  return (
    <div className={styles.listContainer}>
      <span className={styles.error}>
        <li>
          <ErrorMessage text={error} />
        </li>
      </span>
    </div>
  );
};

export default ResultsError;
