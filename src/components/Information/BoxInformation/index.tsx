"use client";

import Icon from "@/components/Icons";
import { useClient } from "@/hooks/useClient";
import { Information } from "@/providers/ClientContext.types";
import React from "react";

interface IBoxInformationProps {
  infor: Information
  ownerId: string
  ownerInformation: "clients" | "contacts"
}

const BoxInformation = ({ infor, ownerId, ownerInformation }: IBoxInformationProps) => {
  const { setOpenModal, setTypeModal, setInforCurrent } = useClient();

  const data = {...infor, ownerId: ownerId, ownerInformation: ownerInformation}

  return (
    <li className="bg-slate-200 flex justify-between p-2 rounded.">
      <div className="flex flex-col">
        <span>{infor.email}</span>
        <span>{infor.phone}</span>
      </div>
      <div className="flex flex-col gap-4">
        <Icon
          type="update"
          handle={() => (setOpenModal(true), setTypeModal("updateInformation"), setInforCurrent(data))}
        />
        <Icon
          type="delete"
          handle={() => (setOpenModal(true), setTypeModal("deleteInformation"), setInforCurrent(data))}
        />
      </div>
    </li>
  );
};

export default BoxInformation;
