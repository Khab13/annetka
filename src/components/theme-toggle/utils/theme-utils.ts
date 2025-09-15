import { THEME_KEY } from "./constant";

export const getInitialTheme = (): "light" | "dark" => {
  const saved = localStorage.getItem(THEME_KEY);
  console.log(saved);

  if (saved === "light" || saved === "dark") {
    return saved;
  }

  return "dark";
};

export const applyTheme = (theme: "light" | "dark") => {
  document.body.classList.toggle("light", theme === "light");
  localStorage.setItem(THEME_KEY, theme);
};
