"use client";

import React, { useState } from "react";
import { AuthenticatedClient } from "@/providers/AuthContext.types";
import { RiPencilFill } from "react-icons/ri";
import Button from "../Button";
import Modal from "../Modal";
import DetailsModal from "../Modal/DetailsModal";
import FormModalAddContact from "../Modal/FormModalAddContact";

interface iClientCardProps {
  authClient: AuthenticatedClient;
}

const ClientCard = ({ authClient }: iClientCardProps) => {
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);

  return (
    <>
      <div className="card-client">
        <div className="flex flex-col md:gap-2">
          <h5 className="text-gray-950">{authClient.name}</h5>
          <div>
            <p className="text-gray-700">{authClient.information[0].email}</p>
            <p className="text-gray-700">{authClient.information[0].phone}</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 items-end">
          <div className="w-fit">
            <Button type="success" size={2} handle={() => setOpenModalAdd(true)}>
              <h5>+</h5>
            </Button>
          </div>
          <Button type="edit" size={2} handle={() => setOpenModalEdit(true)}>
            <RiPencilFill size={18} className="mr-2" /> Editar
          </Button>
        </div>
      </div>
      {openModalAdd && <Modal handleModal={() => setOpenModalAdd(false)}><FormModalAddContact setOpenModalAdd={setOpenModalAdd}/></Modal>}
      {openModalEdit && <Modal handleModal={() => setOpenModalEdit(false)}><DetailsModal ownerInformation={authClient} setOpenModalEdit={setOpenModalEdit} endPoint="clients"/></Modal>}
    </>
  );
};

export default ClientCard;
