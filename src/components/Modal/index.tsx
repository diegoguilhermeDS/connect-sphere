"use client";

import { useAuth } from "@/hooks/useAuth";
import React from "react";
import FormAddOrUpdateInformation from "./Forms/AddOrUpdateInformation";
import DeleteInformation from "./DeleteInformation";
import { InforamtionCurrent } from "@/providers/AuthContext.types";
import DeleteClient from "./DeleteClient";
import UpdateClient from "./Forms/UpdateClient";
import DetailContact from "./DetailContact";

const Modal = () => {
  const { openModal, setOpenModal, typeModal, setTypeModal, setInforCurrent } =
    useAuth();

  return (
    <>
      {openModal && (
        <div className="fixed top-0 left-0 z-50 w-full h-screen flex items-center justify-center bg-modal">
          <div className="relative p-10 rounded-md shadow shadow-white bg-white">
            <div className="absolute top-2 right-2">
            </div>
            <h1>Modal Aberto</h1>
            <span>modal do tipo {typeModal}</span>
            {typeModal == "addInformation" && <FormAddOrUpdateInformation />}
            {typeModal == "updateInformation" && <FormAddOrUpdateInformation />}
            {typeModal == "deleteInformation" && <DeleteInformation />}
            {typeModal == "deleteClient" && <DeleteClient />}
            {typeModal == "updateClient" && <UpdateClient />}
            {typeModal == "viewDetailsContact" && <DetailContact />}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
