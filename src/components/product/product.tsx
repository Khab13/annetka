import { useState } from "react";
import { Button } from "../../shared/ui/button/Button";
import { Modal } from "../../shared/ui/modal/modal";
import styles from "./product.module.css";
import img from "../../shared/assets/images/product-img.png";                         
import { ProductShopModal } from "./product-modal/product-modal";
import type { ShopType } from "./type";

export const Product = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeShop, setActiveShop] = useState<ShopType | null>(null);

  const openModal = (shop: ShopType) => {
    setActiveShop(shop);
    setIsModalOpen(true);
  };

  return (
    <section className={styles.wrapper}>
      <div data-aos="fade-in" className={styles.productRow}>
        <div className={styles.productBlock}>
          <h2>Продукция</h2>
          <p>
            На сколько Вы готовы к переменам? Измените свой цвет волос за 15
            мин! Тонирующая маска для волос Annetka.hair с кератином, витамином
            Е, пчелиным воском изготавливается из органической профессиональной
            продукции Insight и подбирается индивидуально. Результат - идеально
            ровный цвет, гладкие, плотные и блестящие волосы без утяжеления!
            Тонирующая маска для блондинок с вариантами оттенков цвета блонд:
            пепельный, серебристый, стальной, розовый.
          </p>
          <Button
            variant="orderOzon"
            title="купить на ozon"
            onClick={() => openModal("ozon")}
          />
          <Button
            variant="orderWildberries"
            title="купить на wildberries"
            onClick={() => openModal("wildberries")}
          />
        </div>

        <div className={styles.productImg}>
          <img src={img} alt="bottle" />
        </div>
      </div>

      {isModalOpen && activeShop && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <ProductShopModal
            shop={activeShop}
            onClose={() => setIsModalOpen(false)}
          />
        </Modal>
      )}
    </section>
  );
};
