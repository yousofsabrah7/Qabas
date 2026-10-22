
import React from "react";
import { Link } from "react-router-dom";

import {
  FaHandshake,
  FaSeedling,
  FaBullhorn,
} from "react-icons/fa";

import { FiArrowLeft } from "react-icons/fi";

// Images
import image30 from "../assets/image30.png";
import image31 from "../assets/image31.png";
import image32 from "../assets/image32.png";
import image33 from "../assets/image33.png";
import partnerHero from "../assets/image38.png";

// ==================== Data ====================

const partners = [
  {
    id: 1,
    image: image32,
    alt: "شريك قبس الأول",
  },
  {
    id: 2,
    image: image31,
    alt: "شريك قبس الثاني",
  },
  {
    id: 3,
    image: image30,
    alt: "شريك قبس الثالث",
  },
  {
    id: 4,
    image: image33,
    alt: "شريك قبس الرابع",
  },
];

const benefits = [
  {
    id: 1,
    icon: FaHandshake,
    title: "شراكة حقيقية",
    description:
      "نبني معك علاقة قائمة على الثقة والأهداف المشتركة.",
  },
  {
    id: 2,
    icon: FaSeedling,
    title: "دعم النمو",
    description:
      "ساهم في احتضان مشاريع طلابية ومساعدتها على النمو.",
  },
  {
    id: 3,
    icon: FaBullhorn,
    title: "حضور وتأثير",
    description:
      "كن جزءًا من مبادرة تصنع أثرًا في المجتمع الجامعي.",
  },
];

// ==================== Hero ====================
// Same design style as ContactHero

