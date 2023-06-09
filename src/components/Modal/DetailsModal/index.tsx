import Button from "@/components/Button";
import CardInfor from "@/components/CardInfor";
import React, { useState } from "react";
import DeleteModal from "../DeleteModal";
import { Contact, Information } from "@/providers/AuthContext.types";
import FormModalAddOrUpdateInfor from "../FormModalAddOrUpdateInfor";
import { RiDeleteBin6Fill, RiPencilFill } from "react-icons/ri";
import FormModalUpdateClientOrContact from "../FormModalUpdateClientOrContact";

interface iDetailsModalProps {
  ownerInformation: {
    id: string;
    is_active?: boolean;
    created_at: string;
    name: string;
    information: Information[];
    contacts?: Contact[];
    clientId?: string;
  };
  setOpenModalEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

const DetailsModal = ({
  ownerInformation,
  setOpenModalEdit,
}: iDetailsModalProps) => {
  const [hiddenModal, setHiddenModal] = useState(false);
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [openModalUpdate, setOpenModalUpdate] = useState(false);
  const [openModalDelete, setOpenModalDelete] = useState(false);
  const [typeModalDelete, setTypeModalDelete] = useState<
    "infor" | "account" | "contact"
  >("account");
  const [endPoint, setEndPoint] = useState<"clients" | "contacts">("clients");
  const [inforId, setInforId] = useState("");
  const [currentInformation, setCurrentInformation] = useState<Information>(
    {} as Information
  );

  return (
    <>
      {!hiddenModal && (
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5 pr-5">
              <h1 className="text-sky-600 text-2xl lg:text-5xl">{ownerInformation.name}</h1>
              <div className="flex gap-3 ">
                <div className="w-[65px]">
                  <Button
                    type="success"
                    size={2}
                    handle={() => (setHiddenModal(true), setOpenModalAdd(true))}
                  >
                    <h6>+</h6>
                  </Button>
                </div>
                <div className="w-fit">
                  <Button
                    type="edit"
                    size={2}
                    handle={() => (
                      setHiddenModal(true),
                      setEndPoint(
                        ownerInformation.contacts ? "clients" : "contacts"
                      ),
                      setOpenModalUpdate(true)
                    )}
                  >
                    <RiPencilFill size={18} />
                  </Button>
                </div>
                <div className="">
                  <Button
                    type="delete"
                    size={2}
                    handle={() => (
                      setOpenModalDelete(true),
                      setTypeModalDelete(
                        ownerInformation.contacts ? "account" : "contact"
                      ),
                      setHiddenModal(true),
                      setEndPoint(
                        ownerInformation.contacts ? "clients" : "contacts"
                      )
                    )}
                  >
                    <RiDeleteBin6Fill size={18} />
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between lg:items-center lg:w-[28.125rem]">
              <span className="text-gray-700">
                E-mail : {ownerInformation.information[0].email}
              </span>
              <span className="text-gray-700">
                Telefone : {ownerInformation.information[0].phone}
              </span>
            </div>
          </div>
          <ul className="flex items-center gap-8 lg:w-[768px] h-[216px] px-6 bg-gray-300 rounded-md shadow-inner shadow-[rgba(0, 0, 0, 0.25)] overflow-x-auto scrollbar scrollbar-h-2">
            {ownerInformation.information.map((infor, index) => (
              <CardInfor
                infor={infor}
                key={index}
                handleDelete={() => (
                  setOpenModalDelete(true),
                  setTypeModalDelete("infor"),
                  setEndPoint(
                    ownerInformation.contacts ? "clients" : "contacts"
                  ),
                  setHiddenModal(true),
                  setInforId(infor.id)
                )}
                handleEdit={() => (
                  setHiddenModal(true),
                  setOpenModalAdd(true),
                  setCurrentInformation(infor)
                )}
              />
            ))}
          </ul>
        </div>
      )}
      {openModalDelete && (
        <DeleteModal
          type={typeModalDelete}
          handleCancel={() => (
            setOpenModalDelete(false), setHiddenModal(false)
          )}
          endPoint={endPoint}
          setHiddenModal={setHiddenModal}
          setOpenModalEdit={setOpenModalEdit}
          setOpenModalDelete={setOpenModalDelete}
          ownerId={ownerInformation.id}
          inforId={inforId}
        />
      )}
      {openModalAdd && (
        <FormModalAddOrUpdateInfor
          endPoint="clients"
          ownerId={ownerInformation.id}
          infor={currentInformation}
          setOpenModalAdd={setOpenModalAdd}
          setHiddenModal={setHiddenModal}
        />
      )}
      {openModalUpdate && (
        <FormModalUpdateClientOrContact
          endPoint={endPoint}
          name={ownerInformation.name}
          id={ownerInformation.id}
          setHiddenModal={setHiddenModal}
          setOpenModalUpdate={setOpenModalUpdate}
        />
      )}
    </>
  );
};

export default DetailsModal;
