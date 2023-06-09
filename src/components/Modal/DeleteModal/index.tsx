import Button from "@/components/Button";
import { useAuth } from "@/hooks/useAuth";
import { useInformation } from "@/hooks/useInformation";
import React from "react";

interface iDeleteModalProps {
  type: "infor" | "account" | "contact";
  endPoint: "contacts" | "clients"
  ownerId: string
  inforId?: string
  handleCancel: () => void;
  setHiddenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenModalEdit: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenModalDelete: React.Dispatch<React.SetStateAction<boolean>>;
}

const DeleteModal = ({
  type,
  endPoint,
  handleCancel,
  setHiddenModal,
  setOpenModalEdit,
  setOpenModalDelete,
  ownerId,
  inforId
}: iDeleteModalProps) => {
  const msg = {
    infor: "essa informação",
    account: "sua conta",
    contact: "esse contato",
  };

  const { handleRemoveClientOrContact } = useAuth();
  const { deleteInformation } = useInformation();

  return (
    <div className="flex flex-col items-center gap-6 lg:w-[500px] pt-8 bg-white">
      <h6>Tem certeza que deseja remover {msg[type]}?</h6>
      <p className="block max-w-[450px]">
        Essa ação não pode ser desfeita. Isso excluirá permanentemente{" "}
        {msg[type]} e removerá seus dados de nossos servidores.
      </p>
      <div className="flex justify-end w-full gap-5 mt-5">
        <div>
          <Button type="negative" handle={handleCancel}>
            Cancelar
          </Button>
        </div>
        <div>
          <Button
            type="delete"
            handle={() =>
              type == "infor"
                ? deleteInformation(
                    endPoint,
                    ownerId,
                    inforId!,
                    setOpenModalDelete,
                    setHiddenModal
                  )
                : handleRemoveClientOrContact(
                    ownerId,
                    endPoint,
                    setOpenModalDelete,
                    setHiddenModal,
                    setOpenModalEdit
                  )
            }
          >
            Sim, excluir
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
