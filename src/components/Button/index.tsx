import Link from "next/link";
import React from "react";

interface iButtonProps {
  children: React.ReactNode;
  handle?: () => void;
  size?: 1 | 2;
  type:
    | "brand"
    | "outline"
    | "negative"
    | "alert"
    | "success"
    | "delete"
    | "edit"
    | "disableBrand"
    | "disable";
  disable?: boolean;
  submit?: boolean;
  href?: string
}

const Button = ({
  children,
  handle,
  size = 1,
  type,
  disable = false,
  submit,
  href
}: iButtonProps) => {
  const sizeVariants = ["h-[3rem] text-md", "h-[2.375rem] text-sm"];
  const buttonVariant = {
    brand:
      "bg-sky-800 hover:bg-sky-600 border-sky-800 hover:border-sky-600 text-white",
    outline:
      "bg-white hover:bg-sky-800 border-sky-800 text-sky-800 hover:text-white",
    negative:
      "bg-gray-300 hover:bg-gray-400 border-gray-300 hover:border-gray-400 text-gray-600",
    alert:
      "bg-rose-200 hover:bg-rose-300 border-rose-200 hover:border-rose-300 text-rose-600",
    success:
      "bg-emerald-100 hover:bg-emerald-200 border-emerald-100 hover:border-emerald-200 text-emerald-700",
    delete:
      "bg-white hover:bg-rose-600 border-rose-600 text-rose-600 hover:text-white",
    edit: "bg-white hover:bg-sky-800 border-sky-800 text-sky-800 hover:text-white",
    disableBrand: "bg-sky-200 border-sky-200 text-gray-800",
    disable: "bg-gray-200 border-gray-200 text-white",
  };

  return (
    <>
      {type !== "outline" && (
        <button
          onClick={handle}
          disabled={disable}
          type={submit ? "submit" : "button"}
          className={`
        button-base
        ${sizeVariants[size - 1]} 
        ${size == 1 ? "px-7" : "px-5"} 
        ${buttonVariant[type]}
        ${disable && "cursor-not-allowed"}
        transition-colors 
        ease-in-out 
        duration-500
        `}
        >
          {children}
        </button>
      )}
      {type == "outline" && <Link href={href!} className={`
        button-base
        ${sizeVariants[size - 1]} 
        ${size == 1 ? "px-7" : "px-5"} 
        ${buttonVariant[type]}
        ${disable && "cursor-not-allowed"}
        transition-colors 
        ease-in-out 
        duration-500
      `}>{children}</Link>}
    </>
  );
};

export default Button;
