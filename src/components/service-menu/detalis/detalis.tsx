import styles from "../service-menu.module.css";
import type { DetailsProps } from "./type";
import { Button } from "../../../shared/ui/button/Button";

export const Details = ({
  service,
  isFading,
  onPrimaryClick,
  onSecondaryClick,
}: DetailsProps) => (
  <div
    className={`${styles.serviceMenuDetails} ${
      isFading ? styles.fadeOut : styles.fadeIn
    }`}
  >
    <h2>{service.title}</h2>
    <p>{service.description}</p>
    {service.serviceEmployee.map((el, index) => (
      <div className={styles.serviceMenuDetailsRow} key={index}>
        <p>{el.subTitle}</p>
        <p>{el.price}</p>
      </div>
    ))}
    <Button variant="primary" title="Записаться" onClick={onPrimaryClick} />
    <Button
      variant="secondary"
      title="Наши мастера"
      onClick={onSecondaryClick}
    />
  </div>
);
