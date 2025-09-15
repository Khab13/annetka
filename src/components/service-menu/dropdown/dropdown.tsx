import styles from "../service-menu.module.css";
import serviceArrowImg from "../../../shared/assets/icons/sevice-menu-arrow.svg";
import type { DropdownProps } from "./type";

export const Dropdown = ({
  services,
  selected,
  isOpen,
  onToggle,
  onSelect,
}: DropdownProps) => (
  <div className={styles.customDropdown}>
    <div className={styles.dropdownSelected} onClick={onToggle}>
      {selected.title}
      <span className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ""}`}>
        <img src={serviceArrowImg} alt="arrow" />
      </span>
    </div>

    {isOpen && (
      <ul
        className={`${styles.dropdownList} ${
          isOpen ? styles.open : styles.closed
        }`}
      >
        {services.map((service) => (
          <li
            key={service.id}
            className={styles.dropdownItem}
            onClick={() => onSelect(service)}
          >
            {service.title}
          </li>
        ))}
      </ul>
    )}
  </div>
);
