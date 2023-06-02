import React from "react";
import { toast } from "react-toastify";

interface IToastProps {
  message: string;
  type?: true | false;
}

const Toast = ({ message, type = false }: IToastProps) => {
  return type
    ? toast.success(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      })
    : toast.error(message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
};

export default Toast;
