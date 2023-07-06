import { FC } from "react";
import Container from "react-bootstrap/Container";
import { useParams, useNavigate } from "react-router-dom";
import ShopContainer from "../containers/Shop/ShopContainer/ShopContainer";
import arrow from "../../application/constants/icons/nav/arrow.svg";
import IconButton from "../../infrastructure/components/Buttons/IconButton/IconButton";

const Shop: FC = () => {
  const { idShop } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <ShopContainer idShop={idShop} />
      <Container>
        <IconButton imageSource={arrow} imageAlt="<-" text="Retour aux résultats" customFunc={() => navigate(-1)} />
      </Container>
    </>
  );
};

export default Shop;
