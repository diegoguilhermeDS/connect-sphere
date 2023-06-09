import {
  ClientRegisterData,
  ClientUpdateData,
  LoginData,
} from "@/schemas/client.schema";
import { Dispatch, ReactNode, SetStateAction } from "react";

interface iClientProviderProps {
  children: ReactNode;
}

interface iClientContextProps {
  handleLogin: (loginData: LoginData) => void;
  handleRegister: (clientRegisterData: ClientRegisterData) => void;
  handleRemoveClientOrContact: (
    id: string,
    endPoint: "clients" | "contacts",
    setOpenModal: Dispatch<SetStateAction<boolean>>,
    setHiddenModal: React.Dispatch<React.SetStateAction<boolean>>,
    setOpenModalEdit: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  handleUpdateClient: (
    id: string,
    oldName: string,
    data: ClientUpdateData,
    setOpenModal: Dispatch<SetStateAction<boolean>>,
    setHiddenModal: Dispatch<SetStateAction<boolean>>,
  ) => void;
  handleUpdateContact: (
    id: string,
    oldName: string,
    data: ClientUpdateData,
    setOpenModal: Dispatch<SetStateAction<boolean>>,
    setHiddenModal: Dispatch<SetStateAction<boolean>>,
  ) => void;
  loadBtn: boolean;
  setLoadBtn: Dispatch<SetStateAction<boolean>>;
}

interface iErrorData {
  statusCode: number;
  message: string;
  error: string;
}

interface tokenDecode {
  email: string;
  iat: number;
  exp: number;
  sub: string;
}

interface AuthenticatedClient {
  id: string;
  is_active: boolean;
  created_at: string;
  name: string;
  information: Information[];
  contacts: Contact[];
}

interface Contact {
  id: string;
  name: string;
  created_at: string;
  clientId: string;
  information: Information[];
}

interface Information {
  id: string;
  email?: string;
  phone?: string;
}

interface InforamtionCurrent extends Partial<Information> {
  ownerId: string;
  ownerInformation: "clients" | "contacts";
}

export type {
  iClientProviderProps,
  iClientContextProps,
  iErrorData,
  tokenDecode,
  AuthenticatedClient,
  Information,
  InforamtionCurrent,
  Contact,
};
