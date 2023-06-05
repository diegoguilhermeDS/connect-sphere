import { InformationData } from "@/schemas/infromation.schema";
import { Dispatch, ReactNode, SetStateAction } from "react";
import { InforamtionCurrent } from "../ClientContext.types";

interface IInformationProviderProps {
  children: ReactNode;
  setOpenModal: Dispatch<SetStateAction<boolean>>
}

interface IInformationContextProps {
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

export type { IInformationContextProps, IInformationProviderProps };
