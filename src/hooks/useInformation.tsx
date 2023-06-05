import { InformationContext } from "@/providers/InformationContext";
import { useContext } from "react";

export const useInformation = () => useContext(InformationContext);
