import type { ISocialMediaProps } from "./type";
import { SocialLink } from "../../../../components/social-link/social-link";
import styles from "../../navbar.module.css";

export const SocialMedia = ({ onSelect }: ISocialMediaProps) => {
  return (
    <div className={styles.socialMedia}>
      <SocialLink onClick={onSelect} />
    </div>
  );
};
