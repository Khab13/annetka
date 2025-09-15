import * as yup from "yup";

export const formShema = yup.object({
  name: yup.string().required("Пожалуйста, укажите ваше имя."),
  phone: yup
    .string()
    .required("Пожалуйста, укажите ваш номер телефона.")
    .matches(/^(\+?\d{1,3}[- ]?)?\d{10}$/, "Введите корректный номер телефона"),
  comment: yup
    .string()
    .required("Пожалуйста, укажите когда вам удобно для связи.")
    .max(30),
});
