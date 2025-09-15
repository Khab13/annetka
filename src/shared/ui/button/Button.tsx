import styles from "./button.module.css";
import { type IButton } from "./type";

export const Button = ({ variant, title, onClick, children }: IButton) => {
  return (
    <button className={styles[variant]} onClick={onClick}>
      <span>{children || title}</span>
    </button>
  );
};
