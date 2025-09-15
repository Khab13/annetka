import type { IProductShopModalProps } from "../type";
import styles from "./product-modal.module.css";

export const ProductShopModal = ({ shop }: IProductShopModalProps) => {
  const link =
    shop === "ozon"
      ? "https://ozon.ru/your-product-link"
      : "https://wildberries.ru/your-product-link";

  return (
    <div className={styles.modalContent}>
      <h3 className={styles.title}>Вы переходите в магазин!</h3>
      <p className={styles.text}>
        Нажмите на кнопку ниже, чтобы перейти на страницу продукта в
        {shop === "ozon" ? " Ozon" : " Wildberries"}.
      </p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.linkButton}
      >
        Перейти на {shop === "ozon" ? "Ozon" : "Wildberries"}
      </a>
    </div>
  );
};
