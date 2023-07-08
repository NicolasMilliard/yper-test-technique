import { FC, useState, useEffect, useTransition } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearch } from "application/redux/searchSlice";
import { RootState } from "application/redux/store";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styles from "./SearchResultsContainer.module.scss";
import pin from "application/constants/icons/map/pin.svg";
import getRetailPoints from "infrastructure/api/Yper/getRetailPoints";
import SearchResults from "infrastructure/components/SearchResults/SearchResults";

const SearchResultsContainer: FC = () => {
  const dispatch = useDispatch();
  const location = useSelector(({ location }: RootState) => location.value);
  const isSearching = useSelector(({ search }: RootState) => search.isSearching);
  const [isPending, startTransition] = useTransition();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (isSearching) {
      fetchData();
      // Search is complete
      dispatch(setSearch(false));
    }
  }, [isSearching]);

  const fetchData = async () => {
    // Check if location is not empty
    if (location.lat !== 0 && location.lng !== 0) {
      try {
        const response = await getRetailPoints(location.lat, location.lng);
        // Update state as a non-blocking transition
        startTransition(() => {
          setData(response.result);
        });
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      {data.length > 0 ? (
        <SearchResults results={data} latitude={location.lat} longitude={location.lng} />
      ) : (
        <Container className={styles.container}>
          <Row>
            <Col>
              <div className={styles.imgContainer}>
                <img src={pin} alt="Location" />
              </div>
              <p className={styles.text}>Lancez une recherche pour afficher les points de vente ici&nbsp;!</p>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default SearchResultsContainer;
