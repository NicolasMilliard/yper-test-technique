import { FC } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Map from "../Maps/Map/Map";

import styles from "./SearchResults.module.scss";

interface Result {
  _id: string;
  name: string;
  address: {
    location: {
      coordinates: number[];
    };
  };
}

interface Props {
  results: Result[];
  latitude: number;
  longitude: number;
}

const SearchResults: FC<Props> = ({ results, latitude, longitude }) => {
  return (
    <Container className={styles.container}>
      <Row>
        <Col sm={12} md={6}>
          <h2 className={styles.title}>Résultats de la recherche&nbsp;:</h2>
          <ul className={styles.list}>
            <hr />
            {results.map((item) => (
              <span key={item._id}>
                <li className={styles.listItem}>
                  <h3 className={styles.shopTitle}>{item.name}</h3>
                  <Link className={styles.shopLink} to={`/shop/${item._id}`}>
                    Voir plus d'infos
                  </Link>
                </li>
                <hr />
              </span>
            ))}
          </ul>
        </Col>
        <Col sm={12} md={6}>
          <Map latitude={latitude} longitude={longitude} zoom={12} markers={results} />
        </Col>
      </Row>
    </Container>
  );
};

export default SearchResults;
