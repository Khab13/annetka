import styles from "./header.module.css";
import { Navbar } from "../../widgets/navbar/navbar";
import { Button } from "../../shared/ui/button/Button";
import { Modal } from "../../shared/ui/modal/modal";
import bannerPhone from "../../shared/assets/icons/banner-phone.svg";
import bannerImgM from "../../shared/assets/images/banner-img-m.jpg";
import bannerImgT from "../../shared/assets/images/banner-img-t.jpg";
import { useState } from "react";
import { SocialLink } from "../social-link/social-link";
import { ThanksModal } from "../thanks-modal/thanks-modal";
import { SocialModal } from "../social-modal/social-modal";
import { SalonModal } from "../salon-modal/salon-modal";
import type { ISocialLink } from "../social-link/types";

export const Header = () => {
  const [isOpenSalonModal, setIsOpenSalonModal] = useState(false);
  const [isOpenSocialModal, setIsOpenSocialModal] = useState(false);
  const [isOpenThanksModal, setIsOpenThanksModal] = useState(false);
  const [selectedSocial, setSelectedSocial] = useState<ISocialLink | null>(
    null
  );

  const handleSecondaryClick = () => {
    const section = document.getElementById("services");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header>
      <Navbar />
      <div className={styles.banner}>
        <div className="container">
          <div className={styles.bannerTitle}>
            <div className={styles.banneSocialMedia}>
              <SocialLink
                onClick={(link) => {
                  setSelectedSocial(link);
                  setIsOpenSocialModal(true);
                }}
              />
            </div>
            <div data-aos="zoom-out" className={styles.bannerTitleBlock}>
              <h2>
                <span>—</span> Салон красоты премиум класса
              </h2>
              <h1>Annetka.Hair</h1>
              <p>
                Annetka Hair - эксклюзивный салон красоты премиум класса,
                основная миссия которого - подарить Вам красивые волосы
              </p>
              <Button
                variant="primary"
                title="Записаться"
                onClick={() => setIsOpenSalonModal(true)}
              />
              <Button
                variant="secondary"
                title="Наши услуги"
                onClick={handleSecondaryClick}
              />
            </div>
          </div>
          <div className={styles.bannerAddress}>
            <address data-aos="fade-right">
              Москва, м. Парк Победы, Улица 1812 года, дом 1
            </address>
            <div data-aos="fade-left" className={styles.bannerPhone}>
              <img src={bannerPhone} alt="phone" />
              <a href="tel:+7 (995) 099-27-57">+7 (995) 099-27-57</a>
            </div>
          </div>
          <img
            src={bannerImgM}
            alt="banner-girl"
            className={styles.bannerImgM}
          />
          <img
            src={bannerImgT}
            alt="banner-girl"
            className={styles.bannerImgT}
          />
        </div>

        {isOpenSalonModal && (
          <Modal onClose={() => setIsOpenSalonModal(false)}>
            <SalonModal
              onSubmit={() => {
                setIsOpenSalonModal(false);
                setIsOpenThanksModal(true);
              }}
            />
          </Modal>
        )}
        {isOpenSocialModal && selectedSocial && (
          <Modal onClose={() => setIsOpenSocialModal(false)}>
            <SocialModal
              social={selectedSocial}
              onClose={() => setIsOpenSocialModal(false)}
            />
          </Modal>
        )}
        {isOpenThanksModal && (
          <Modal onClose={() => setIsOpenThanksModal(false)}>
            <ThanksModal onClose={() => setIsOpenThanksModal(false)} />
          </Modal>
        )}
      </div>
    </header>
  );
};
