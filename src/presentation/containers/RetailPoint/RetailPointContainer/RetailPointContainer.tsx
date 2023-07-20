import { FC } from "react";
import HandleGetRetailPointDetails from "infrastructure/components/SearchRetailPointDetails/HandleGetRetailPointDetails/HandleGetRetailPointDetails";

import styles from "./RetailPointContainer.module.scss";

interface Props {
  idRetailPoint: string;
}

const RetailPointContainer: FC<Props> = ({ idRetailPoint }) => {
  return (
    <div className={styles.container}>
      <HandleGetRetailPointDetails idRetailPoint={idRetailPoint} />
    </div>
  );
};

export default RetailPointContainer;
