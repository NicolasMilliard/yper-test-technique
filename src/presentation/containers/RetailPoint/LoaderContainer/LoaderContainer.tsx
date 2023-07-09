import { FC } from "react";
import Loader from "presentation/components/Loader/Loader";

import styles from "./LoaderContainer.module.scss";

const LoaderContainer: FC = () => {
  return (
    <div className={styles.loaderContainer}>
      <Loader />
    </div>
  );
};

export default LoaderContainer;
