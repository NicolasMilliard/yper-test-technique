import { FC } from "react";
import styles from "./MainTitle.module.scss";

interface Props {
  text: string | undefined;
}

const MainTitle: FC<Props> = ({ text }) => {
  return <h1 className={styles.mainTitle}>{text}</h1>;
};

export default MainTitle;
