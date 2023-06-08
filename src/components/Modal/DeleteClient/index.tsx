"use client";

import { useAuth } from "@/hooks/useAuth";
import React from "react";

const DeleteClient = () => {
  const { setOpenModal, handleRemoveClientOrContact, clientCurrent } =
    useAuth();

  return (
    <div className="flex flex-col gap-5">
      <h2>Excluir Conta</h2>
      <h2>Tem certeza que deseja excluir sua conta?</h2>
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
            handleRemoveClientOrContact(clientCurrent.id, "clients")
          }
        >
          Sim, excluir informação
        </button>
      </div>
    </div>
  );
};

export default DeleteClient;
