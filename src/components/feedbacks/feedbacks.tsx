import styles from "./feedback.module.css";
import { SlideShow } from "../../widgets/slide-show/slide-show";
import { feedbacks } from "./constants";

export const Feedbacks = () => (
  <section className={styles.feedbacksWrapper}>
    <div className="container">
      <h2 data-aos="fade-right" id="feedbacks">
        отзывы клиентов
      </h2>
      <SlideShow
        items={feedbacks}
        renderSlide={(feedback, index) => (
          <div data-aos="flip-right" key={index} className={styles.cardImg}>
            <img src={feedback} alt="feedback" />
          </div>
        )}
      ></SlideShow>
    </div>
  </section>
);
