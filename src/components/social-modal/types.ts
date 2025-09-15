import type { ISocialLink } from "../social-link/types";

export interface SocialModalProps {
  onClose: () => void;
  social: ISocialLink;
}
