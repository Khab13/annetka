import { useRef, useState } from "react";
import styles from "./navbar.module.css";
import { Modal } from "../../shared/ui/modal/modal";
import { SocialModal } from "../../components/social-modal/social-modal";
import type { ISocialLink } from "../../components/social-link/types";
import { useScrolled } from "./hooks/use-scrolled";
import { useBodyLock } from "./hooks/use-body-lock";
import { Logo } from "./components/logo";
import { Burger } from "./components/burger/burger";
import { NavLinks } from "./components/nav-links/nav-links";
import { SocialMedia } from "./components/social-media/social-media";
import { ThemeToggle } from "../../components/theme-toggle/theme-toggle";

export const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [isOpenSocialModal, setIsOpenSocialModal] = useState(false);
  const [selectedSocial, setSelectedSocial] = useState<ISocialLink | null>(
    null
  );
  const navRef = useRef<HTMLElement | null>(null);

  const scrolled = useScrolled(54);
  useBodyLock(isActive);

  return (
    <nav ref={navRef} className={scrolled ? styles.navActive : ""}>
      <div className="container">
        <div className={styles.navigation}>
          <Logo />

          <div className={styles.menu}>
            <Burger
              isActive={isActive}
              onClick={() => setIsActive(!isActive)}
            />
            <div
              className={`${styles.listWrapper} ${
                isActive ? styles.active : ""
              }`}
              onClick={(e) => e.target === e.currentTarget}
            >
              <NavLinks
                navHeight={navRef.current?.offsetHeight ?? 0}
                onScroll={() => setIsActive(false)}
              />

              <SocialMedia
                onSelect={(link) => {
                  setSelectedSocial(link);
                  setIsOpenSocialModal(true);
                }}
              />
            </div>
          </div>
          <ThemeToggle />
        </div>
        {isOpenSocialModal && selectedSocial && (
          <Modal onClose={() => setIsOpenSocialModal(false)}>
            <SocialModal
              social={selectedSocial}
              onClose={() => setIsOpenSocialModal(false)}
            />
          </Modal>
        )}
      </div>
    </nav>
  );
};
