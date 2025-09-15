import type { ISocialLink } from "./types";
import vkIcon from "../../shared/assets/icons/modal-social-vk.svg";
import inIcon from "../../shared/assets/icons/modal-social-in.svg";
import fcIcon from "../../shared/assets/icons/modal-social-fc.svg";

export const links: ISocialLink[] = [
  {
    title: "vk",
    name: "ВКонтакте",
    link: "https://vk.com/annetka.hair",
    icon: vkIcon,
  },
  {
    title: "in",
    name: "Инстаграм",
    link: "https://www.instagram.com/annetka.hair/",
    icon: inIcon,
  },
  {
    title: "fc",
    name: "Фейсбук",
    link: "https://www.facebook.com/p/Annettes-Hair-Salon-100063744424163/",
    icon: fcIcon,
  },
];
