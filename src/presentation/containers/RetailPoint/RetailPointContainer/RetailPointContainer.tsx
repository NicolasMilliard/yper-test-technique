import { FC } from "react";
import HandleGetRetailPointDetails from "infrastructure/components/SearchRetailPointDetails/HandleGetRetailPointDetails/HandleGetRetailPointDetails";

interface Props {
  idRetailPoint: string;
}

const RetailPointContainer: FC<Props> = ({ idRetailPoint }) => {
  return <HandleGetRetailPointDetails idRetailPoint={idRetailPoint} />;
};

export default RetailPointContainer;
