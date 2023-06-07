"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useClient } from "@/hooks/useClient";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ClientRegisterData,
  clientRegisterSchema,
} from "@/schemas/client.schema";
import Input from "@/components/Input";
import Button from "@/components/Button";
import InputCheckbox from "@/components/Input/InputCheckbox";
import ViewPassword from "@/components/ViewPassword";

const FormRegister = () => {
  const { handleRegister } = useClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClientRegisterData>({
    resolver: zodResolver(clientRegisterSchema),
  });

  const [disableBtn, setDisableBtn] = useState(true);
  const [viewPassword, setViewPassword] = useState("password" as "text" | "email" | "password" | "phone");
  const [viewConfirmPassword, setViewConfirmPassword] = useState("password" as "text" | "email" | "password" | "phone");

  return (
    <form
      onSubmit={handleSubmit(handleRegister)}
      className="flex flex-col gap-6"
    >
      <Input
        type="text"
        label="Nome"
        placeholder="Nome"
        register={register("name")}
        error={errors?.name && errors.name.message!}
      />
      <Input
        type="email"
        label="E-mail"
        placeholder="E-mail"
        register={register("email")}
        error={errors?.email && errors.email.message!}
      />
      <div className="relative">
        <Input
          type={viewPassword}
          label="Senha"
          placeholder="Digite aqui sua senha"
          register={register("password")}
          error={errors?.password && errors.password.message!}
        />
        <ViewPassword type={viewPassword} handle={() => (viewPassword == "password" ? setViewPassword("text") : setViewPassword("password"))}/>
      </div>
      <div className="relative">
        <Input
          type={viewConfirmPassword}
          label="Confirme sua senha"
          placeholder="Digite novamente sua senha"
          register={register("confirmPassword")}
          error={errors?.confirmPassword && errors.confirmPassword.message!}
        />
        <ViewPassword type={viewConfirmPassword} handle={() => (viewConfirmPassword == "password" ? setViewConfirmPassword("text") : setViewConfirmPassword("password"))}/>
      </div>
      <Input
        type="phone"
        label="Número de telefone"
        placeholder="(xx) 9xxxx-xxxx"
        register={register("phone")}
        error={errors?.phone && errors.phone.message!}
      />
      <div className="flex items-start">
        <InputCheckbox handle={() => setDisableBtn(!disableBtn)}/>
        <p className="text-sm">concordo com os termos e condições e política de privacidade</p>
      </div>
      <Button type={disableBtn ? "disableBrand" : "brand"} submit disable={disableBtn}>
        Criar a conta
      </Button>
    </form>
  );
};

export default FormRegister;
