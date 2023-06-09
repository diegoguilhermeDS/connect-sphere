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
import { ContactData } from "@/schemas/contact.schema";

export const ClientContext = createContext<iClientContextProps>(
  {} as iClientContextProps
);

export const ClientProvider = ({ children }: iClientProviderProps) => {
  const router = useRouter();

  const [loadBtn, setLoadBtn] = useState(false);

  const token = parseCookies();
  if (token["client.token"]) {
    api.defaults.headers.common.Authorization = `Bearer ${token["client.token"]}`;
  }

  const handleLogin = async (loginData: LoginData) => {
    try {
      setLoadBtn(true);
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
      Toast({ message: "Login feito com successo!", type: "success" });
      router.push("/dashboard");
    } catch (error) {
      const err = error as AxiosError<iErrorData>;
      console.log(err);

      const msg = "E-mail ou Senha inválido";

      Toast({
        message: msg,
      });
    }

    setLoadBtn(false);
  };

  const handleRegister = async (clientRegisterData: ClientRegisterData) => {
    const re = /\W+/g;
    const phone = clientRegisterData.phone.split(re).join("");
    const data: Partial<ClientRegisterData> = {
      ...clientRegisterData,
      phone: phone,
    };
    try {
      setLoadBtn(true);
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

    setLoadBtn(false);
  };

  const handleRemoveClientOrContact = async (
    id: string,
    endPoint: "clients" | "contacts",
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>,
    setHiddenModal: React.Dispatch<React.SetStateAction<boolean>>,
    setOpenModalEdit: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      const res = await api.delete(`${endPoint}/${id}`);
      Toast({ message: "Informações deletadas com sucesso!", type: "success" });
      setOpenModal(false);
      setHiddenModal(false);
      if (endPoint == "clients") {
        setOpenModalEdit(false);
        destroyCookie(null, "client.token");
        destroyCookie(null, "client.id");
        router.push("/");
      }
      router.refresh();
    } catch (error) {
      console.log(error);
      Toast({
        message: "Ops! algo deu errado. Tente novamente!",
      });
    }
  };

  const handleUpdateClient = async (
    id: string,
    oldName: string,
    data: ClientUpdateData,
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>,
    setHiddenModal: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    if (data.name!.length <= 0 || data.name == oldName) {
      delete data.name;
    }

    if (data.password!.length <= 0) {
      delete data.password;
    }

    try {
      if (data.password && data.password!.length <= 7) {
        throw new Error("The password must have at least 8 characters");
      }

      const res = await api.patch(`clients/${id}`, data);
      Toast({
        message: "Os dados foram atualizados com sucesso!",
        type: "success",
      });
      setOpenModal(false);
      setHiddenModal(false);
      router.refresh();
    } catch (error) {
      console.log(error);
      Toast({ message: "Ops! algo deu errado. Tente novamente!" });
    }
  };

  const handleCreateContact = async (contactData: ContactData, setOpenModalAdd: React.Dispatch<React.SetStateAction<boolean>>) => {
    const re = /\W+/g;
    const phone = contactData.phone.split(re).join("");
    const data: ContactData = {
      ...contactData,
      phone: phone,
    };
    try {
      setLoadBtn(true)
      const res = await api.post("contacts/", data)
      Toast({ message: "Contato criado com sucesso!", type: "success" });
      setOpenModalAdd(false)
      router.refresh()
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

  const handleUpdateContact = async (
    id: string,
    oldName: string,
    data: ClientUpdateData,
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>,
    setHiddenModal: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    if (data.name!.length <= 0 || data.name == oldName) {
      delete data.name;
    }

    try {
      const res = await api.patch(`contacts/${id}`, data);
      Toast({
        message: "Os dados foram atualizados com sucesso!",
        type: "success",
      });
      setOpenModal(false);
      setHiddenModal(false);
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
        handleCreateContact,
        handleUpdateContact,
        loadBtn,
        setLoadBtn,
      }}
    >
      <InformationProvider>{children}</InformationProvider>
    </ClientContext.Provider>
  );
};
