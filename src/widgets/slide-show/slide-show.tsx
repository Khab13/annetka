import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";


// import 'swiper/swiper-bundle.css';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slide-show.css";
import { type SlideShowProps } from "./type";

import imgNext from "../../shared/assets/icons/swiper-next.svg";
import imgPrev from "../../shared/assets/icons/swiper-pre.svg";

export const SlideShow = <T,>({ items, renderSlide }: SlideShowProps<T>) => (
  <div className="swiper-wrapper">
    <Swiper
      modules={[Pagination, Navigation]}
      spaceBetween={20}
      breakpoints={{
        0: {
          slidesPerView: 1,
          slidesPerGroup: 1,
          pagination: {
            clickable: true,
            el: ".swiper-pagination",
          },
        },
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          pagination: {
            clickable: true,
            el: ".swiper-pagination",
          },
        },
        1400: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          pagination: false,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        },
      }}
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>{renderSlide(item, index)}</SwiperSlide>
      ))}

      <div className="swiper-pagination"></div>
    </Swiper>

    <div className="swiper-button-prev">
      <img src={imgPrev} alt="next" />
    </div>
    <div className="swiper-button-next">
      <img src={imgNext} alt="next" />
    </div>
  </div>
);
