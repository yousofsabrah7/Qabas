import React from "react";
import { Link } from "react-router-dom";
import GoldButton from "./GoldButton";

export default function HomeHero() {
  return (
<div className="bg-[#14223B] w-full h-fit px-6 py-12 sm:px-10 sm:py-16 lg:p-20">
        <div className="w-full max-w-[379px] h-fit text-[#B8943F]">
          <h1 className="text-4xl sm:text-5xl lg:text-[72px] leading-tight font-bold pb-6 lg:pb-8 w-fit flex flex-wrap">
            أشعل قبسك وغير مسارك
          </h1>
          <p className="w-fit flex flex-wrap text-base sm:text-[20px]">
            في قبس , نرافقك من شرارة الفكرة الى مشروع يصنع اثرا
          </p>
        </div>
        <div className="h-fit w-full flex flex-wrap gap-3 mt-8">
          <GoldButton to="/joinUs">ابدا رحلتك</GoldButton>
          <Link to="/projects" className="flex flex-row items-center w-fit h-fit rounded-[40px] border-[1.5px] border-[#B8943F] text-[#B8943F] hover:bg-[#B8943F] hover:text-[#14223B] hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(184,148,63,0.35)] transition py-3 px-4 gap-1">اكتشف مشاريع قبس</Link>
        </div>
      </div>
  );
}
