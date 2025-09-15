import { type Service } from "./type";
import serviceImgGirl from "../../shared/assets/images/service-img-girl.png";
import serviceImgGirl2 from "../../shared/assets/images/service-img-girl-2.jpg";
import serviceImgGirl3 from "../../shared/assets/images/service-img-girl-3.jpg";
import serviceImgGirl4 from "../../shared/assets/images/service-img-girl-4.jpg";

export const serviceLists: Service[] = [
  {
    id: 1,
    title: "Стрижка",
    description:
      "Стрижка — это искусство, которое помогает подчеркнуть стиль, обновить внешний вид и выразить индивидуальность, делая образ современным и ухоженным.",
    serviceEmployee: [
      {
        subTitle: "Стрижка у стажера",
        price: "1199 ₽",
      },
      {
        subTitle: "Стрижка у мастера",
        price: "2299 ₽",
      },
      {
        subTitle: "Стрижка у профи",
        price: "3399 ₽",
      },
    ],

    img: serviceImgGirl,
  },
  {
    id: 2,
    title: "Укладка",
    description:
      "Укладка волос придаёт им форму, объем и сияние, помогает создать стильный и аккуратный образ на любой случай.",
    serviceEmployee: [
      {
        subTitle: "Укладка у стажера",
        price: "1000 ₽",
      },
      {
        subTitle: "Укладка у мастера",
        price: "2800 ₽",
      },
      {
        subTitle: "Укладка у профи",
        price: "5000 ₽",
      },
    ],
    img: serviceImgGirl2,
  },
  {
    id: 3,
    title: "Окрашивание",
    description:
      "Окрашивание волос позволяет обновить цвет, подчеркнуть природную красоту и создать уникальный образ, отражающий стиль и настроение клиента.",
    serviceEmployee: [
      {
        subTitle: "Окрашивание у стажера",
        price: "3000 ₽",
      },
      {
        subTitle: "Окрашивание у мастера",
        price: "8000 ₽",
      },
      {
        subTitle: "Окрашивание у профи",
        price: "16000 ₽",
      },
    ],
    img: serviceImgGirl3,
  },
  {
    id: 4,
    title: "Уход",
    description:
      "Уход за волосами восстанавливает их здоровье, укрепляет структуру, увлажняет и придаёт естественный блеск, обеспечивая красоту и мягкость каждого дня.",
    serviceEmployee: [
      {
        subTitle: "Уход у стажера",
        price: "1500 ₽",
      },
      {
        subTitle: "Уход у мастера",
        price: "3000 ₽",
      },
      {
        subTitle: "Уход у профи",
        price: "4500 ₽",
      },
    ],
    img: serviceImgGirl4,
  },
];
