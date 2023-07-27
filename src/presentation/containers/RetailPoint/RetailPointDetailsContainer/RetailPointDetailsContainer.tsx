import { FC } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MainTitle from "presentation/components/TextFields/MainTitle/MainTitle";
import Link from "presentation/components/Link/Link";
import Map from "infrastructure/components/Maps/Map/Map";
import styles from "./RetailPointDetailsContainer.module.scss";
// Types
import { SearchResultsInterface } from "application/types/Search";

interface Props {
  shopName: string;
  address: string;
  city: string;
  zipCode: number;
  latitude: number;
  longitude: number;
}

const RetailPointDetailsContainer: FC<Props> = ({ shopName, address, city, zipCode, latitude, longitude }) => {
  const marker: SearchResultsInterface[] = [
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
          <Link link={`https://www.google.com/maps/dir//${shopName}`} target="_blank" text="Obtenir l'itinéraire" />
        </Col>
        <Col sm={12} md={6}>
          <Map latitude={latitude} longitude={longitude} zoom={16} mapHeight={311} markers={marker} />
        </Col>
      </Row>
    </Container>
  );
};

export default RetailPointDetailsContainer;
