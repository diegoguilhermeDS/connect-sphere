"use client";

import { useClient } from "@/hooks/useClient";
import React from "react";
import Icon from "../Icons";
import FormAddOrUpdateInformation from "./Forms/AddOrUpdateInformation";
import DeleteInformation from "./DeleteInformation";
import { InforamtionCurrent } from "@/providers/ClientContext.types";
import DeleteClient from "./DeleteClient";
import UpdateClient from "./Forms/UpdateClient";

const Modal = () => {
  const {
    openModal,
    setOpenModal,
    typeModal,
    setTypeModal,
    inforCurrent,
    setInforCurrent,
    clientCurrent
  } = useClient();

  return (
    <>
      {openModal && (
        <div className="fixed top-0 left-0 z-50 w-full h-screen flex items-center justify-center bg-modal">
          <div className="relative p-10 rounded-md shadow shadow-white bg-white">
            <div className="absolute top-2 right-2">
              <Icon
                type="close"
                handle={() => (
                  setOpenModal(false),
                  setTypeModal(""),
                  setInforCurrent({} as InforamtionCurrent)
                )}
              />
            </div>
            <h1>Modal Aberto</h1>
            <span>modal do tipo {typeModal}</span>
            {typeModal == "addInformation" ||
            typeModal == "updateInformation" ? (
              <FormAddOrUpdateInformation
                type={typeModal}
                infor={inforCurrent}
              />
            ) : (
              <></>
            )}
            {typeModal == "deleteInformation" && (
              <DeleteInformation infor={inforCurrent} />
            )}
            {typeModal == "deleteClient" && <DeleteClient/>}
            {typeModal == "updateClient" && <UpdateClient/>}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
