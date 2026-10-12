
import React from "react";
import stagesBg from "../assets/image 36.png";
import Circle from "../components/Circle";
import StageSection from "../components/StageSection";
import { stagesData } from "../Data/StagesData";
import HomeFooter from "../components/home/HomeFooter";

function Stages() {
  return (
    <div dir="rtl">
      {/* Hero Section */}
      <section
        style={{
          backgroundImage: `url("${stagesBg}")`,
        }}
        className="
          relative
          min-h-[420px] lg:min-h-[567px]
          bg-cover bg-center bg-no-repeat
          overflow-hidden
        "
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#14223B]/90" />

        {/* Hero Content */}
        <div
          className="
            relative z-10
            w-full max-w-[1200px]
            mx-auto
            px-4 sm:px-6 lg:px-8
            py-12 lg:py-10
            flex flex-col items-center justify-center
            text-center
            gap-5 lg:gap-8
            min-h-[420px] lg:min-h-[567px]
          "
        >
          <p className="text-cream-normal text-xl sm:text-3xl lg:text-[40px] leading-normal">
            رحلتك مع قبس
          </p>

          <h1
            className="
              text-yellow-normal
              text-2xl sm:text-4xl lg:text-[56px]
              leading-[1.4] font-bold
            "
          >
            من الفكرة… إلى مشروع يرى النور.
          </h1>

          <p
            className="
              max-w-[900px]
              text-cream-normal
              text-sm sm:text-base lg:text-[20px]
              leading-7 lg:leading-9
            "
          >
            في قبس، لا تتوقف الرحلة عند تعلّم المهارات. نرافقك خطوة بخطوة، من بناء المعرفة وتطوير فكرتك، إلى احتضان مشروعك ومنحه فرصة حقيقية للظهور في السوق.
          </p>

          {/* Hero Timeline */}
          <div className="relative mt-4 w-full max-w-[610px]">
            {/* Connecting Line */}
            <div
              className="
                absolute top-[11px]
                right-[calc(16.666%-11px)]
                left-[calc(16.666%-11px)]
                h-px bg-yellow-normal
              "
            />

            {/* Steps */}
            <div className="relative z-10 grid grid-cols-3">
              {stagesData.map((stage) => (
                <div
                  key={stage.id}
                  className="flex flex-col items-center text-center"
                >
                  <Circle
                    className="
                      size-[22px]
                      shadow-[0_0_8px_rgba(184,148,63,0.7)]
                    "
                  />

                  <span className="mt-2 text-yellow-normal text-xs sm:text-sm">
                    {stage.number}
                  </span>

                  <span
                    className="
                      mt-1 text-cream-normal
                      text-[11px] sm:text-sm
                      whitespace-nowrap
                    "
                  >
                    {stage.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stages Sections */}
      {stagesData.map((stage) => (
        <StageSection
          key={stage.id}
          stage={stage}
        />
      ))}
      <HomeFooter />
    </div>
  );
}

export default Stages;
