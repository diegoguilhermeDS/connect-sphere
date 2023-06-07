"use client";

import Input from "@/components/Input";
import InputError from "@/components/Input/InputError";
import { useClient } from "@/hooks/useClient";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ClientRegisterData,
  clientRegisterSchema,
} from "@/schemas/client.schema";
import Button from "@/components/Button";
import MaskedInput from "react-input-mask"

const FormRegister = () => {
  const { handleRegister } = useClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClientRegisterData>({
    resolver: zodResolver(clientRegisterSchema),
  });

  return (
    <form onSubmit={handleSubmit(handleRegister)} className="flex flex-col gap-4">
      <Input
        type="text"
        inputName="name"
        placeholder="Nome"
        register={register("name")}
      />
      <Input
        type="email"
        inputName="email"
        placeholder="E-mail"
        register={register("email")}
      />
      {errors?.email && <InputError message={errors.email.message!} />}
      <Input
        type="password"
        inputName="password"
        placeholder="Digite aqui sua senha"
        register={register("password")}
      />
      {errors?.password && <InputError message={errors.password.message!} />}
      <Input
        type="password"
        inputName="confirm"
        placeholder="Digite novamente sua senha"
        register={register("confirmPassword")}
      />
      {errors?.confirmPassword && <InputError message={errors.confirmPassword.message!} />}
      <MaskedInput mask={"(99) 99999-9999"} placeholder="Ex: (xx) 9xxxx-xxxx" {...register("phone")}/>
      {errors?.phone && <InputError message={errors.phone.message!} />}
      <Button type="brand" submit>Criar a conta</Button>
    </form>
  );
};

export default FormRegister;
