"use client";

import React from "react";
import { useAuth } from "@/hooks/useAuth";
import { AuthenticatedClient } from "@/providers/AuthContext.types";
import { RiPencilFill } from "react-icons/ri"
import Button from "../Button";

interface iClientCardProps {
  authClient: AuthenticatedClient;
}

const ClientCard = ({ authClient }: iClientCardProps) => {
  const { setOpenModal, setTypeModal, setClientCurrent } = useAuth();

  return (
    <div className="card-client">
      <div className="flex flex-col md:gap-2">
        <h5 className="text-gray-950">{authClient.name}</h5>
        <div>
          <p className="text-gray-700">{authClient.information[0].email}</p>
          <p className="text-gray-700">{authClient.information[0].phone}</p>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-end">
        <div className="w-fit"><Button type="brand" size={2}>+</Button></div>
        <Button type="edit" size={2}><RiPencilFill size={18} className="mr-2"/> Editar</Button>
      </div>
    </div>
  );
};

export default ClientCard;
