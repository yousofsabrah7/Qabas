import React from "react";
import FeatureCard from "./FeatureCard";
import image4 from "../../assets/image4.png";
import image5 from "../../assets/image5.png";
import { features as featureItems } from "../../Data/HomeData";

export default function AboutQabas () {
  return (
<div className="w-full h-fit flex flex-col lg:flex-row lg:justify-between gap-16 lg:gap-8 text-[#F8F6F0] px-6 py-12 sm:px-10 sm:py-16 lg:p-20">
        <div className="right w-full lg:w-[734px] lg:max-w-[55%] xl:max-w-none">
          <div className="w-full h-fit">
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-bold text-[#192A4A] mb-5">
              كل مشروع عظيم بدأ بشرارة.
            </h2>
            <p className="font-normal text-lg sm:text-xl lg:text-[23px] leading-8 lg:leading-[40px] text-[#192A4A]">
              قبس مبادرة تهدف إلى احتضان الأفكار والمشاريع الطلابية، وتمكين
              أصحابها بالمعرفة والإرشاد والموارد اللازمة لتحويل أفكارهم إلى
              مشاريع قابلة للنمو وصناعة الأثر.
            </p>
          </div>
          <div className="w-full h-fit grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 mt-8 lg:mt-0">
            {featureItems.map((item, index) => (
              <FeatureCard key={item.title} {...item} divider={index < 2} />
            ))}
          </div>
        </div>

        <div className="left flex justify-center lg:justify-start shrink-0 py-10 px-10 lg:p-0">
          <div className="relative border-[#937632] border-[1.5px] rounded-[50%] w-[240px] h-[240px] sm:w-[355px] sm:h-[355px] flex justify-center items-center">
            <div className="border-[#937632] border-[1.5px] rounded-[50%] w-[180px] h-[180px] sm:w-[266px] sm:h-[266px]"></div>
            <img
              className="absolute -top-[40px] -left-[40px] sm:-top-[50px] sm:-left-[50px] w-[190px] sm:w-[285px] h-auto rounded-[24px]"
              src={image4}
              alt="do"
            />
            <img
              className="absolute -bottom-[30px] -right-[30px] sm:-bottom-[40px] sm:-right-[40px] w-[190px] sm:w-[285px] h-auto rounded-[24px] z-[2]"
              src={image5}
              alt="dfbo"
            />
          </div>
        </div>
      </div>
  );
}
