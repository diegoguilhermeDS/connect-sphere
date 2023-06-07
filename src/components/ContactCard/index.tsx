"use client"

import { Contact } from "@/providers/ClientContext.types";
import React from "react";
import Icon from "../Icons";
import { useClient } from "@/hooks/useClient";

interface iContactCardProps {
  contact: Contact;
}

const ContactCard = ({ contact }: iContactCardProps) => {

  const { setOpenModal, setTypeModal, setContactCurrent } = useClient()

  return (
    <li className="flex gap-5 p-2 bg-white rounded shadow-md min-w-fit">
      <div>
          <h3>{contact.name}</h3>
          <div className="flex flex-col">
            <span>{contact.information[0].email}</span>
            <span>{contact.information[0].phone}</span>
          </div>
      </div>
      <div>
        <Icon type="view" handle={() => (setOpenModal(true), setTypeModal("viewDetailsContact"), setContactCurrent(contact))}/>
      </div>
    </li>
  );
};

export default ContactCard;
