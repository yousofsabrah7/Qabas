
import React, { useState } from "react";
import journeyHero from "../assets/journey-hero.png";
import { useNavigate } from "react-router-dom";

import {
  FiArrowLeft,
  FiArrowLeftCircle,
  FiCheck,
  FiUsers,
  FiAward,
  FiZap,
  FiHelpCircle,
  FiFileText,
  FiSend,
  FiStar,
  FiChevronLeft,
} from "react-icons/fi";

const joinOptions = [
  {
    id: "member",
    icon: FiUsers,
    title: "انضمام كعضو",
    subtitle: "كن جزءًا من المجتمع",
    description:
      "هل تريد أن تكون جزءًا من مجتمع قبس، وتشارك في أنشطته وفعالياته، وتطوّر مهاراتك إلى جانب طلاب وشباب يشاركونك الطموح؟",
    features: [
      " عضوية في مجتمع قبس الريادي",
      "المشاركة في الفعاليات والتدريبات",
      " فرص للتعلّم وتطوير المهارات",
    ],
    button: "انضم كعضو",
  },
  {
    id: "incubation",
    icon: FiAward,
    title: "احتضان مشروعك",
    subtitle: "حوّل فكرتك إلى مشروع واقعي.",
    description:
      "هل لديك فكرة أو مشروع صغير وتريد أن تطوّره؟ انضم إلى برنامج الحضانة في مبادرة قبس، وابدأ رحلة تحويل فكرتك إلى مشروع أكثر جاهزية للنمو.",
    features: [
      "تدريب ومتابعة من فريق مختص",
      "مراجعة فكرتك ومقابلة قصيرة",
      "دعم ومسار مخصص لمشروعك",
    ],
    button: "انضم لاحتضان مشروعك",
  },
  {
    id: "project",
    icon: FiZap,
    title: "لديك مشروع في قبس؟",
    subtitle: "أدر مشروعك وشارك قصته.",
    description:
      "لديك مشروع مُحتضَن من قبس؟ سجّل الدخول إلى حسابك لإدارة صفحة مشروعك، وتحديث معلوماته، وإضافة الصور والروابط الخاصة به.",
    features: [
      "تعديل معلومات مشروعك",
      " تحديث الصور والروابط",
      "إدارة صفحة مشروعك في مشاريع قبس",
    ],
    button: "سجّل المشروع",
  },
];

const steps = [
  {
    number: "01",
    icon: FiSend,
    title: "أرسل طلبك",
    description:
      "املأ نموذج الانضمام بالمعلومات المطلوبة وأخبرنا عنك وعن اهتمامك بقبس.",
  },
  {
    number: "02",
    icon: FiFileText,
    title: "نراجع طلبك",
    description:
      "يراجع فريق قبس طلبك ويتواصل معك عند الحاجة لاستكمال المعلومات أو الخطوات المطلوبة.",
  },
  {
    number: "03",
    icon: FiStar,
    title: "ابدأ رحلتك",
    description:
      "بعد القبول، تبدأ خطوتك التالية وتصبح جزءًا من رحلة قبس.",
  },
];


function JoinHero() {
  return (
    <section
      dir="rtl"
      className="relative flex h-[242px] w-full items-center overflow-hidden bg-[#14223B] sm:h-[300px] lg:h-[350px]"
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

      {/* النص */}
      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 sm:px-10 lg:px-8">
        <div className="mr-0 max-w-[490px] text-right">
          <span className="text-[17px] font-bold text-[#B8943F] sm:text-[20px]">
            انضم إلى قبس
          </span>

          <h1 className="mt-4 text-[30px] font-bold leading-[1.5] text-white sm:text-[40px] lg:text-[46px]">
            ابدأ رحلتك مع{" "}
            <span className="text-[#D4A017]">قبس</span>
          </h1>

          <p className="mt-5 max-w-[460px] text-[14px] leading-8 text-white sm:text-[16px]">
            سواء كنت تبحث عن بيئة تطوّر فيها مهاراتك، أو لديك
            فكرة تريد تحويلها إلى مشروع، فلك مكان في رحلة قبس.
          </p>
        </div>
      </div>
    </section>
  );
}


