import { FC } from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Pagination from "infrastructure/components/SearchRetailPoints/Pagination/Pagination";
import Map from "infrastructure/components/Maps/Map/Map";
// Types
import { SearchResultsInterface } from "application/types/Search";

import styles from "./SearchResults.module.scss";

interface Props {
  results: SearchResultsInterface[];
  latitude: number;
  longitude: number;
}

const SearchResults: FC<Props> = ({ results, latitude, longitude }) => {
  return (
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
        <Pagination currentResults={results} />
      </Col>
      <Col sm={12} md={6}>
        <Map latitude={latitude} longitude={longitude} zoom={12} mapHeight={537} markers={results} />
      </Col>
    </Row>
  );
};

export default SearchResults;
