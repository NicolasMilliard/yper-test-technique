import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "application/redux/store";
import Container from "react-bootstrap/Container";

import styles from "./SearchResultsContainer.module.scss";

import HandleGetRetailPoints from "infrastructure/components/SearchRetailPoints/HandleGetRetailPoints/HandleGetRetailPoints";

const SearchResultsContainer: FC = () => {
  const location = useSelector(({ location }: RootState) => location.value);

  return (
    <Container className={styles.container}>
      <HandleGetRetailPoints lat={location.lat} lng={location.lng} />
    </Container>
  );
};

export default SearchResultsContainer;
