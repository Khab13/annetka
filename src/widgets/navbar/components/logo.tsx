import styles from "../navbar.module.css";

export const Logo = () => {
  return (
    <div
      className={styles.logo}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <span>Annetka.Hair</span>
    </div>
  );
};
