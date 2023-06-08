"use client";

import { createContext, useState } from "react";
import {
  AuthenticatedClient,
  Contact,
  iClientContextProps,
  iClientProviderProps,
  iErrorData,
  InforamtionCurrent,
  tokenDecode,
} from "./AuthContext.types";
import { useRouter } from "next/navigation";
import {
  ClientRegisterData,
  ClientUpdateData,
  LoginData,
} from "@/schemas/client.schema";
import { api } from "@/services/api";
import { setCookie, parseCookies, destroyCookie } from "nookies";
import Toast from "@/components/Toast";
import { AxiosError } from "axios";
import jwtDecode from "jwt-decode";
import { InformationProvider } from "./InformationContext";
import { toast } from "react-toastify";

export const ClientContext = createContext<iClientContextProps>(
  {} as iClientContextProps
);

export const ClientProvider = ({ children }: iClientProviderProps) => {
  const router = useRouter();

  const [openModal, setOpenModal] = useState(false);
  const [loadBtn, setLoadBtn] = useState(false);
  const [typeModal, setTypeModal] = useState<string>("");
  const [inforCurrent, setInforCurrent] = useState<InforamtionCurrent>(
    {} as InforamtionCurrent
  );
  const [clientCurrent, setClientCurrent] = useState<AuthenticatedClient>(
    {} as AuthenticatedClient
  );
  const [contactCurrent, setContactCurrent] = useState<Contact>({} as Contact);

  const token = parseCookies();
  if (token["client.token"]) {
    api.defaults.headers.common.Authorization = `Bearer ${token["client.token"]}`;
  }

  const handleLogin = async (loginData: LoginData) => {
    try {
      setLoadBtn(true)
      const res = await api.post("login/", loginData);
      var decoded: tokenDecode = jwtDecode(res.data.token);
      setCookie(null, "client.token", res.data.token, {
        maxAge: 60 * 30,
        path: "/",
      });
      setCookie(null, "client.id", decoded.sub, {
        maxAge: 60 * 30,
        path: "/",
      });

      api.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;
      Toast({message: "Login feito com successo!", type: "success"})
      router.push("/dashboard");
    } catch (error) {
      const err = error as AxiosError<iErrorData>;
      console.log(err);

      const msg = "E-mail ou Senha inválido";

      Toast({
        message: msg,
      });
    }

    setLoadBtn(false)
  };

  const handleRegister = async (clientRegisterData: ClientRegisterData) => {
    const re = /\W+/g;
    const phone = clientRegisterData.phone.split(re).join("");
    const data: Partial<ClientRegisterData> = {
      ...clientRegisterData,
      phone: phone,
    };
    try {
      setLoadBtn(true)
      delete data["confirmPassword"];
      const res = await api.post("clients/", data);
      Toast({ message: "Cliente criado com sucesso!", type: "success" });
      router.push("/");
    } catch (error) {
      const err = error as AxiosError<iErrorData>;
      console.log(err);
      const msg = "E-mail ou Telefone já existe";
      Toast({
        message: msg,
      });
    }

    setLoadBtn(false)
  };

  const handleRemoveClientOrContact = async (
    id: string,
    endPoint: "clients" | "contacts"
  ) => {
    try {
      const res = await api.delete(`${endPoint}/${id}`);
      Toast({ message: "Informações deletadas com sucesso!", type: "success" });
      setOpenModal(false);
      destroyCookie(null, "client.token");
      destroyCookie(null, "client.id");
      router.push("/");
    } catch (error) {
      console.log(error);
      Toast({
        message: "Ops! algo deu errado. Tente novamente!",
      });
    }
  };

  const handleUpdateClient = async (id: string, data: ClientUpdateData) => {
    try {
      const res = await api.patch(`clients/${id}`, data);
      Toast({
        message: "Os dados foram atualizados com sucesso!",
        type: "success",
      });
      setOpenModal(false);
      router.refresh();
    } catch (error) {
      console.log(error);
      Toast({ message: "Ops! algo deu errado. Tente novamente!" });
    }
  };

  return (
    <ClientContext.Provider
      value={{
        handleLogin,
        handleRegister,
        handleRemoveClientOrContact,
        handleUpdateClient,
        openModal,
        setOpenModal,
        typeModal,
        setTypeModal,
        inforCurrent,
        setInforCurrent,
        clientCurrent,
        setClientCurrent,
        contactCurrent,
        setContactCurrent,
        loadBtn,
        setLoadBtn
      }}
    >
      <InformationProvider>
        {children}
      </InformationProvider>
    </ClientContext.Provider>
  );
};
