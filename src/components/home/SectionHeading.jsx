import React from "react";
export default function SectionHeading({ title, children }) {
  return (
    <div className="p-4 text-center">
      <h2 className="font-bold text-3xl sm:text-4xl lg:text-[48px] text-[#192A4A] w-full">{title}</h2>
      <p className="font-normal text-lg sm:text-xl lg:text-[24px] w-full mt-3">{children}</p>
    </div>
  );
}
