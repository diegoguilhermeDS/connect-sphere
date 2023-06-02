"use client";

import { createContext } from "react";
import {
  IClientContextProps,
  IClientProviderProps,
  IErrorData,
  IErrorDataRegister,
} from "./ClientContext.types";
import { useRouter } from "next/navigation";
import { ClientRegisterData, LoginData } from "@/schemas/client.schema";
import { api } from "@/services/api";
import { toast } from "react-toastify";
import { setCookie } from "nookies";
import Toast from "@/components/Toast";
import { AxiosError } from "axios";

export const ClientContext = createContext<IClientContextProps>(
  {} as IClientContextProps
);

export const ClientProvider = ({ children }: IClientProviderProps) => {
  const router = useRouter();

  const handleLogin = async (loginData: LoginData) => {
    try {
      const res = await api.post("login/", loginData);

      setCookie(null, "client-token", res.data.token, {
        maxAge: 60 * 30,
        path: "/",
      });

      Toast({ message: "Login efetuado com sucesso", type: true });
      router.push("/dashboard");
    } catch (error) {
      const err = error as AxiosError<IErrorData>;
      console.log(err);
      Toast({ message: err.response!.data.message! });
    }
  };

  const handleRegister = async (clientRegisterData: ClientRegisterData) => {
    const re = /\W+/g;
    const phone = clientRegisterData.phone.split(re).join("");
    const data: Partial<ClientRegisterData> = { ...clientRegisterData, phone: phone };
    try {
      delete data["confirmPassword"]
      const res = await api.post("clients/", data);
      Toast({ message: "Cliente criado com sucesso!", type: true });
      router.push("/");
    } catch (error) {
      const err = error as AxiosError<IErrorData>;
      console.log(err);
      Toast({ message: err.response!.data.message! });
    }
  };

  return (
    <ClientContext.Provider value={{ handleLogin, handleRegister }}>
      {children}
    </ClientContext.Provider>
  );
};
