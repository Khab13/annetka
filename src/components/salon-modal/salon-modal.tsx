import { Button } from "../../shared/ui/button/Button";
import styles from "./salon-modal.module.css";
import type { SalonModalProps } from "./types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formShema } from "./schema";
import { formData } from "./constants";
import type { IForm } from "./types";
import { api } from "../../shared/config/axios";
import { toast } from "react-toastify";
import { useState } from "react";

export const SalonModal = ({ onSubmit }: SalonModalProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IForm>({
    resolver: yupResolver(formShema),
    defaultValues: formData,
  });

  const nameError = errors.name?.message;
  const phoneError = errors.phone?.message;
  const commentError = errors.comment?.message;

  const submit = async (formData: IForm) => {
    if (isLoading) return;
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    try {
      const response = await api.post("/users", formData);
      console.log(response);
      onSubmit();
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const name = watch("name");
  const phone = watch("phone");
  const comment = watch("comment");

  const isFormEmpty = !name && !phone && !comment;

  return (
    <>
      <h2 className={styles.title}>
        Запись в салон <span>Annetka.Hair</span>
      </h2>
      <p className={styles.subtitle}>
        Оставьте свои данные — мы скоро свяжемся с вами.
      </p>
      <form onSubmit={handleSubmit(submit)} autoComplete="off">
        <input type="text" placeholder="Ваше имя" {...register("name")} />
        {nameError && <p>{nameError}</p>}
        <input type="tel" placeholder="Телефон" {...register("phone")} />
        {phoneError && <p>{phoneError}</p>}
        <textarea placeholder="Комментарий" {...register("comment")} />
        {commentError && <p>{commentError}</p>}
        {!isFormEmpty && (
          <Button variant="primary" title="Отправить">
            {isLoading ? <span className={styles.spinner} /> : ""}
          </Button>
        )}
      </form>
    </>
  );
};
