import { FC } from "react";
import Container from "react-bootstrap/Container";
import { useParams, useNavigate } from "react-router-dom";
import RetailPointContainer from "presentation/containers/RetailPoint/RetailPointContainer/RetailPointContainer";
import TextIconButton from "presentation/components/Buttons/TextIconButton/TextIconButton";
import arrow from "application/constants/icons/nav/arrow.svg";
import styles from "./RetailPoint.module.scss";

const RetailPoint: FC = () => {
  const { idRetailPoint } = useParams();
  const navigate = useNavigate();

  return (
    <>
      {idRetailPoint && <RetailPointContainer idRetailPoint={idRetailPoint} />}
      <Container className={styles.link}>
        <TextIconButton imageSource={arrow} imageAlt="<-" text="Retour aux résultats" customFunc={() => navigate(-1)} />
      </Container>
    </>
  );
};

export default RetailPoint;
