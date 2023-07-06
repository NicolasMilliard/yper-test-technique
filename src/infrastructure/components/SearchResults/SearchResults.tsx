import { FC } from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

import styles from "./SearchResults.module.scss";

interface Result {
  _id: string;
  name: string;
}

interface Props {
  results: Result[];
}

const SearchResults: FC<Props> = ({ results }) => {
  return (
    <Container className={styles.container}>
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
    </Container>
  );
};

export default SearchResults;
