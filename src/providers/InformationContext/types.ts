import { InformationData } from "@/schemas/infromation.schema";
import { Dispatch, ReactNode, SetStateAction } from "react";
import { InforamtionCurrent } from "../AuthContext.types";

interface iInformationProviderProps {
  children: ReactNode;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
}

interface iInformationContextProps {
  addInformation: (
    inforData: InformationData,
    endPoint: "clients" | "contacts",
    id: string
  ) => void;
  updateInformation: (
    inforData: InformationData,
    endPoint: "clients" | "contacts",
    id: string,
    inforId: string,
    oldInfor: InforamtionCurrent
  ) => void;
  deleteInformation: (
    endPoint: "clients" | "contacts",
    id: string,
    inforId: string
  ) => void;
}

export type { iInformationContextProps, iInformationProviderProps };
