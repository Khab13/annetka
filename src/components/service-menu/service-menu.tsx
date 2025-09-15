import { useState } from "react";
import { Modal } from "../../shared/ui/modal/modal";
// import { Button } from "../../shared/ui/button/Button";
import { serviceLists } from "./constants";
import { type Service } from "./type";
import styles from "./service-menu.module.css";
// import serviceArrowImg from "../../shared/assets/icons/sevice-menu-arrow.svg";
import { SalonModal } from "../salon-modal/salon-modal";
import { ThanksModal } from "../thanks-modal/thanks-modal";
import { Dropdown } from "./dropdown/dropdown";
import { Details } from "./detalis/detalis";
import { ImageBlock } from "./image-block/image-block";
import { Sidebar } from "./sidebar/sidebar";

export const ServiceMenu = () => {
  const [selectedService, setselectedService] = useState<Service>(
    serviceLists[0]
  );
  const [isOpenSalonModal, setIsOpenSalonModal] = useState(false);
  const [isOpenThanksModal, setIsOpenThanksModal] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isFading, setIsFading] = useState(false);

  const handleSelect = (service: Service) => {
    if (service.id === selectedService.id) return;
    setIsFading(true);
    setTimeout(() => {
      setselectedService(service);
      setDropdownOpen(false);
      setIsFading(false);
    }, 300);
  };

  const handleSecondaryClick = () => {
    const section = document.getElementById("masters");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={styles.serviceMenu}>
      <div className="container">
        <h2
          data-aos="fade-right"
          id="services"
          className={styles.serviceMenuTitle}
        >
          услуги и цены
        </h2>

        <div className={styles.serviceMenuRow}>
          <Dropdown
            services={serviceLists}
            selected={selectedService}
            isOpen={dropdownOpen}
            onToggle={() => setDropdownOpen(!dropdownOpen)}
            onSelect={handleSelect}
          />

          <Sidebar
            services={serviceLists}
            selectedId={selectedService.id}
            onSelect={handleSelect}
          />

          <Details
            service={selectedService}
            isFading={isFading}
            onPrimaryClick={() => setIsOpenSalonModal(true)}
            onSecondaryClick={handleSecondaryClick}
          />

          <ImageBlock
            src={selectedService.img}
            alt="girl"
            isFading={isFading}
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

        {isOpenThanksModal && (
          <Modal onClose={() => setIsOpenThanksModal(false)}>
            <ThanksModal onClose={() => setIsOpenThanksModal(false)} />
          </Modal>
        )}
      </div>
    </section>
  );
};
