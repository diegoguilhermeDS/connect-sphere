import React from "react";

interface IInputProps {
  type: string;
  placeholder: string;
  name: string,
  pattern?: string 
}

const Input = ({type, name, placeholder, pattern}: IInputProps) => {
  return <input type={type} name={name} id={name} placeholder={placeholder} pattern={pattern}/>;
};

export default Input;
