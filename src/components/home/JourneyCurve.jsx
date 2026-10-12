import React from "react";
export default function JourneyCurve({ flip = false }) {
  return (
    <svg className={`hidden md:block flex-1 min-w-[40px] h-10 mt-1 ${flip ? "" : "scale-y-[-1]"}`} viewBox="0 0 200 50" preserveAspectRatio="none" fill="none" aria-hidden="true">
      <path d="M0 15 C 60 40, 140 40, 200 10" stroke="#D4A017" strokeWidth="2" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
