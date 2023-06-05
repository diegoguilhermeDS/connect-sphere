"use client";

import React, { useState } from "react";
import InputError from "@/components/Input/InputError";
import { InforamtionCurrent } from "@/providers/ClientContext.types";
import {
  InformationData,
  informationSchema,
} from "@/schemas/infromation.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import MaskedInput from "react-input-mask";
import { useInformation } from "@/hooks/useInformation";

interface IFormProps {
  type: string;
  infor?: InforamtionCurrent;
}

const FormAddOrUpdateInformation = ({ type, infor }: IFormProps) => {
  const { addInformation, updateInformation } = useInformation();
  const [emailValue, setEmailValue] = useState(infor?.email);
  const [phoneValue, setPhoneValue] = useState(infor?.phone);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InformationData>({
    resolver: zodResolver(informationSchema),
  });

  const handleAddInformation = (data: InformationData) => {
    addInformation(data, infor!.ownerInformation, infor!.ownerId);
  };

  const handleUpdateInformation = (data: InformationData) => {
    updateInformation(
      data,
      infor!.ownerInformation,
      infor!.ownerId,
      infor!.id!,
      infor!
    );
  };

  return (
    <form
      className="flex flex-col gap-5"
      onSubmit={
        type == "addInformation"
          ? handleSubmit(handleAddInformation)
          : handleSubmit(handleUpdateInformation)
      }
      noValidate={false}
    >
      <input
        type="email"
        placeholder="E-mail"
        {...register("email")}
        onChange={(e) => setEmailValue(e.target.value)}
        value={emailValue}
      />
      {errors?.email && <InputError message={errors.email.message!} />}
      <MaskedInput
        mask={"(99) 99999-9999"}
        placeholder="Ex: (xx) 9xxxx-xxxx"
        {...register("phone")}
        onChange={(e) => setPhoneValue(e.target.value)}
        value={phoneValue}
      />
      {errors?.phone && <InputError message={errors.phone.message!} />}
      <button type="submit">Enviar</button>
    </form>
  );
};

export default FormAddOrUpdateInformation;
