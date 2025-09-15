import styles from "../service-menu.module.css";
import type { ImageBlockProps } from "./type";

export const ImageBlock = ({ src, alt, isFading }: ImageBlockProps) => (
  <div
    className={`${styles.serviceMenuRowImg} ${
      isFading ? styles.fadeOut : styles.fadeIn
    }`}
  >
    <img src={src} alt={alt} />
  </div>
);
