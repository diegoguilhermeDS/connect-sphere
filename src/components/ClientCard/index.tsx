"use client";

import React from "react";
import Icon from "../Icons";
import { AuthenticatedClient } from "@/providers/ClientContext.types";
import { useClient } from "@/hooks/useClient";

interface iClientCardProps {
  authClient: AuthenticatedClient;
}

const ClientCard = ({ authClient }: iClientCardProps) => {
  const { setOpenModal, setTypeModal, setClientCurrent } = useClient();

  return (
    <div>
      <h2>{authClient.name}</h2>
      <div className="flex gap-2">
        <Icon type="update" handle={() => (setOpenModal(true), setTypeModal("updateClient"), setClientCurrent(authClient))} />
        <Icon type="delete" handle={() => (setOpenModal(true), setTypeModal("deleteClient"), setClientCurrent(authClient))} />
      </div>
    </div>
  );
};

export default ClientCard;
