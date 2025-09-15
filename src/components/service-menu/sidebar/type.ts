import type { Service } from "../type";
export interface SidebarProps {
  services: Service[];
  selectedId: number;
  onSelect: (service: Service) => void;
}
