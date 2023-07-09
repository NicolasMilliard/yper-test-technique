import { FC } from "react";
import AutocompleteInput from "infrastructure/components/Inputs/AutocompleteInput/AutocompleteInput";
import SubmitLocation from "infrastructure/components/Inputs/SubmitLocation/SubmitLocation";

import styles from "./FormContainer.module.scss";

const FormContainer: FC = () => {
  return (
    <div className={styles.formContainer}>
      <AutocompleteInput placeholder="Votre addresse" />
      <SubmitLocation value="Rechercher" />
    </div>
  );
};

export default FormContainer;
