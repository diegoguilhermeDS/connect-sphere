import { ClientRegisterData, LoginData } from "@/schemas/client.schema";
import { ReactNode } from "react";

interface IClientProviderProps {
  children: ReactNode;
}

interface IClientContextProps {
  handleLogin: (loginData: LoginData) => void;
  handleRegister: (clientRegisterData: ClientRegisterData) => void;
  /* token: string | undefined
  setToken: (value: string) => void */
}

interface IErrorData {
  statusCode: number;
  message: string;
  error: string;
}

interface IErrorDataRegister {
  statusCode: number;
  message: string | string[];
  error: string;
}

export type { IClientProviderProps, IClientContextProps, IErrorData, IErrorDataRegister};
