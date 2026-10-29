
import React from "react";
import { NavLink } from "react-router-dom";
import { ArrowLeft, Mail } from "lucide-react";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

import image34 from "../../assets/image34.png";
import image35 from "../../assets/image35.png";

const footerLinks = [
  { name: "الرئيسية", path: "/" },
  { name: "المراحل", path: "/stages" },
  { name: "مشاريع قبس", path: "/projects" },
  { name: "الشركاء", path: "/partners" },
  { name: "تواصل", path: "/contact" },
];

function HomeFooter() {
  return (
    <>
      {/* Start Footer CTA */}
      <div
        dir="rtl"
        className="relative w-full min-h-[347px] bg-[#132038] overflow-hidden flex items-center px-6 py-12 sm:px-10 lg:px-20"
      >
        {/* Background Image */}
        <div
          className="absolute inset-y-0 left-0 w-full md:w-[65%] opacity-30 md:opacity-100 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${image34})`,
            WebkitMaskImage:
              "linear-gradient(to right, black 55%, transparent 100%)",
            maskImage:
              "linear-gradient(to right, black 55%, transparent 100%)",
          }}
        />

        <div className="relative z-10 w-full max-w-[420px] text-center">
          <h3 className="font-bold text-3xl sm:text-[40px] text-[#F8F6F0]">
            هل لديك شرارة؟
          </h3>

          <p className="font-normal text-base text-[#B8943F] mt-2">
            ربما تكون فكرتك هي البداية لشيء يستحق أن يرى النور.
          </p>

          <NavLink
            to="/joinUs"
            className="mt-8 inline-flex flex-row items-center bg-[#B8943F] hover:bg-[#9A7A2E] hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(184,148,63,0.35)] transition-all duration-300 text-white rounded-[40px] py-3 px-5 gap-2"
          >
            انضم إلى قبس
            <ArrowLeft size={20} />
          </NavLink>
        </div>
      </div>

      <div className="w-full h-[1px] bg-[#4F5666]" />

      {/* Start Footer */}
      <footer
        dir="rtl"
        className="w-full flex flex-col gap-8 lg:gap-[40px] px-6 py-8 sm:p-10 border-t border-[#4F5666] bg-[#132038]"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 w-full">
          {/* Logo - يرجع للصفحة الرئيسية */}
          <NavLink
            to="/"
            aria-label="العودة إلى الصفحة الرئيسية"
            className="inline-block"
          >
            <img
              className="object-cover w-[83px] h-[82px] bg-[lightgray] bg-center bg-cover bg-no-repeat"
              src={image35}
              alt="Qabas Logo"
            />
          </NavLink>

          <div className="flex flex-col lg:flex-row w-full lg:w-auto items-center justify-end gap-8 lg:gap-12">
            {/* Footer Navigation */}
            <div className="footer-menu flex flex-wrap justify-center items-center gap-x-2 gap-y-1">
              {footerLinks.map((link, index) => (
                <React.Fragment key={link.path}>
                  <NavLink
                    to={link.path}
                    end={link.path === "/"}
                    className={({ isActive }) =>
                      `flex h-[33px] px-2 justify-center items-center
          text-[#F8F4EC] font-normal text-base
          border-b-2
          transition-colors duration-300
          ${
            isActive
              ? "border-yellow-normal"
              : "border-transparent hover:border-yellow-normal"
          }`
                    }
                  >
                    {link.name}
                  </NavLink>

                  {index < footerLinks.length - 1 && (
                    <span className="hidden lg:block w-[1px] h-[23px] bg-[#F8F6F0] rounded-[8px]" />
                  )}
                </React.Fragment>
              ))}
            </div>

            {/* Social Media Icons */}
            <div className="contact flex items-center gap-[19px]">
              <a
                href="https://www.facebook.com/Qabas.inc"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookSquare
                  size={22}
                  className="text-[#F8F4EC]"
                />
              </a>

              <a
                href="https://www.linkedin.com/company/qabas-ptuk/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin
                  size={22}
                  className="text-[#F8F4EC]"
                />
              </a>

              <a
                href="mailto:your-email@example.com"
                aria-label="Email"
              >
                <Mail
                  size={22}
                  className="text-[#F8F4EC]"
                />
              </a>

              <a
                href="https://www.instagram.com/qabas_ptuk?igsh=MTlwZWMxMmpxNzkwcw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram
                  size={22}
                  className="text-[#F8F4EC]"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col justify-center items-center gap-4 w-full">
          <div className="w-full h-[1px] bg-[#4F5666]" />

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
      {/* End Footer */}
    </>
  );
}

export default HomeFooter;
