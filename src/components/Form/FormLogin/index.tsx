"use client";

import React, { useState } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginData, loginSchema } from "@/schemas/client.schema";

import Button from "@/components/Button";
import Input from "@/components/Input";
import ViewPassword from "@/components/ViewPassword";
import { RiLoader4Line } from "react-icons/ri";

const FormLogin = () => {
  const { handleLogin, loadBtn } = useAuth();

  const [viewPassword, setViewPassword] = useState(
    "password" as "text" | "email" | "password" | "phone"
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
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
      <div className="relative">
        <Input
          type={viewPassword}
          label="Senha"
          error={errors?.password && errors.password.message!}
          placeholder="Digite aqui sua senha"
          register={register("password")}
        />
        <ViewPassword
          type={viewPassword}
          handle={() =>
            viewPassword == "password"
              ? setViewPassword("text")
              : setViewPassword("password")
          }
        />
      </div>
      <h6 className="h7 text-sky-800 text-end mb-4 cursor-pointer">
        Esqueceu sua senha?
      </h6>
      <Button
        type={!isDirty || !isValid ? "disableBrand" : "brand"}
        submit
        disable={!isDirty || !isValid}
      >
        {!loadBtn ? "Entrar" : <RiLoader4Line size={30} color="#fff" className="animate-spin"/>}
      </Button>
    </form>
  );
};

export default FormLogin;
