"use client"

import React, { useState } from "react";
import Button from "../Button";
import Modal from "../Modal";
import FormModalAddContact from "../Modal/FormModalAddContact";

const CardEmpty = () => {

    const [openModal, setOpenModal] = useState(false)

  return (
    <>
        <div className="flex flex-col gap-4 items-center">
          <h1 className="text-gray-700">
            Você ainda não tem contato cadastrado :(
          </h1>
          <div className="w-[200px]">
            <Button type="brand" handle={() => setOpenModal(true)}>Novo contato</Button>
          </div>
        </div>
        {openModal && <Modal handleModal={() => setOpenModal(false)}><FormModalAddContact setOpenModalAdd={setOpenModal}/></Modal>}
    </>
  );
};

export default CardEmpty;
