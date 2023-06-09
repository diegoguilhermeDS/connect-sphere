"use client";

import { Contact } from "@/providers/AuthContext.types";
import React, { useState } from "react";
import Button from "../Button";
import Modal from "../Modal";
import DetailsModal from "../Modal/DetailsModal";

interface iContactCardProps {
  contact: Contact;
}

const ContactCard = ({ contact }: iContactCardProps) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <li
        className="relative card-contact min-h-[144px] lg:bg-white shadow 
      before:content-[''] 
      before:absolute 
      before:top-0 
      before:left-0 
      before:w-1 
      before:h-full 
      before:bg-sky-800
      before:rounded-l-lg"
      >
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 w-2/3 lg:w-4/5">
          <h1 className="h7">{contact.name}</h1>
          <div className="flex flex-col lg:flex-row lg:justify-between gap-1 lg:gap-3 lg:w-[435px]">
            <span className="text-xs whitespace-nowrap lg:text-sm text-gray-500 text-ellipsis overflow-hidden">
              E-mail : {contact.information[0].email}
            </span>
            <span className="text-xs lg:text-sm text-gray-500">
              Telefone : {contact.information[0].phone}
            </span>
          </div>
        </div>
        <div>
          <Button type="brand" size={2} handle={() => setOpenModal(true)}>
            Ver mais
          </Button>
        </div>
      </li>
      {openModal && <Modal handleModal={() => setOpenModal(false)}><DetailsModal ownerInformation={contact}/></Modal>}
    </>
  );
};

export default ContactCard;
