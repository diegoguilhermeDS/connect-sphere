"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import InputError from "@/components/Input/InputError";
import { useClient } from "@/hooks/useClient";
import { LoginData, loginSchema } from "@/schemas/client.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { ReactNode } from "react";
import { useForm } from "react-hook-form";

const FormLogin = () => {
  const { handleLogin } = useClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const handleFormSubmit = (formData: LoginData) => {
    handleLogin(formData);
  };
  return (
    <form
      onSubmit={handleSubmit(handleFormSubmit)}
      noValidate
      autoComplete="off"
      className="flex flex-col gap-4"
    >
      <Input
        type="email"
        inputName="email"
        placeholder="Digite seu e-mail"
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
      <Button typeBtn="submit">Entrar</Button>
    </form>
  );
};

export default FormLogin;
