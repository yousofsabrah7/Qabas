import React from "react";
import GoldButton from "./GoldButton";
import StageCard from "./StageCard";
import SectionHeading from "./SectionHeading";
import { stages as stageItems } from "../../data/homeData";

export default function HomeStages() {
  return (
<div className="relative bg-[#FDFCFA] w-full overflow-hidden px-6 py-12 sm:px-10 sm:py-16 lg:p-20">
        <div className="hidden md:block absolute top-0 -right-[50px] z-0 pointer-events-none border-[#937632] border-[1.5px] rounded-full w-[355px] h-[355px]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-[#937632] border-[1.5px] rounded-full w-[266px] h-[266px]"></div>
        </div>

        <div className="hidden md:block absolute top-1/2 -left-[50px] -translate-y-1/2 z-0 pointer-events-none border-[#937632] border-[1.5px] rounded-full w-[355px] h-[355px]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-[#937632] border-[1.5px] rounded-full w-[266px] h-[266px]"></div>
        </div>

        <div className="content relative z-10 w-full lg:p-10">
          <SectionHeading title="نضيء الطريق، وأنت تصنع الأثر.">
            في قبس، نؤمن بأن كل فكرة تحمل إمكانية كبيرة، وتحتاج إلى المعرفة
            والدعم المناسبين لتتحول إلى مشروع حقيقي. لذلك ترافقكم قبس في رحلة
            ذات مراحل متعددة:
          </SectionHeading>

          <div className="cards z-10 py-8 lg:p-12 w-full h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {stageItems.map((item, index) => (
              <StageCard key={item.title} {...item} last={index === 2} />
            ))}
          </div>
        </div>

        <GoldButton to="/stages" className="relative z-10">عرض التفاصيل</GoldButton>
      </div>
  );
}
