import { FC } from "react";
import styles from "./ResultsList.module.scss";

interface Props {
  list: any;
}

const ResultsList: FC<Props> = ({ list }) => {
  return (
    <div className={styles.listContainer}>
      <ul className={styles.list}>{list}</ul>
    </div>
  );
};

export default ResultsList;
