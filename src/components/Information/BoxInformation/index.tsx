"use client";

import { useAuth } from "@/hooks/useAuth";
import { Information } from "@/providers/AuthContext.types";
import React from "react";

interface iBoxInformationProps {
  infor: Information;
  ownerId: string;
  ownerInformation: "clients" | "contacts";
}

const BoxInformation = ({
  infor,
  ownerId,
  ownerInformation,
}: iBoxInformationProps) => {
  const { setOpenModal, setTypeModal, setInforCurrent } = useAuth();

  const data = {
    ...infor,
    ownerId: ownerId,
    ownerInformation: ownerInformation,
  };

  return (
    <li className="bg-slate-200 flex justify-between p-2 rounded.">
      <div className="flex flex-col">
        <span>{infor.email}</span>
        <span>{infor.phone}</span>
      </div>
      <div className="flex flex-col gap-4">
        
      </div>
    </li>
  );
};

export default BoxInformation;
