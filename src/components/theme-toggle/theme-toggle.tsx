import imgSun from "../../shared/assets/icons/theme-sun.svg";
import imgMoon from "../../shared/assets/icons/theme-moon.svg";
import styles from "./theme-toggle.module.css";
import { useEffect, useState } from "react";
import { applyTheme, getInitialTheme } from "./utils/theme-utils";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className={styles.theme} onClick={toggleTheme}>
      <img
        src={theme === "dark" ? imgSun : imgMoon}
        alt={theme}
        className={theme === "light" ? styles.blackIcon : styles.whiteIcon}
      />
    </div>
  );
};
