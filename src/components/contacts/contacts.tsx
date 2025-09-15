import { Button } from "../../shared/ui/button/Button";
import styles from "./contacts.module.css";
import { SocialLink } from "../social-link/social-link";
import { Modal } from "../../shared/ui/modal/modal";
import { SalonModal } from "../salon-modal/salon-modal";
import { SocialModal } from "../social-modal/social-modal";
import { ThanksModal } from "../thanks-modal/thanks-modal";
import type { ISocialLink } from "../social-link/types";
import { useState } from "react";
export const Contacts = () => {
  const [isOpenSalonModal, setIsOpenSalonModal] = useState(false);
  const [isOpenSocialModal, setIsOpenSocialModal] = useState(false);
  const [isOpenThanksModal, setIsOpenThanksModal] = useState(false);
  const [selectedSocial, setSelectedSocial] = useState<ISocialLink | null>(
    null
  );
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <div className={styles.informationRow}>
          <div className={styles.informationBlock}>
            <div className={styles.contactInfo}>
              <div data-aos="fade-right" className={styles.address}>
                <h3 id="contacts">Адрес</h3>
                <p>Москва, м. Парк Победы, Улица 1812 года, дом 1</p>
              </div>
              <div data-aos="fade-right" className={styles.phone}>
                <h3>Телефон</h3>
                <p>+7 (995) 099-27-57</p>
              </div>
            </div>
            <div className={styles.businessInfo}>
              <div data-aos="fade-right" className={styles.workingHours}>
                <h3>Время работы</h3>
                <p>пн-пт 7:00 - 23:00</p>
                <p>сб-вс: 11:00 - 22:00</p>
              </div>
              <div data-aos="fade-right" className={styles.socialMediaInfo}>
                <h3>соц. сети</h3>
                <div className={styles.socialMedia}>
                  <SocialLink
                    onClick={(link) => {
                      setSelectedSocial(link);
                      setIsOpenSocialModal(true);
                    }}
                  />
                </div>
              </div>
            </div>
            <Button
              variant="primary"
              title="Записаться"
              onClick={() => setIsOpenSalonModal(true)}
            />
          </div>
          <div data-aos="fade-left" className={styles.map}>
            <h3>карта</h3>
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A70018bb705e3a5ddd070010a38d9382ccf1edcfeba8f47e33bfe01e3d2543d10&amp;source=constructor"></iframe>
          </div>
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
    </section>
  );
};
