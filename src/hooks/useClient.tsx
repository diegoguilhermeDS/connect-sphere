import { ClientContext } from "@/providers/ClientContext";
import { useContext } from "react";

export const useClient = () => useContext(ClientContext);