function PartnerHero() {
  const scrollToContact = () => {
    document
      .getElementById("partner-contact")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  };

  return (
    <section
      className="
        relative flex min-h-[320px] w-full
        items-center overflow-hidden
        bg-[#14223B]
        px-6 py-12
        sm:min-h-[380px] sm:px-10 sm:py-16
        lg:px-20
      "
      aria-labelledby="partner-hero-title"
    >
      {/* Background Image */}
      <div
        className="
          pointer-events-none absolute inset-y-0 left-0
          w-full bg-cover bg-left bg-no-repeat
          opacity-30
          md:w-[75%] md:opacity-100
        "
        style={{
          backgroundImage: `url(${partnerHero})`,
          WebkitMaskImage:
            "linear-gradient(to right, black 55%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, black 55%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1280px]">
        <div className="max-w-[550px] text-right">
          <span className="text-lg font-bold text-[#B8943F] sm:text-xl">
            شركاء قبس
          </span>

          <h1
            id="partner-hero-title"
            className="
              mt-2 text-4xl font-bold leading-tight
              text-[#F8F4EC]
              sm:text-5xl
              lg:text-[56px]
            "
          >
            معًا{" "}
            <span className="text-[#D4A017]">
              نضيء الطريق.
            </span>
          </h1>

          <p
            className="
              mt-4 text-base leading-8
              text-[#F8F4EC]
              sm:text-[18px]
            "
          >
            خلف كل خطوة ناجحة، شراكة تصنع فرقًا.
            تعرّف على الجهات التي تدعم رحلة قبس.
          </p>

          <button
            type="button"
            onClick={scrollToContact}
            className="
              mt-8 inline-flex items-center
              justify-center gap-2
              rounded-full bg-[#B8943F]
              px-6 py-3
              text-sm font-semibold text-white
              transition-all duration-300
              hover:-translate-y-1
              hover:bg-[#9A7A2E]
            "
          >
            انضم كشريك
            <FiArrowLeft size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

// ==================== Partners ====================

function PartnersSection() {
  return (
    <section
      className="
        w-full bg-white
        px-6 py-12
        sm:px-10 sm:py-16
        lg:px-20
      "
      aria-labelledby="partners-title"
    >
      <div className="mx-auto w-full max-w-[1280px]">
        <div className="text-center">
          <h2
            id="partners-title"
            className="
              text-3xl font-bold text-[#192A4A]
              sm:text-4xl
              lg:text-[48px]
            "
          >
            شركاؤنا
          </h2>

          <p
            className="
              mt-3 text-lg leading-8 text-[#4F5666]
              sm:text-xl lg:text-[24px]
            "
          >
            نفخر بالجهات التي آمنت بالفكرة ودعمت الرحلة.
          </p>
        </div>

        <div
          className="
            mx-auto my-10 grid w-full
            max-w-[1050px]
            grid-cols-2 items-center
            gap-6 py-4
            md:grid-cols-4 md:gap-8
            lg:gap-10
          "
        >
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="
                flex min-h-[120px] items-center
                justify-center p-3
                transition-transform duration-300
                hover:-translate-y-1
              "
            >
              <img
                src={partner.image}
                alt={partner.alt}
                loading="lazy"
                className="
                  max-h-[130px] w-full
                  object-contain
                "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== Benefit Card ====================

function BenefitCard({ benefit, isLast }) {
  const Icon = benefit.icon;

  return (
    <article
      className={`
        flex w-full flex-col items-center
        px-5 py-6 text-center
        ${
          !isLast
            ? "border-b-2 border-[#B8943F] sm:border-b-0 sm:border-l-2"
            : ""
        }
      `}
    >
      <div
        className="
          flex h-14 w-14 items-center
          justify-center rounded-full
          border-2 border-[#A68539]
          text-[#A68539]
        "
      >
        <Icon size={22} />
      </div>

      <h3
        className="
          mt-4 text-2xl font-bold
          leading-10 text-[#192A4A]
        "
      >
        {benefit.title}
      </h3>

      <p
        className="
          mt-2 max-w-[320px]
          text-base leading-6
          text-[#4F5666]
        "
      >
        {benefit.description}
      </p>
    </article>
  );
}

// ==================== Why Partner ====================

function WhyPartnerSection() {
  return (
    <section
      className="
        w-full bg-[#F8F6F0]
        px-6 py-12
        sm:px-10 sm:py-16
        lg:px-20
      "
      aria-labelledby="why-partner-title"
    >
      <div className="mx-auto w-full max-w-[1280px]">
        <h2
          id="why-partner-title"
          className="
            text-center text-3xl font-bold
            text-[#192A4A]
            sm:text-4xl
            lg:text-[48px]
          "
        >
          لماذا تصبح شريكًا؟
        </h2>

        <div
          className="
            mt-10 grid grid-cols-1
            sm:grid-cols-3
          "
        >
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={benefit.id}
              benefit={benefit}
              isLast={index === benefits.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ==================== Partner Contact ====================

function PartnerContactSection() {
  return (
    <section
      id="partner-contact"
      className="
        w-full scroll-mt-20 bg-white
        px-6 py-12
        sm:px-10 sm:py-16
        lg:px-20
      "
    >
      <div className="mx-auto max-w-[850px] text-center">
        <h2
          className="
            text-3xl font-bold text-[#192A4A]
            sm:text-4xl
          "
        >
          كن شريكًا في صناعة الأثر
        </h2>

        <p
          className="
            mx-auto mt-4 max-w-[650px]
            text-base leading-8
            text-[#4F5666]
            sm:text-lg
          "
        >
          نؤمن أن الشراكات الحقيقية قادرة على تحويل
          الأفكار الصغيرة إلى مشاريع تصنع فرقًا.
          يسعدنا التعرف عليك ومناقشة فرص التعاون.
        </p>

        <Link
          to="/contact"
          className="
            mt-8 inline-flex items-center
            justify-center gap-2
            rounded-full bg-[#B8943F]
            px-7 py-3
            text-sm font-semibold text-white
            transition-all duration-300
            hover:-translate-y-1
            hover:bg-[#9A7A2E]
          "
        >
          تواصل معنا
          <FiArrowLeft size={18} />
        </Link>
      </div>
    </section>
  );
}

// ==================== Partner Page ====================
// Navbar and Footer come from MainLayout

export default function Partner() {
  return (
    <div
      dir="rtl"
      className="w-full overflow-x-hidden bg-white"
    >
      <PartnerHero />
      <PartnersSection />
      <WhyPartnerSection />
      <PartnerContactSection />
    </div>
  );
}
