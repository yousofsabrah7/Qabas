import React from "react";
import image5 from "../assets/image5.png";
import image4 from "../assets/image4.png";
import image6 from "../assets/image6.png";
import image15 from "../assets/image15.png";
import image17 from "../assets/image17.png";
import image18 from "../assets/image18.png";
import image27 from "../assets/image27.png";
import image28 from "../assets/image28.png";
import image29 from "../assets/image29.png";
import image30 from "../assets/image30.png";
import image31 from "../assets/image31.png";
import image32 from "../assets/image32.png";
import image33 from "../assets/image33.png";
import image34 from "../assets/image34.png";
import image35 from "../assets/image35.png";


function Step({ num, icon, title, desc }) {
  return (
    <div className="flex flex-col items-center text-center w-full max-w-[260px] md:w-[220px] md:max-w-none shrink-0">
      <div className="flex items-center gap-3">
        <span className="text-white text-xl font-bold">{num}</span>
        <div
          className="w-12 h-12 rounded-full border border-[#D4A017] bg-[#0f1f44]/60
                     flex items-center justify-center text-[#D4A017]
                     shadow-[0_0_15px_rgba(212,160,23,0.6)]"
        >
          <i className={icon}></i>
        </div>
      </div>
      <h3 className="text-[#F8F4EC] text-xl font-bold mt-4">{title}</h3>
      <p className="text-gray-300 text-sm mt-2 leading-6">{desc}</p>
    </div>
  );
}

function Curve({ flip }) {
  return (
    <svg
      className={`hidden md:block flex-1 min-w-[40px] h-10 mt-1 ${flip ? "" : "scale-y-[-1]"}`}
      viewBox="0 0 200 50"
      preserveAspectRatio="none"
      fill="none"
    >
      <path
        d="M0 15 C 60 40, 140 40, 200 10"
        stroke="#D4A017"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

const btnGold =
  "flex flex-row items-center bg-[#B8943F] text-white hover:bg-[#9A7A2E] hover:-translate-y-1 transition w-fit h-fit rounded-[40px] py-3 px-4 gap-1";

const Home = () => {
  return (
    <div className="home w-full overflow-x-hidden" dir="rtl">
      {/* start hero section */}
      <div className="bg-[#14223B] w-full h-fit px-6 py-12 sm:px-10 sm:py-16 lg:p-20">
        <div className="w-full max-w-[379px] h-fit text-[#B8943F]">
          <h1 className="text-4xl sm:text-5xl lg:text-[72px] leading-tight font-bold pb-6 lg:pb-8 w-fit flex flex-wrap">
            أشعل قبسك وغير مسارك
          </h1>
          <p className="w-fit flex flex-wrap text-base sm:text-[20px]">
            في قبس , نرافقك من شرارة الفكرة الى مشروع يصنع اثرا
          </p>
        </div>
        <div className="h-fit w-full flex flex-wrap gap-3 mt-8">
          <button className={btnGold}>
            ابدا رحلتك{" "}
            <i className="fa-solid fa-arrow-left-long text-white"></i>
          </button>
          <button className="flex flex-row items-center w-fit h-fit rounded-[40px] border-[1.5px] border-[#B8943F] text-[#B8943F] hover:bg-[#B8943F] hover:text-[#14223B] hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(184,148,63,0.35)] transition py-3 px-4 gap-1">
            اكتشف مشاريع قبس
          </button>
        </div>
      </div>
      {/* end hero section */}

      {/* start what is Qabas section */}
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
            <div className="card w-full h-fit py-2 text-center sm:border-l-[2px] border-[#B8943F]">
              <div className="h-[56px] flex justify-center items-center">
                <span className="border-[2px] border-[#A68539] p-[10px] rounded-[50%]">
                  <i className="fa-regular fa-lightbulb fa-2xl text-[#A68539]"></i>
                </span>
              </div>
              <div>
                <h3 className="text-[#192A4A] font-bold leading-[40px] text-2xl">
                  فكرة
                </h3>
                <p className="text-base leading-6 text-[#4F5666] p-2">
                  نساعدك على اكتشاف وتطوير فكرتك.
                </p>
              </div>
            </div>
            <div className="card w-full h-fit py-2 text-center sm:border-l-[2px] border-[#B8943F]">
              <div className="h-[56px] flex justify-center items-center">
                <span className="border-[2px] border-[#A68539] p-[10px] rounded-[50%]">
                  <i className="fa-solid fa-wand-magic-sparkles fa-xl text-[#A68539]"></i>
                </span>
              </div>
              <div>
                <h3 className="text-[#192A4A] font-bold leading-[40px] text-2xl">
                  مهارة
                </h3>
                <p className="text-base leading-6 text-[#4F5666] p-2">
                  نزودك بالمعرفة والخبرة اللازمة لبناء مشروعك.
                </p>
              </div>
            </div>
            <div className="card w-full h-fit py-2 text-center">
              <div className="h-[56px] flex justify-center items-center">
                <span className="border-[2px] border-[#A68539] p-[10px] rounded-[50%]">
                  <i className="fa-brands fa-envira fa-2xl text-[#A68539]"></i>
                </span>
              </div>
              <div>
                <h3 className="text-[#192A4A] font-bold leading-[40px] text-2xl">
                  أثر
                </h3>
                <p className="text-base leading-6 text-[#4F5666] p-2">
                  نساعدك على تحويل فكرتك إلى قيمة حقيقية.
                </p>
              </div>
            </div>
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
      {/* end what is Qabas section */}

      {/* start Qabas stage */}
      <div className="relative bg-[#FDFCFA] w-full overflow-hidden px-6 py-12 sm:px-10 sm:py-16 lg:p-20">
        <div className="hidden md:block absolute top-0 -right-[50px] z-0 pointer-events-none border-[#937632] border-[1.5px] rounded-full w-[355px] h-[355px]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-[#937632] border-[1.5px] rounded-full w-[266px] h-[266px]"></div>
        </div>

        <div className="hidden md:block absolute top-1/2 -left-[50px] -translate-y-1/2 z-0 pointer-events-none border-[#937632] border-[1.5px] rounded-full w-[355px] h-[355px]">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-[#937632] border-[1.5px] rounded-full w-[266px] h-[266px]"></div>
        </div>

        <div className="content relative z-10 w-full lg:p-10">
          <div className="p-4 text-center">
            <h2 className="font-bold text-3xl sm:text-4xl lg:text-[48px] text-[#192A4A] w-full">
              نضيء الطريق، وأنت تصنع الأثر.
            </h2>
            <p className="font-normal text-lg sm:text-xl lg:text-[24px] w-full mt-3">
              في قبس، نؤمن بأن كل فكرة تحمل إمكانية كبيرة، وتحتاج إلى المعرفة
              والدعم المناسبين لتتحول إلى مشروع حقيقي. لذلك ترافقكم قبس في رحلة
              ذات مراحل متعددة:
            </p>
          </div>

          <div className="cards z-10 py-8 lg:p-12 w-full h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            <div className="card w-full max-w-[373px] z-10 rounded-3xl bg-white shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] overflow-hidden">
              <img
                className="w-full h-[210px] object-cover"
                src={image18}
                alt="do it"
              />
              <div className="h-fit px-[10px] py-5">
                <h3 className="font-bold text-2xl lg:text-[32px] text-[#192A4A]">
                  01- مرحلة التدريب
                </h3>
                <p className="font-normal text-xl lg:text-[24px] text-[#4F5666]">
                  7 أسابيع من التدريب المكثف.
                </p>
              </div>
            </div>
            <div className="card w-full max-w-[373px] z-10 rounded-3xl bg-white shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] overflow-hidden">
              <img
                className="w-full h-[210px] object-cover"
                src={image15}
                alt="do it"
              />
              <div className="h-fit px-[10px] py-5">
                <h3 className="font-bold text-2xl lg:text-[32px] text-[#192A4A]">
                  02- مرحلة الحضانة
                </h3>
                <p className="font-normal text-xl lg:text-[24px] text-[#4F5666]">
                  دعم مشاريع جاهزة للنمو.
                </p>
              </div>
            </div>
            <div className="card w-full max-w-[373px] z-10 rounded-3xl bg-white shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] overflow-hidden md:col-span-2 lg:col-span-1">
              <img
                className="w-full h-[210px] object-cover"
                src={image17}
                alt="do it"
              />
              <div className="h-fit px-[10px] py-5">
                <h3 className="font-bold text-2xl lg:text-[32px] text-[#192A4A]">
                  03- بازار الجامعة
                </h3>
                <p className="font-normal text-xl lg:text-[24px] text-[#4F5666]">
                  تجربة بيع حقيقية.
                </p>
              </div>
            </div>
          </div>
        </div>

        <button className={`relative z-10 ${btnGold}`}>
          عرض التفاصيل{" "}
          <i className="fa-solid fa-arrow-left-long text-white"></i>
        </button>
      </div>
      {/* end Qabas stage */}

      {/* start journey */}
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
          <Step
            num="01"
            icon="fa-solid fa-lightbulb"
            title="اكتشف"
            desc="نساعدك على اكتشاف الفكرة وتحديد المشكلة التي تستحق الحل."
          />
          <Curve />
          <Step
            num="02"
            icon="fa-solid fa-compass-drafting"
            title="طوّر"
            desc="نحوّل الفكرة إلى نموذج واضح وقابل للتجربة والتطوير."
          />
          <Curve flip />
          <Step
            num="03"
            icon="fa-solid fa-rocket"
            title="أطلق"
            desc="نساعدك على تحويل المشروع إلى واقع وبناء أساس لنموه."
          />
        </div>
      </div>
      {/* end journey */}

      {/* start Projects */}
      <div className="relative bg-[#F8F6F0] w-full overflow-hidden px-6 py-12 sm:p-10">
        <div className="content relative z-10 w-full">
          <div className="p-4 text-center">
            <h2 className="font-bold text-3xl sm:text-4xl lg:text-[48px] text-[#192A4A] w-full">
              من شرارات صغيرة… إلى مشاريع حقيقية.
            </h2>
            <p className="font-normal text-lg sm:text-xl lg:text-[24px] w-full mt-3">
              تعرّف على المشاريع التي بدأت فكرتها مع قبس، وتحولت إلى خطوات
              حقيقية نحو الأثر.
            </p>
          </div>

          <div className="cards z-10 w-full h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 my-8 lg:my-12 justify-items-center">
            <div className="card flex flex-col w-full max-w-[421px] z-10 rounded-3xl bg-white shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] overflow-hidden">
              <img
                className="w-full h-[210px] object-cover"
                src={image27}
                alt="do it"
              />
              <div className="h-fit px-[10px] py-5 m-2">
                <h3 className="font-bold text-2xl lg:text-[32px] text-[#192A4A]">
                  مذاق
                </h3>
                <p className="font-normal text-xl lg:text-[24px] text-[#4F5666]">
                  علامة تجارية تقدم منتجات غذائية محلية صحية و ذات جودة عالية.
                </p>
              </div>
              <button className="mt-auto text-[#A68539] font-bold text-xl lg:text-[24px] py-3 px-4 w-fit h-fit gap-1 mb-2">
                اكتشف التفاصيل{" "}
                <i className="fa-solid fa-arrow-left-long text-[#A68539]"></i>
              </button>
            </div>
            <div className="card flex flex-col w-full max-w-[421px] z-10 rounded-3xl bg-white shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] overflow-hidden">
              <img
                className="w-full h-[210px] object-cover"
                src={image28}
                alt="do it"
              />
              <div className="h-fit px-[10px] py-5 m-2">
                <h3 className="font-bold text-2xl lg:text-[32px] text-[#192A4A]">
                  خطوة
                </h3>
                <p className="font-normal text-xl lg:text-[24px] text-[#4F5666]">
                  علامة تجارية تقدم منتجات غذائية محلية صحية و ذات جودة عالية.
                </p>
              </div>
              <button className="mt-auto text-[#A68539] font-bold text-xl lg:text-[24px] py-3 px-4 w-fit h-fit gap-1 mb-2">
                اكتشف التفاصيل{" "}
                <i className="fa-solid fa-arrow-left-long text-[#A68539]"></i>
              </button>
            </div>
            <div className="card flex flex-col w-full max-w-[421px] z-10 rounded-3xl bg-white shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)] overflow-hidden md:col-span-2 lg:col-span-1">
              <img
                className="w-full h-[210px] object-cover"
                src={image29}
                alt="do it"
              />
              <div className="h-fit px-[10px] py-5 m-2">
                <h3 className="font-bold text-2xl lg:text-[32px] text-[#192A4A]">
                  بيئة
                </h3>
                <p className="font-normal text-xl lg:text-[24px] text-[#4F5666]">
                  علامة تجارية تقدم منتجات غذائية محلية صحية و ذات جودة عالية.
                </p>
              </div>
              <button className="mt-auto text-[#A68539] font-bold text-xl lg:text-[24px] py-3 px-4 w-fit h-fit gap-1 mb-2">
                اكتشف التفاصيل{" "}
                <i className="fa-solid fa-arrow-left-long text-[#A68539]"></i>
              </button>
            </div>
          </div>
        </div>

        <button className={`relative z-10 ${btnGold} lg:mx-12`}>
          عرض المشاريع{" "}
          <i className="fa-solid fa-arrow-left-long text-white"></i>
        </button>
      </div>
      {/* end Projects */}

      {/* start Partners */}
      <div className="relative bg-[#FFFFFF] w-full px-6 py-12 sm:p-10">
        <div className="p-4 text-center">
          <h2 className="font-bold text-3xl sm:text-4xl lg:text-[48px] text-[#192A4A] w-full">
            معًا نضيء الطريق.
          </h2>
          <p className="font-normal text-lg sm:text-xl lg:text-[24px] w-full mt-3">
            خلف كل خطوة ناجحة، شراكة تصنع فرقًا.
          </p>
        </div>
        <div className="w-full my-10 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10 py-4 px-0 md:px-6 xl:px-[152px] items-center">
          <img
            className="w-full h-auto object-contain"
            src={image32}
            alt="do it"
          />
          <img
            className="w-full h-auto object-contain"
            src={image31}
            alt="do it"
          />
          <img
            className="w-full h-auto object-contain"
            src={image30}
            alt="do it"
          />
          <img
            className="w-full h-auto object-contain"
            src={image33}
            alt="do it"
          />
        </div>
        <button className={`relative z-10 ${btnGold} lg:mx-12`}>
          انضم كشريك <i className="fa-solid fa-arrow-left-long text-white"></i>
        </button>
      </div>
      {/* end Partners */}

      {/* start footer */}
      <div
        dir="rtl"
        className="relative w-full min-h-[347px] bg-[#132038] overflow-hidden flex items-center px-6 py-12 sm:px-10 lg:px-20"
      >
        <div
          className="absolute inset-y-0 left-0 w-full md:w-[65%] opacity-30 md:opacity-100 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${image34})`,
            WebkitMaskImage:
              "linear-gradient(to right, black 55%, transparent 100%)",
            maskImage: "linear-gradient(to right, black 55%, transparent 100%)",
          }}
        ></div>

        <div className="relative z-10 w-full max-w-[420px] text-center">
          <h3 className="font-bold text-3xl sm:text-[40px] text-[#F8F6F0]">
            هل لديك شرارة؟
          </h3>
          <p className="font-normal text-base text-[#B8943F] mt-2">
            ربما تكون فكرتك هي البداية لشيء يستحق أن يرى النور.
          </p>
          <button className="mt-8 inline-flex flex-row items-center bg-[#B8943F] hover:bg-[#9A7A2E] hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(184,148,63,0.35)] transition-all duration-300 text-white rounded-[40px] py-3 px-5 gap-2">
            انضم إلى قبس{" "}
            <i className="fa-solid fa-arrow-left-long text-white"></i>
          </button>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#4F5666]"></div>

      <footer className="w-full flex flex-col gap-8 lg:gap-[40px] px-6 py-8 sm:p-10 border-t border-[#4F5666] bg-[#132038]">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 w-full">
          <img
            className="object-cover w-[83px] h-[82px] bg-[lightgray] bg-center bg-cover bg-no-repeat"
            src={image35}
            alt="do it"
          />
          <div className="flex flex-col lg:flex-row w-full lg:w-auto items-center justify-end gap-8 lg:gap-12">
            <div className="footer-menu flex flex-wrap justify-center items-center gap-x-2 gap-y-1">
              <span className="flex h-[33px] px-2 justify-center items-center text-[#F8F4EC] font-normal text-base">
                الرئيسية
              </span>
              <span className="hidden lg:block w-[1px] h-[23px] bg-[#F8F6F0] rounded-[8px]"></span>
              <span className="flex h-[33px] px-2 justify-center items-center text-[#F8F4EC]">
                المراحل
              </span>
              <span className="hidden lg:block w-[1px] h-[23px] bg-[#F8F6F0] rounded-[8px]"></span>
              <span className="flex h-[33px] px-2 justify-center items-center text-[#F8F4EC]">
                مشاريع قبس
              </span>
              <span className="hidden lg:block w-[1px] h-[23px] bg-[#F8F6F0] rounded-[8px]"></span>
              <span className="flex h-[33px] px-2 justify-center items-center text-[#F8F4EC]">
                الشركاء
              </span>
              <span className="hidden lg:block w-[1px] h-[23px] bg-[#F8F6F0] rounded-[8px]"></span>
              <span className="flex h-[33px] px-2 justify-center items-center text-[#F8F4EC]">
                تواصل
              </span>
            </div>
            <div className="contact flex items-center gap-[19px]">
              <a href="https://facebook.com">
                <i className="fa-brands fa-square-facebook fa-xl text-[#F8F4EC]"></i>
              </a>
              <a href="https://linkedin.com">
                <i className="fa-brands fa-linkedin fa-xl text-[#F8F4EC]"></i>
              </a>
              <a href="https://gmail.com">
                <i className="fa-regular fa-envelope fa-xl text-[#F8F4EC]"></i>
              </a>
              <a href="https://instagram.com">
                <i className="fa-brands fa-instagram fa-xl text-[#F8F4EC]"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4 w-full">
          <div className="w-full h-[1px] bg-[#4F5666]"></div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 w-full">
            <p className="text-base text-center font-normal text-[#DDDFE4]">
              أفكار اليوم… أثر الغد.
            </p>
            <p className="text-base text-center font-normal text-[#DDDFE4]">
              © 2026 قبس — جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </footer>
      {/* end footer */}
    </div>
  );
};

export default Home;
