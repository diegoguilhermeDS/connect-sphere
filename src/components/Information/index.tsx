"use client";

import React from "react";
import Icon from "../Icons";
import { useClient } from "@/hooks/useClient";
import BoxInformation from "./BoxInformation";
import { Information } from "@/providers/ClientContext.types";

interface iListInformationProps {
  information: Information[];
  ownerId: string;
  ownerInformation: "clients" | "contacts";
}

const LisntInformation = ({
  information,
  ownerId,
  ownerInformation,
}: iListInformationProps) => {
  const { setOpenModal, setTypeModal, setInforCurrent } = useClient();

  return (
    <div className="relative bg-slate-600 flex justify-center gap-10 p-5 rounded shadow-md shadow-slate-600">
      <div className="absolute top-2 right-2">
        <Icon
          type="add"
          handle={() => (
            setOpenModal(true),
            setTypeModal("addInformation"),
            setInforCurrent({
              ownerId: ownerId,
              ownerInformation: ownerInformation,
            })
          )}
        />
      </div>
      <ul className="bg-sky-300 p-2 rounded grid grid-cols-5 w-full gap-5">
        {information.map(
          (infor, index) =>
            infor.email && (
              <BoxInformation
                infor={infor}
                key={index}
                ownerId={ownerId}
                ownerInformation={ownerInformation}
              />
            )
        )}
      </ul>
    </div>
  );
};

export default LisntInformation;
