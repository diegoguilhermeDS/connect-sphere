import React from "react";
import AddIcon from "./AddIcon";
import PenIcon from "./PenIcon";
import BinIcon from "./BinIcon";
import CloseIcon from "./CloseIcon";
import EyesIcon from "./EyesIcon";

interface iIconProps {
  type: "add" | "delete" | "update" | "close" | "view";
  handle: () => void
}

const Icon = ({ type, handle }: iIconProps) => {
  return (
    <button className="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center shadow shadow-sky-500" onClick={handle}>
      {type == "add" && <AddIcon />}
      {type == "update" && <PenIcon />}
      {type == "delete" && <BinIcon />}
      {type == "close" && <CloseIcon />}
      {type == "view" && <EyesIcon/>}
    </button>
  );
};

export default Icon;
