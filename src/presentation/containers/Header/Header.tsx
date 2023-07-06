import { FC } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import styles from "./Header.module.scss";

import logo from "../../../application/constants/images/logo/yper-logo.svg";

const Header: FC = () => {
  return (
    <Navbar className={styles.shadow}>
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} alt="Yper - logo" />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
