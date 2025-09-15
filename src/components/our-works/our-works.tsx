import styles from "./our-works.module.css";
import { images } from "./constants";

export const OurWorks = () => (
  <section className={styles.wrapper}>
    <div className="container">
      <div data-aos="fade-right" className={styles.title}>
        <h2 id="works">Наши работы</h2>
        <p>
          - Больше работ у нас в{" "}
          <a href="https://www.instagram.com/annetka.hair/" target="_blank">
            instagram
          </a>
        </p>
      </div>
    </div>
    <div className={styles.desktop}>
      <div className={styles.track}>
        {images.concat(images).map((src, i) => (
          <div className={styles.blockDesktop} key={i}>
            <img src={src} alt={`img-${i}`} />
          </div>
        ))}
      </div>
    </div>
    <div className={styles.mobile}>
      <div className={styles.staticGrid}>
        {images.map((src, i) => (
          <div className={styles.blockMobile} key={i}>
            <img src={src} alt={`img-${i}`} />
          </div>
        ))}
      </div>
    </div>
  </section>
);
