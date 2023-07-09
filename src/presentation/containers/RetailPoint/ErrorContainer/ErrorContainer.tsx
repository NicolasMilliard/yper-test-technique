import { FC } from "react";
import ErrorMessage from "presentation/components/Errors/ErrorMessage/ErrorMessage";

import styles from "./ErrorContainer.module.scss";

interface Props {
  error: string;
}

const ErrorContainer: FC<Props> = ({ error }) => {
  return (
    <div className={styles.errorContainer}>
      <ErrorMessage text={error} />
    </div>
  );
};

export default ErrorContainer;
