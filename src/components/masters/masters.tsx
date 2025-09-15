import styles from "./master.module.css";
import { SlideShow } from "../../widgets/slide-show/slide-show";
import { masters } from "./constants";

export const Masters = () => (
  <section className={styles.mastersWrapper}>
    <div className="container">
      <h2 data-aos="fade-right" id="masters">
        мастера
      </h2>
      <SlideShow
        items={masters}
        renderSlide={(master, index) => (
          <div data-aos="flip-left" key={index} className={styles.card}>
            <div className={styles.cardImg}>
              <img src={master.img} alt={master.fullName} />
            </div>
            <div className={styles.descBlock}>
              <div className={styles.speciality}>
                <p>{master.fullName}</p>
                <p>{master.masteryLevel}</p>
              </div>
              <p>{master.specialist}</p>
              <p>{master.experience}</p>
            </div>
          </div>
        )}
      />
    </div>
  </section>
);
