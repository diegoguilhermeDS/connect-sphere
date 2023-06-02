import React from "react";
import { UseFormRegisterReturn } from "react-hook-form/dist/types";

interface IInputProps {
  type: string;
  placeholder: string;
  inputName: string,
  pattern?: string,
  register: UseFormRegisterReturn
}

const Input = ({type, inputName, placeholder, pattern, register}: IInputProps) => {
  return <input type={type} id={inputName} placeholder={placeholder} pattern={pattern} {...register}/>;
};

export default Input;
