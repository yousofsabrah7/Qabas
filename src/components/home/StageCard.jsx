import React from "react";
export default function StageCard({ image, title, description, last = false }) {
  return (
    <div className={`card w-full max-w-[373px] z-10 rounded-3xl bg-white shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] overflow-hidden ${last ? "md:col-span-2 lg:col-span-1" : ""}`}>
      <img className="w-full h-[210px] object-cover" src={image} alt={title} />
      <div className="h-fit px-[10px] py-5">
        <h3 className="font-bold text-2xl lg:text-[32px] text-[#192A4A]">{title}</h3>
        <p className="font-normal text-xl lg:text-[24px] text-[#4F5666]">{description}</p>
      </div>
    </div>
  );
}
