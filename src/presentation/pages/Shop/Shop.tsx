import { FC } from "react";
import Container from "react-bootstrap/Container";
import { useParams, useNavigate } from "react-router-dom";
import ShopContainer from "presentation/containers/Shop/ShopContainer/ShopContainer";
import IconButton from "infrastructure/components/Buttons/IconButton/IconButton";
import arrow from "application/constants/icons/nav/arrow.svg";
import styles from "./Shop.module.scss";

const Shop: FC = () => {
  const { idShop } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <ShopContainer idShop={idShop} />
      <Container className={styles.link}>
        <IconButton imageSource={arrow} imageAlt="<-" text="Retour aux résultats" customFunc={() => navigate(-1)} />
      </Container>
    </>
  );
};

export default Shop;
