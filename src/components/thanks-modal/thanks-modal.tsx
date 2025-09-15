import { Button } from "../../shared/ui/button/Button";
import type { ThanksModalProps } from "./types";
import styles from "./thanks-modal.module.css";

export const ThanksModal = ({ onClose }: ThanksModalProps) => (
  <>
    <h3 className={styles.title}>Спасибо!</h3>
    <p className={styles.text}>Мы свяжемся с вами в ближайшее время.</p>
    <Button variant="primary" title="Закрыть" onClick={onClose} />
  </>
);
