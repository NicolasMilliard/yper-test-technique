import { FC } from "react";
import Container from "react-bootstrap/Container";
import MainTitle from "../../../../infrastructure/components/TextFields/MainTitle/MainTitle";

import styles from "./ShopDetails.module.scss";

interface Props {
  shopName: string | undefined;
  address: string | undefined;
  city: string | undefined;
  zipCode: number | undefined;
}

const ShopDetails: FC<Props> = ({ shopName, address, city, zipCode }) => {
  return (
    <Container className={styles.container}>
      <MainTitle text={shopName} />
      <ul className={styles.list}>
        <li>{address}</li>
        <li>
          {zipCode} {city}
        </li>
      </ul>
    </Container>
  );
};

export default ShopDetails;
