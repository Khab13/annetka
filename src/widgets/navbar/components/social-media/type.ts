import type { ISocialLink } from "../../../../components/social-link/types";

export interface ISocialMediaProps {
  onSelect: (link: ISocialLink) => void;
}
