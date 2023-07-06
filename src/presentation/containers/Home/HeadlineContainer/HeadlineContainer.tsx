import { FC } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import MainTitle from "../../../../infrastructure/components/TextFields/MainTitle/MainTitle";
import FormContainer from "../FormContainer/FormContainer";
import storeSign from "../../../../application/constants/images/common/store-sign.png";
import styles from "./HeadlineContainer.module.scss";

const HeadlineContainer: FC = () => {
  return (
    <Container className={styles.container}>
      <Row className={styles.row}>
        <Col sm={12} md={6}>
          <MainTitle text="Trouvez les points de vente proches de chez vous !" />
          <p className={styles.text}>
            Renseignez votre adresse dans le champ ci-dessous, et trouvez tous nos points de vente en quelques
            instants&nbsp;:
          </p>
          <FormContainer />
        </Col>
        <Col sm={12} md={6}>
          <Image src={storeSign} alt="Mon magasin Yper" fluid className={styles.alignRight} />
        </Col>
      </Row>
    </Container>
  );
};

export default HeadlineContainer;