function JoinCard({ option, onSelect }) {
  const Icon = option.icon;

  return (
    <article className="flex h-full flex-col rounded-2xl border border-[#E7E7E7] bg-white px-6 py-7 shadow-[0_3px_8px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(0,0,0,0.09)]">
      <div className="flex justify-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F5F0E4] text-[#A68539]">
          <Icon size={25} />
        </div>
      </div>

      <h3 className="mt-5 text-center text-[22px] font-bold text-[#192A4A]">
        {option.title}
      </h3>

      <p className="mt-1 text-center text-sm font-semibold text-[#B8943F]">
        {option.subtitle}
      </p>

      <p className="mt-5 min-h-[100px] text-center text-[14px] leading-7 text-[#4F5666]">
        {option.description}
      </p>

      <div className="mt-5 flex flex-1 flex-col gap-3">
        {option.features.map((feature) => (
          <div
            key={feature}
            className="flex items-start gap-2 text-sm text-[#4F5666]"
          >
            <FiCheck
              className="mt-1 shrink-0 text-[#B8943F]"
              size={15}
            />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => onSelect(option)}
        className="mt-7 flex w-full items-center justify-center gap-2 rounded-lg bg-[#B8943F] px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#9A7A2E]"
      >
        {option.button}
        <FiArrowLeft size={16} />
      </button>
    </article>
  );
}

function JoinOptions({ onSelect }) {
  return (
    <section
      id="join-options"
      className="bg-[#F8F6F0] px-6 py-12 sm:px-10 lg:px-20"
    >
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-6 md:grid-cols-3">
        {joinOptions.map((option) => (
          <JoinCard
            key={option.id}
            option={option}
            onSelect={onSelect}
          />
        ))}
      </div>
    </section>
  );
}

function SectionHeading({ children, description }) {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center gap-4">
        <span className="h-px w-10 bg-[#B8943F] sm:w-20" />
        <h2 className="text-[25px] font-bold text-[#192A4A] sm:text-[34px]">
          {children}
        </h2>
        <span className="h-px w-10 bg-[#B8943F] sm:w-20" />
      </div>

      {description && (
        <p className="mt-3 text-sm leading-7 text-[#4F5666] sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

function WhichPath({ onSelect }) {
  return (
    <section className="bg-[#F8F6F0] px-6 pb-16 pt-6 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-[1280px]">
        <SectionHeading description="لست متأكدًا من الخيار المناسب لك؟ إليك بعض المساعدة.">
          أي طريق يناسبك؟
        </SectionHeading>

        <div className="mt-9 grid grid-cols-1 gap-5 md:grid-cols-2">
          <button
            type="button"
            onClick={() => onSelect(joinOptions[0])}
            className="flex items-center gap-4 rounded-2xl border border-[#E8E8E8] bg-white p-5 text-right transition-all hover:border-[#B8943F] hover:shadow-md"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F5F0E4] text-[#A68539]">
              <FiUsers size={22} />
            </span>

            <span className="flex-1">
              <span className="block font-bold text-[#192A4A]">
               تريد التعلّم والمشاركة والانضمام إلى مجتمع قبس؟
              </span>
              <span className="mt-1 block text-sm text-[#4F5666]">
                اختر مسار الانضمام كعضو.
              </span>
            </span>

            <FiChevronLeft className="text-[#B8943F]" />
          </button>

          <button
            type="button"
            onClick={() => onSelect(joinOptions[1])}
            className="flex items-center gap-4 rounded-2xl border border-[#E8E8E8] bg-white p-5 text-right transition-all hover:border-[#B8943F] hover:shadow-md"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F5F0E4] text-[#A68539]">
              <FiAward size={22} />
            </span>

            <span className="flex-1">
              <span className="block font-bold text-[#192A4A]">
               لديك فكرة وتريد تطويرها؟
              </span>
              <span className="mt-1 block text-sm text-[#4F5666]">
                اختر مسار احتضان مشروعك.
              </span>
            </span>

            <FiChevronLeft className="text-[#B8943F]" />
          </button>
        </div>
      </div>
    </section>
  );
}

function RegistrationSteps() {
  return (
    <section className="bg-white px-6 py-16 sm:px-10 lg:px-20">
      <div className="mx-auto max-w-[1280px]">
        <SectionHeading description="نعمل مع مؤسسات وجهات تؤمن بأهمية تمكين الشباب وتحويل الأفكار إلى أثر حقيقي.">
          ماذا يحدث بعد التسجيل؟
        </SectionHeading>

        <div className="relative mt-14 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6">
          <div
            className="pointer-events-none absolute right-[16%] left-[16%] top-[26px] hidden border-t-2 border-dotted border-[#B8943F] md:block"
            aria-hidden="true"
          />

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F5F0E4] text-[#A68539] shadow-[0_0_15px_rgba(184,148,63,0.18)]">
                  <Icon size={23} />
                </div>

                <span className="mt-3 text-sm font-bold text-[#B8943F]">
                  {step.number}
                </span>

                <h3 className="mt-2 text-lg font-bold text-[#192A4A]">
                  {step.title}
                </h3>

                <p className="mt-3 max-w-[270px] text-sm leading-7 text-[#4F5666]">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function JoinCTA() {
  return (
    <section className="relative flex min-h-[270px] items-center overflow-hidden bg-[#14223B] px-6 py-12 sm:px-10 lg:px-20">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35"
        style={{
          backgroundImage: "url('/images/join-cta.png')",
        }}
        aria-hidden="true"
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-[#14223B] via-[#14223B]/75 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-[1280px]">
        <div className="max-w-[500px] text-right">
          <h2 className="text-3xl font-bold text-[#F8F4EC] sm:text-[40px]">
            هل لديك شرارة؟
          </h2>

          <p className="mt-3 text-base leading-7 text-[#D4A017]">
            فكرة صغيرة قد تكون بداية لشيء كبير.
          </p>

          <a
            href="#join-options"
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#B8943F] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-[#9A7A2E]"
          >
            انضم إلى قبس
            <FiArrowLeft size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}

function SelectionNotice({ selected, onClose }) {
  if (!selected) return null;

  return (
    <div
      role="status"
      className="fixed bottom-5 left-5 right-5 z-50 mx-auto max-w-[460px] rounded-xl border border-[#E5D8B8] bg-white p-5 shadow-xl"
    >
      <div className="flex items-start gap-3">
        <FiHelpCircle
          size={22}
          className="shrink-0 text-[#B8943F]"
        />

        <div className="flex-1">
          <h3 className="font-bold text-[#192A4A]">
            {selected.title}
          </h3>
          <p className="mt-1 text-sm leading-6 text-[#4F5666]">
            اخترت هذا المسار بنجاح. رح نربط زر التسجيل
            بصفحته الخاصة في الخطوة القادمة.
          </p>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="text-sm font-bold text-[#4F5666] hover:text-[#192A4A]"
          aria-label="إغلاق"
        >
          ✕
        </button>
      </div>
    </div>
  );
}


const JoinUs = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();


const handleSelect = (option) => {
  if (option.id === "project") {
    navigate("/login");
    return;
  }

  if (option.id === "incubation") {
    navigate("/project/create");
    return;
  }

  setSelectedOption(option);
};


  return (
    <div
      dir="rtl"
      className="w-full overflow-x-hidden bg-white"
    >
      <JoinHero />

      <JoinOptions onSelect={handleSelect} />

      <WhichPath onSelect={handleSelect} />

      <RegistrationSteps />

      <SelectionNotice
        selected={selectedOption}
        onClose={() => setSelectedOption(null)}
      />
    </div>
  );
};

export default JoinUs;
