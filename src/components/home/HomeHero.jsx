import React from "react";
import { Link } from "react-router-dom";
import GoldButton from "./GoldButton";
import journeyHero from "../../assets/journey-hero.png";

export default function HomeHero() {
  return (
    <section
      dir="rtl"
      className="relative flex min-h-[380px] w-full items-center overflow-hidden bg-[#14223B] px-6 py-12 sm:min-h-[420px] sm:px-10 sm:py-16 lg:min-h-[500px] lg:px-20"
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-[78%] bg-cover bg-no-repeat sm:w-[72%] lg:w-[68%]"
        style={{
          backgroundImage: `url(${journeyHero})`,
          backgroundPosition: "center 55%",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-l from-[#14223B] from-[35%] via-[#14223B]/65 via-[62%] to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1280px]">
        <div className="max-w-[530px] text-right">
          <h1 className="pb-6 text-4xl font-bold leading-tight text-[#F8F4EC] sm:text-5xl lg:pb-8 lg:text-[64px]">
            أشعل <span className="text-[#B8943F]">قبسك</span> وغير مسارك
          </h1>
          <p className="text-base text-[#F8F4EC] sm:text-[20px]">
            في قبس، نرافقك من شرارة الفكرة إلى مشروع يصنع أثرًا.
          </p>
        </div>

        <div className="mt-8 flex w-full flex-wrap gap-3">
          <GoldButton to="/joinUs">ابدا رحلتك</GoldButton>
          <Link
            to="/projects"
            className="flex h-fit w-fit flex-row items-center gap-1 rounded-[40px] border-[1.5px] border-[#B8943F] px-4 py-3 text-[#F8F4EC] transition hover:-translate-y-1 hover:bg-[#B8943F] hover:text-[#14223B] hover:shadow-[0_8px_20px_rgba(184,148,63,0.35)]"
          >
            اكتشف مشاريع قبس
          </Link>
        </div>
      </div>
    </section>
  );
}
