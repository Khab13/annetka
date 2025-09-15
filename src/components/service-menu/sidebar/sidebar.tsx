import styles from "../service-menu.module.css";
import type { SidebarProps } from "./type";

export const Sidebar = ({ services, selectedId, onSelect }: SidebarProps) => (
  <div data-aos="fade-right" className={styles.serviceMenuSidebar}>
    <ul className={styles.serviceList}>
      {services.map((service) => (
        <li
          key={service.id}
          className={`${styles.serviceListItem} ${
            selectedId === service.id ? styles.active : ""
          }`}
          onClick={() => onSelect(service)}
        >
          <span>{service.title}</span>
          <span
            className={`${styles.toggleIcon} ${
              selectedId === service.id ? styles.active : ""
            }`}
          />
        </li>
      ))}
    </ul>
  </div>
);
