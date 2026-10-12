import React from "react";
export default function FeatureCard({ title, description, icon: Icon, divider = false }) {
  return (
    <div className={`card w-full h-fit py-2 text-center ${divider ? "sm:border-l-[2px] border-[#B8943F]" : ""}`}>
      <div className="h-[56px] flex justify-center items-center">
        <span className="border-[2px] border-[#A68539] p-[10px] rounded-[50%]">
          <Icon className="w-8 h-8 text-[#A68539]" aria-hidden="true" />
        </span>
      </div>
      <div>
        <h3 className="text-[#192A4A] font-bold leading-[40px] text-2xl">{title}</h3>
        <p className="text-base leading-6 text-[#4F5666] p-2">{description}</p>
      </div>
    </div>
  );
}
