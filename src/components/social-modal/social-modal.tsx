import styles from "./social-modal.module.css";
import { Button } from "../../shared/ui/button/Button";
import type { SocialModalProps } from "./types";

export const SocialModal = ({ onClose, social }: SocialModalProps) => (
  <div>
    <h3 className={styles.title}>Мы в соцсетях</h3>

    <p className={styles.text}>
      Вы можете{" "}
      <span>
        <a
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          перейти в наш {social.name}
        </a>
        <img src={social.icon} alt={social.title} className={styles.icon} />
      </span>
    </p>

    <Button variant="primary" title="Закрыть" onClick={onClose} />
  </div>
);
