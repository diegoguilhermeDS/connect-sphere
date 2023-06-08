import { useAuth } from "@/hooks/useAuth";
import React from "react";

const DetailContact = () => {
  const { contactCurrent, setOpenModal, setTypeModal } = useAuth();

  return (
    <div>
      <div>
        <h2>{contactCurrent.name}</h2>
        <div className="flex gap-2">

        </div>
      </div>
    </div>
  );
};

export default DetailContact;
