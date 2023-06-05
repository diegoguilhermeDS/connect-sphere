import { ClientRegisterData, ClientUpdateData, LoginData } from "@/schemas/client.schema";
import { Dispatch, ReactNode, SetStateAction } from "react";

interface IClientProviderProps {
  children: ReactNode;
}

interface IClientContextProps {
  handleLogin: (loginData: LoginData) => void;
  handleRegister: (clientRegisterData: ClientRegisterData) => void;
  handleRemoveClientOrContact: (
    id: string,
    endPoint: "clients" | "contacts"
  ) => void;
  handleUpdateClient: (id: string, data: ClientUpdateData) => void
  openModal: boolean;
  setOpenModal: Dispatch<SetStateAction<boolean>>;
  typeModal: string;
  setTypeModal: Dispatch<SetStateAction<string>>;
  inforCurrent: InforamtionCurrent;
  setInforCurrent: Dispatch<SetStateAction<InforamtionCurrent>>;
  clientCurrent: AuthenticatedClient;
  setClientCurrent: Dispatch<SetStateAction<AuthenticatedClient>>;
}

interface IErrorData {
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
  IClientProviderProps,
  IClientContextProps,
  IErrorData,
  tokenDecode,
  AuthenticatedClient,
  Information,
  InforamtionCurrent,
};
