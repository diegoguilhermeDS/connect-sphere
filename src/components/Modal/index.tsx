import React from "react";
import Button from "../Button";

interface iModalProps {
  handleModal: () => void;
  children: React.ReactNode;
}

const Modal = ({ handleModal, children }: iModalProps) => {
  return (
    <>
      <div className="fixed top-0 left-0 z-50 w-full h-screen flex items-center justify-center bg-modal">
        <div className="relative p-10 rounded-md shadow shadow-white bg-white">
          <div className="w-10 h-10 overflow-hidden rounded-full flex justify-center items-center absolute top-2 right-2">
            <Button type="brand" handle={handleModal}>
              X
            </Button>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
