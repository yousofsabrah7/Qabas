import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export const btnGold = "flex flex-row items-center bg-[#B8943F] text-white hover:bg-[#9A7A2E] hover:-translate-y-1 transition w-fit h-fit rounded-[40px] py-3 px-4 gap-1";

export default function GoldButton({ children, to, className = "" }) {
  return (
    <Link to={to} className={`${btnGold} ${className}`}>
      {children} <ArrowLeft size={16} aria-hidden="true" />
    </Link>
  );
}
