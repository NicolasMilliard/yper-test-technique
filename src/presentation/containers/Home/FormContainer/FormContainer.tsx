import { FC } from "react";
import AutocompleteInput from "infrastructure/components/Inputs/AutocompleteInput/AutocompleteInput";
import SubmitInput from "infrastructure/components/Inputs/SubmitInput/SubmitInput";

import styles from "./FormContainer.module.scss";

const FormContainer: FC = () => {
  return (
    <div className={styles.formContainer}>
      <AutocompleteInput placeholder="Votre addresse" />
      <SubmitInput value="Rechercher" />
    </div>
  );
};

export default FormContainer;
