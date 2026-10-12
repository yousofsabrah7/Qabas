import React from "react";
import JourneyStep from "./JourneyStep";
import JourneyCurve from "./JourneyCurve";
import image6 from "../../assets/image6.png";
import { journey as journeyItems } from "../../data/homeData";

export default function HomeJourney() {
  return (
<div
        dir="rtl"
        className="w-full h-fit flex flex-col items-center px-6 py-12 sm:p-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            `linear-gradient(rgba(20,34,59,0.75), rgba(20,34,59,0.75)),url(${image6}) `,
        }}
      >
        <div className="w-full max-w-[385px] h-fit px-4 text-center font-amiri">
          <h2 className="font-bold text-3xl sm:text-[40px] text-[#F8F4EC] mb-[10px]">
            من الشرارة إلى الأثر.
          </h2>
          <p className="font-normal text-base text-[#F8F4EC]">
            لكل فكرة رحلة، ونحن نرافقك في كل خطوة.
          </p>
        </div>

        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:justify-between md:gap-0 w-full max-w-[1100px] mt-12">
          {journeyItems.map((item, index) => (
            <React.Fragment key={item.num}>
              {index > 0 && <JourneyCurve flip={index === 1} />}
              <JourneyStep {...item} />
            </React.Fragment>
          ))}
        </div>
      </div>
  );
}
