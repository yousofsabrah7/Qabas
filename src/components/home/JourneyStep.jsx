import React from "react";
export default function JourneyStep({ num, icon: Icon, title, desc }) {
  return (
    <div className="flex flex-col items-center text-center w-full max-w-[260px] md:w-[220px] md:max-w-none shrink-0">
      <div className="flex items-center gap-3">
        <span className="text-white text-xl font-bold">{num}</span>
        <div className="w-12 h-12 rounded-full border border-[#D4A017] bg-[#0f1f44]/60 flex items-center justify-center text-[#D4A017] shadow-[0_0_15px_rgba(212,160,23,0.6)]">
          <Icon size={22} aria-hidden="true" />
        </div>
      </div>
      <h3 className="text-[#F8F4EC] text-xl font-bold mt-4">{title}</h3>
      <p className="text-gray-300 text-sm mt-2 leading-6">{desc}</p>
    </div>
  );
}
