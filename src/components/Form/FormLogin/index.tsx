"use client";

import React from "react";
import { useClient } from "@/hooks/useClient";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginData, loginSchema } from "@/schemas/client.schema";

import Button from "@/components/Button";
import Input from "@/components/Input";
import InputError from "@/components/Input/InputError";

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
      className="flex flex-col gap-5"
    >
      <Input
        type="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        error={errors?.email && errors.email.message!}
        register={register("email")}
      />
      <Input
        type="password"
        label="Senha"
        error={errors?.password && errors.password.message!}
        placeholder="Digite aqui sua senha"
        register={register("password")}
      />
      <h6 className="h7 text-sky-800 text-end mb-4 cursor-pointer">Esqueceu sua senha?</h6>
      <Button type={"brand"} submit>Entrar</Button>
    </form>
  );
};

export default FormLogin;
