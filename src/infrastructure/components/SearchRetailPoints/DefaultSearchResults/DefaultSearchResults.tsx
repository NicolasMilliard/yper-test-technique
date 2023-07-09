import { FC } from "react";
import pin from "application/constants/icons/map/pin.svg";
import styles from "./DefaultSearchResults.module.scss";

const DefaultSearchResults: FC = () => {
  return (
    <>
      <div className={styles.imgContainer}>
        <img src={pin} alt="Location" />
      </div>
      <p className={styles.text}>Lancez une recherche pour afficher les points de vente ici&nbsp;!</p>
    </>
  );
};

export default DefaultSearchResults;
