import React from "react";
import GoldButton from "./GoldButton";
import SectionHeading from "./SectionHeading";
import { partners as partnerImages } from "../../data/homeData";

export default function HomePartners() {
  return (
<div className="relative bg-[#FFFFFF] w-full px-6 py-12 sm:p-10">
        <SectionHeading title="معًا نضيء الطريق.">
          خلف كل خطوة ناجحة، شراكة تصنع فرقًا.
        </SectionHeading>
        <div className="w-full my-10 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10 py-4 px-0 md:px-6 xl:px-[152px] items-center">
          {partnerImages.map((image, index) => (
            <img key={index} className="w-full h-auto object-contain" src={image} alt={`شريك قبس ${index + 1}`} />
          ))}
        </div>
        <GoldButton to="/partners" className="relative z-10 lg:mx-12">انضم كشريك</GoldButton>
      </div>
  );
}
