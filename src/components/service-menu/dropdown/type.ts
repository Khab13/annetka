import type { Service } from "../type";
export interface DropdownProps {
  services: Service[];
  selected: Service;
  isOpen: boolean;
  onToggle: () => void;
  onSelect: (service: Service) => void;
}
