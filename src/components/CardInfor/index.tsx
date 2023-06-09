import React from "react";
import Button from "../Button";
import { RiDeleteBin6Fill, RiPencilFill } from "react-icons/ri";
import { Information } from "@/providers/AuthContext.types";

interface iCardInforProps {
  infor: Information;
  handleDelete: () => void
  handleEdit: () => void
}

const CardInfor = ({ infor, handleDelete, handleEdit }: iCardInforProps) => {
  return (
    <li className="flex flex-col justify-between h-36 p-3 bg-white rounded-md shadow-md">
      <div className="flex flex-col gap-2">
        <span className="text-gray-700">E-mail : {infor.email}</span>
        <span className="text-gray-700">Telefone : {infor.phone}</span>
      </div>
      <div className="flex justify-between gap-10 w-full">
        <Button type="delete" size={2} handle={handleDelete}>
          <div className="flex items-center gap-1">
            <RiDeleteBin6Fill size={18} /> Remover
          </div>
        </Button>
        <Button type="edit" size={2} handle={handleEdit}>
          <div className="flex items-center gap-1">
            <RiPencilFill size={18} />
            Editar
          </div>
        </Button>
      </div>
    </li>
  );
};

export default CardInfor;
