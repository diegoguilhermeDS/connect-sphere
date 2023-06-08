"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import MaskedInput from "react-input-mask";
import { useInformation } from "@/hooks/useInformation";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  InformationData,
  informationSchema,
} from "@/schemas/infromation.schema";
import { Information } from "@/providers/AuthContext.types";
import Button from "@/components/Button";

interface iFormModalAddOrUpdateInforProps {
  infor?: Information;
  endPoint: "clients" | "contacts";
  ownerId: string;
  handleModal: React.Dispatch<React.SetStateAction<boolean>>
}

const FormModalAddOrUpdateInfor = ({
  endPoint,
  ownerId,
  infor,
  handleModal
}: iFormModalAddOrUpdateInforProps) => {
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
    addInformation(data, endPoint, ownerId, handleModal);
  };

  const handleUpdateInformation = (data: InformationData) => {
    updateInformation(data, endPoint, ownerId, infor!.id, infor!, handleModal);
  };

  return (
    <form
      className="flex flex-col gap-5"
      onSubmit={
        !infor
          ? handleSubmit(handleAddInformation)
          : handleSubmit(handleUpdateInformation)
      }
      noValidate={false}
    >
      <div className="relative flex flex-col gap-2">
        <label htmlFor="email" className="input-label text-gray-950">
          E-mail
        </label>
        <input
          type="email"
          id="email"
          placeholder="Digite seu e-mail"
          {...register("email")}
          value={emailValue}
          onChange={(e) => setEmailValue(e.target.value)}
          className="
            input-base
            input-placeholder
            transition-all
            ease-in-out
            duration-300
            "
        />
        {errors.email && (
        <span className="absolute -bottom-4 text-xs text-rose-600">{errors.email.message}</span>
      )}
      </div>
      <div className="relative flex flex-col gap-2 mb-4">
        <label htmlFor="phone" className="input-label text-gray-950">
          Telefone
        </label>
        <MaskedInput
          mask="(99) 99999-9999"
          placeholder="(xx) 9xxxx-xxxx"
          {...register("phone")}
          value={phoneValue}
          onChange={(e) => setPhoneValue(e.target.value)}
          className="
          input-base
          input-placeholder
          transition-all
          ease-in-out
          duration-300
          "
        />
        {errors.phone && (
        <span className="absolute -bottom-4 text-xs text-rose-600">{errors.phone.message}</span>
      )}
      </div>
      <Button
        type="brand"
        submit
      >
        Enviar
      </Button>
    </form>
  );
};

export default FormModalAddOrUpdateInfor;
