import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import MaskedInput from "react-input-mask";

interface iInputProps {
  type: "text" | "email" | "password" | "phone";
  placeholder: string;
  label: string;
  register: UseFormRegisterReturn;
  error?: string;
}

const Input = ({ type, label, placeholder, register, error }: iInputProps) => {
  const maskedTypes = ["phone"];
  const masked = { phone: "(99) 99999-9999" };

  return (
    <fieldset className="relative flex flex-col gap-2">
      <label htmlFor={label} className="input-label text-gray-950">
        {label}
      </label>
      {!maskedTypes.includes(type) && (
        <input
          type={type}
          id={label}
          placeholder={placeholder}
          {...register}
          className="
            input-base
            input-placeholder
            transition-all
            ease-in-out
            duration-300
            "
        />
      )}
      {maskedTypes.includes(type) && (
        <MaskedInput
          mask={masked["phone"]}
          placeholder={placeholder}
          {...register}
          className="
          input-base
          input-placeholder
          transition-all
          ease-in-out
          duration-300
          "
        />
      )}
      {error && (
        <span className="absolute -bottom-4 text-xs text-rose-600">{error}</span>
      )}
    </fieldset>
  );
};

export default Input;
