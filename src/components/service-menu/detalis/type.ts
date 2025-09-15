import type { Service } from "../type";

export interface DetailsProps {
  service: Service;
  isFading: boolean;
  onPrimaryClick: () => void;
  onSecondaryClick: () => void;
}
