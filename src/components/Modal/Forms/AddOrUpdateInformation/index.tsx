"use client";

import React, { useState } from "react";
import InputError from "@/components/Input/InputError";
import {
  InformationData,
  informationSchema,
} from "@/schemas/infromation.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import MaskedInput from "react-input-mask";
import { useInformation } from "@/hooks/useInformation";
import { useClient } from "@/hooks/useClient";

const FormAddOrUpdateInformation = () => {
  const { addInformation, updateInformation } = useInformation();
  const { inforCurrent, typeModal } = useClient();
  const [emailValue, setEmailValue] = useState(inforCurrent?.email);
  const [phoneValue, setPhoneValue] = useState(inforCurrent?.phone);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InformationData>({
    resolver: zodResolver(informationSchema),
  });

  const handleAddInformation = (data: InformationData) => {
    addInformation(data, inforCurrent!.ownerInformation, inforCurrent!.ownerId);
  };

  const handleUpdateInformation = (data: InformationData) => {
    updateInformation(
      data,
      inforCurrent!.ownerInformation,
      inforCurrent!.ownerId,
      inforCurrent!.id!,
      inforCurrent!
    );
  };

  return (
    <form
      className="flex flex-col gap-5"
      onSubmit={
        typeModal == "addInformation"
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
