import { FC } from "react";
import Container from "react-bootstrap/Container";
import HandleDistanceInput from "infrastructure/components/Inputs/HandleDistanceInput/HandleDistanceInput";
import SubmitLocation from "infrastructure/components/Inputs/SubmitLocation/SubmitLocation";
import IconButton from "presentation/components/Buttons/IconButton/IconButton";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "application/redux/store";
import { setIsDisplayed } from "application/redux/searchFiltersSlice";
// Image
import close from "application/constants/icons/nav/close.svg";

import styles from "./FiltersContainer.module.scss";

const FiltersContainer: FC = () => {
  const dispatch = useDispatch();
  const isDisplayed = useSelector(({ filters }: RootState) => filters.isDisplayed);

  return (
    <>
      {isDisplayed && (
        <Container className={styles.container}>
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>Personnalisez votre recherche</h2>
            <IconButton imageSource={close} imageAlt="X" customFunc={() => dispatch(setIsDisplayed(false))} />
          </div>
          <div className={styles.inputContainer}>
            <HandleDistanceInput />
          </div>
          <div className={styles.submitContainer}>
            <SubmitLocation value="Rechercher" />
          </div>
        </Container>
      )}
    </>
  );
};

export default FiltersContainer;
