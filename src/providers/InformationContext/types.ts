import { InformationData } from "@/schemas/infromation.schema";
import { Dispatch, ReactNode, SetStateAction } from "react";
import { InforamtionCurrent, Information } from "../AuthContext.types";

interface iInformationProviderProps {
  children: ReactNode;
}

interface iInformationContextProps {
  addInformation: (
    inforData: InformationData,
    endPoint: "clients" | "contacts",
    id: string,
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>,
    setHiddenModal: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  updateInformation: (
    inforData: InformationData,
    endPoint: "clients" | "contacts",
    id: string,
    inforId: string,
    oldInfor: Information,
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>,
    setHiddenModal: React.Dispatch<React.SetStateAction<boolean>>,
    setCurrentInformation: React.Dispatch<React.SetStateAction<Information | null>>
  ) => void;
  deleteInformation: (
    endPoint: "clients" | "contacts",
    id: string,
    inforId: string,
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>,
    setHiddenModal: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  loadBtn: boolean
  setLoadBtn: Dispatch<SetStateAction<boolean>>
}

export type { iInformationContextProps, iInformationProviderProps };
