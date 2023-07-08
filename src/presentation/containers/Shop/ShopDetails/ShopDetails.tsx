import { FC } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MainTitle from "infrastructure/components/TextFields/MainTitle/MainTitle";
import Map from "infrastructure/components/Maps/Map/Map";

import styles from "./ShopDetails.module.scss";

interface Props {
  shopName: string;
  address: string;
  city: string;
  zipCode: number;
  latitude: number;
  longitude: number;
}

interface Result {
  _id: string;
  name: string;
  address: {
    location: {
      coordinates: number[];
    };
  };
}

const ShopDetails: FC<Props> = ({ shopName, address, city, zipCode, latitude, longitude }) => {
  const marker: Result[] = [
    {
      _id: "1",
      name: shopName,
      address: {
        location: {
          coordinates: [latitude, longitude],
        },
      },
    },
  ];

  return (
    <Container className={styles.container}>
      <Row>
        <Col sm={12} md={6}>
          <MainTitle text={shopName} />
          <ul className={styles.list}>
            <li>{address}</li>
            <li>
              {zipCode} {city}
            </li>
          </ul>
        </Col>
        <Col sm={12} md={6}>
          <Map latitude={latitude} longitude={longitude} zoom={16} markers={marker} />
        </Col>
      </Row>
    </Container>
  );
};

export default ShopDetails;
