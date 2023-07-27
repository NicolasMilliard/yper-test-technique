import { FC } from "react";

import styles from "./Link.module.scss";

interface Props {
  text: string;
  link: string;
  target: string;
}

const Link: FC<Props> = ({ text, link, target }) => {
  return (
    <a href={link} target={target} className={styles.link}>
      {text}
    </a>
  );
};

export default Link;
