import { FC } from "react";
import Container from "react-bootstrap/Container";
import styles from "./DeliveryHoursContainer.module.scss";
import formatDay from "application/utils/hours/formatDay";
import formatHour from "application/utils/hours/formatHour";
// Types
import { RetailPointDeliveryHoursInterface } from "application/types/RetailPoint";

interface Props {
  hours: RetailPointDeliveryHoursInterface[];
}

const DeliveryHoursContainer: FC<Props> = ({ hours }) => {
  return (
    <Container>
      <h2 className={styles.title}>Horaires d'ouverture&nbsp;:</h2>
      <Container className={styles.container}>
        <ul className={styles.list}>
          {hours && (
            <>
              {hours.map((item: RetailPointDeliveryHoursInterface) => (
                <li key={item.day} className={styles.itemList}>
                  <span>{formatDay(item.day)}</span>
                  <span>
                    {formatHour(item.hours.start)}-{formatHour(item.hours.end)}
                  </span>
                </li>
              ))}
            </>
          )}
        </ul>
      </Container>
      <hr />
    </Container>
  );
};

export default DeliveryHoursContainer;
