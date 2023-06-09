"use client";

import { createContext, useState } from "react";
import { iInformationContextProps, iInformationProviderProps } from "./types";
import { InformationData } from "@/schemas/infromation.schema";
import { api } from "@/services/api";
import Toast from "@/components/Toast";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";
import { InforamtionCurrent, Information } from "../AuthContext.types";

export const InformationContext = createContext<iInformationContextProps>(
  {} as iInformationContextProps
);

export const InformationProvider = ({
  children
}: iInformationProviderProps) => {
  const router = useRouter();

  const [loadBtn, setLoadBtn] = useState(false);

  const addInformation = async (
    inforData: InformationData,
    endPoint: "clients" | "contacts",
    id: string,
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>,
    setHiddenModal: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    const re = /\W+/g;
    try {
      const data: InformationData = { ...inforData };
      if (inforData.phone!.length > 0) {
        const phone = inforData.phone!.split(re).join("");
        data.phone = phone;
      } else {
        delete data.phone;
      }
      if (inforData.email!.length <= 0) {
        delete data.email;
      } else {
        if (
          !inforData.email?.includes("@") ||
          !inforData.email!.includes(".com")
        ) {
          throw new AxiosError("E-mail inválido");
        }
      }

      const res = await api.post(`${endPoint}/${id}/infor/`, data);
      router.refresh();
      Toast({
        message: "Informações adicionada com sucesso!",
        type: "success",
      });
      setOpenModal(false)
      setHiddenModal(false)
    } catch (error) {
      console.log(error);
      const err = error as AxiosError;
      const msg =
        err.response?.status === 409
          ? "Ops! E-mail ou telefone já existem"
          : err.message;
      Toast({
        message: msg,
      });
    }
  };

  const updateInformation = async (
    inforData: InformationData,
    endPoint: "clients" | "contacts",
    id: string,
    inforId: string,
    oldInfor: Information,
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>,
    setHiddenModal: React.Dispatch<React.SetStateAction<boolean>>,
    setCurrentInformation: React.Dispatch<React.SetStateAction<Information | null>>
  ) => {
    const re = /\W+/g;
    try {
      const data: InformationData = { ...inforData };
      if (inforData.phone) {
        const phone = inforData.phone.split(re).join("");
        if (phone !== oldInfor.phone) {
          data.phone = phone;
        } else {
          delete data.phone;
        }
      } else {
        delete data.phone;
      }
      if (inforData.email!.length <= 0 || inforData.email == oldInfor.email) {
        delete data.email;
      } else {
        if (
          !inforData.email?.includes("@") ||
          !inforData.email!.includes(".com")
        ) {
          throw new AxiosError("E-mail inválido");
        }
      }

      const res = await api.patch(`${endPoint}/infor/${inforId}`, data);
      Toast({
        message: "Informações atualizadas com sucesso!",
        type: "success",
      });
      setOpenModal(false);
      setHiddenModal(false)
      setCurrentInformation(null)
      router.refresh();
    } catch (error) {
      console.log(error);
      const err = error as AxiosError;
      const msg =
        err.response?.status === 409
          ? "Ops! E-mail ou telefone já existem"
          : err.message;
      Toast({
        message: msg,
      });
    }
  };

  const deleteInformation = async (
    endPoint: "clients" | "contacts",
    id: string,
    inforId: string,
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>,
    setHiddenModal: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      const res = await api.delete(`${endPoint}/infor/${inforId}`);
      Toast({ message: "Informações deletadas com sucesso!", type: "success" });
      setOpenModal(false);
      setHiddenModal(false)
      router.refresh();
    } catch (error) {
      console.log(error);
      Toast({
        message: "Ops! algo deu errado. Tente novamente!",
      });
    }
  };

  return (
    <InformationContext.Provider
      value={{ addInformation, updateInformation, deleteInformation, loadBtn, setLoadBtn }}
    >
      {children}
    </InformationContext.Provider>
  );
};
