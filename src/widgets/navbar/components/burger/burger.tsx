import styles from "../../navbar.module.css";
import type { IBurgerProps } from "./type";

export const Burger = ({ isActive, onClick }: IBurgerProps) => (
  <div
    className={`${styles.menuBurger} ${isActive ? styles.active : ""}`}
    onClick={onClick}
  >
    <span></span>
  </div>
);
