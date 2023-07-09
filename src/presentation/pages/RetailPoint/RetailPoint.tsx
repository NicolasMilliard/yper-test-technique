import { FC } from "react";
import Container from "react-bootstrap/Container";
import { useParams, useNavigate } from "react-router-dom";
import RetailPointContainer from "presentation/containers/RetailPoint/RetailPointContainer/RetailPointContainer";
import IconButton from "infrastructure/components/Buttons/IconButton/IconButton";
import arrow from "application/constants/icons/nav/arrow.svg";
import styles from "./RetailPoint.module.scss";

const RetailPoint: FC = () => {
  const { idRetailPoint } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <RetailPointContainer idRetailPoint={idRetailPoint} />
      <Container className={styles.link}>
        <IconButton imageSource={arrow} imageAlt="<-" text="Retour aux résultats" customFunc={() => navigate(-1)} />
      </Container>
    </>
  );
};

export default RetailPoint;
