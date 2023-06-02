import React from "react";
import { UseFormRegisterReturn } from "react-hook-form/dist/types";

interface IInputProps {
  type: string;
  placeholder: string;
  inputName: string,
  register: UseFormRegisterReturn 
  pattern?: string,
  autoComplete?: string
}

const Input = ({type, inputName, placeholder, pattern, register, autoComplete}: IInputProps) => {
  return <input type={type} id={inputName} placeholder={placeholder} pattern={pattern} {...register} autoComplete={autoComplete}/>;
};

export default Input;
