import { FC } from "react";
import AutocompleteInput from "infrastructure/components/Inputs/AutocompleteInput/AutocompleteInput";
import SubmitLocation from "infrastructure/components/Inputs/SubmitLocation/SubmitLocation";
import IconButton from "presentation/components/Buttons/IconButton/IconButton";
import FiltersContainer from "../FiltersContainer/FiltersContainer";
// Redux
import { useDispatch } from "react-redux";
import { setIsDisplayed } from "application/redux/searchFiltersSlice";
// Image
import filters from "application/constants/icons/search/filters.svg";

import styles from "./FormContainer.module.scss";

const FormContainer: FC = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className={styles.formContainer}>
        <AutocompleteInput placeholder="Votre addresse" />
        <SubmitLocation value="Rechercher" />
        <IconButton
          imageSource={filters}
          imageAlt="Filtres"
          customFunc={() => {
            dispatch(setIsDisplayed(true));
          }}
        />
      </div>
      <FiltersContainer />
    </>
  );
};

export default FormContainer;
