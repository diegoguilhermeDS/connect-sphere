import React from "react";
import AddIcon from "./AddIcon";
import PenIcon from "./PenIcon";
import BinIcon from "./BinIcon";
import CloseIcon from "./CloseIcon";

interface IIconProps {
  type: "add" | "delete" | "update" | "close";
  handle: () => void
}

const Icon = ({ type, handle }: IIconProps) => {
  return (
    <button className="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center shadow shadow-sky-500" onClick={handle}>
      {type == "add" && <AddIcon />}
      {type == "update" && <PenIcon />}
      {type == "delete" && <BinIcon />}
      {type == "close" && <CloseIcon />}
    </button>
  );
};

export default Icon;
