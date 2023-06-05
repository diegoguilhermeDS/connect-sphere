"use client";

import { useClient } from "@/hooks/useClient";
import { useInformation } from "@/hooks/useInformation";
import React from "react";


const DeleteInformation = () => {
  const { deleteInformation } = useInformation();
  const { inforCurrent } = useClient();
  const { setOpenModal } = useClient();

  return (
    <div className="flex flex-col gap-5">
      <h2>Excluir Informação de contato</h2>
      <h2>Tem certeza que deseja remover essa informação?</h2>
      <p className="w-[400px] text-justify">
        Essa ação não pode ser desfeita. Isso excluirá permanentemente sua conta
        e removerá seus dados de nossos servidores.
      </p>
      <div className="flex justify-between">
        <button
          onClick={() => setOpenModal(false)}
          className="bg-zinc-200 p-2 rounded shadow shadow-zinc-200 text-gray-700 font-bold"
        >
          Cancelar
        </button>
        <button
          className="bg-rose-500 p-2 rounded shadow shadow-rose-500 text-white font-bold"
          onClick={() =>
            deleteInformation(inforCurrent.ownerInformation, inforCurrent.ownerId, inforCurrent.id!)
          }
        >
          Sim, excluir informação
        </button>
      </div>
    </div>
  );
};

export default DeleteInformation;
