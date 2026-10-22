
import React, { useState } from "react";

import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiSend,
} from "react-icons/fi";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import contactHero from "../assets/image38.png";

// ==================== Data ====================

const subjects = [
  "استفسار عام",
  "الانضمام إلى قبس",
  "شراكة",
  "أخرى",
];

const initialForm = {
  name: "",
  email: "",
  subject: "استفسار عام",
  message: "",
};

const contacts = [
  {
    icon: FiMail,
    label: "البريد الإلكتروني",
    value: "qabas.ptuk@outlook.com",
    href: "mailto:qabas.ptuk@outlook.com",
    dir: "ltr",
  },
  {
    icon: FiPhone,
    label: "الهاتف",
    value: "+972 56-990-4985",
    href: "tel:+972569904985",
    dir: "ltr",
  },
  {
    icon: FiMapPin,
    label: "الموقع",
    value: "جامعة فلسطين التقنية خضوري - طولكرم",
  },
  {
    icon: FiClock,
    label: "أوقات الدوام",
    value: "الأحد – الخميس | 9 صباحاً – 4 مساءً",
  },
];

const socials = [
  {
    icon: FaFacebookF,
    label: "Facebook",
    href: "https://facebook.com",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    href: "https://instagram.com",
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
    href: "https://linkedin.com",
  },
];

const inputClass = `
  w-full
  rounded-lg
  border border-[#DDDFE4]
  bg-[#F8F9FC]
  px-4 py-3
  text-sm text-[#192A4A]
  placeholder:text-[#9AA0AE]
  outline-none
  transition-all duration-200
  focus:border-[#B8943F]
  focus:ring-2 focus:ring-[#B8943F]/15
`;

// ==================== Hero ====================

function ContactHero() {
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
    >
      <div
        className="
          pointer-events-none absolute inset-y-0 left-0
          w-full bg-cover bg-left bg-no-repeat
          opacity-30
          md:w-[75%] md:opacity-100
        "
        style={{
          backgroundImage: `url(${contactHero})`,
          WebkitMaskImage:
            "linear-gradient(to right, black 55%, transparent 100%)",
          maskImage:
            "linear-gradient(to right, black 55%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1280px]">
        <div className="max-w-[550px] text-right">
          <span className="text-lg font-bold text-[#B8943F] sm:text-xl">
            تواصل معنا
          </span>

          <h1
            className="
              mt-2 text-4xl font-bold leading-tight
              text-[#F8F4EC]
              sm:text-5xl
              lg:text-[56px]
            "
          >
            نحن هنا{" "}
            <span className="text-[#D4A017]">
              لنستمع منك.
            </span>
          </h1>

          <p
            className="
              mt-4 text-base leading-8
              text-[#F8F4EC]
              sm:text-[18px]
            "
          >
            لديك سؤال، فكرة، أو ترغب في معرفة المزيد
            عن قبس؟ يسعدنا أن نتواصل معك.
          </p>
        </div>
      </div>
    </section>
  );
}

// ==================== Contact Item ====================

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
  dir,
}) {
  return (
    <div
      className="
        flex items-center gap-4
        rounded-2xl bg-white
        px-5 py-5
        shadow-[0_2px_10px_rgba(0,0,0,0.05)]
      "
    >
      <span
        className="
          flex h-11 w-11 shrink-0
          items-center justify-center
          rounded-xl bg-[#192A4A]
          text-white
        "
      >
        <Icon size={19} />
      </span>

      <div className="min-w-0">
        <span className="block text-xs font-bold text-[#B8943F]">
          {label}
        </span>

        {href ? (
          <a
            href={href}
            dir={dir}
            className="
              mt-1 block break-words
              text-sm text-[#192A4A]
              hover:underline
            "
          >
            {value}
          </a>
        ) : (
          <span
            dir={dir}
            className="mt-1 block text-sm leading-6 text-[#192A4A]"
          >
            {value}
          </span>
        )}
      </div>
    </div>
  );
}

// ==================== Contact Info ====================

function ContactInfo() {
  return (
    <div
      className="
        h-fit w-full
        rounded-lg bg-[#F4F5F9]
        p-5 sm:p-6
        lg:w-1/2
      "
    >
      <h2 className="text-2xl font-bold text-[#192A4A] sm:text-3xl">
        كيف تصل إلينا
      </h2>

      <p className="mt-3 text-sm leading-7 text-[#4F5666]">
        يسعدنا التواصل معك في أي وقت، يمكنك التواصل
        معنا عبر أي من الوسائل التالية.
      </p>

      <div className="mt-6 flex flex-col gap-4">
        {contacts.map((contact) => (
          <ContactItem
            key={contact.label}
            {...contact}
          />
        ))}
      </div>

      <p className="mt-6 text-xs font-bold text-[#B8943F]">
        تابعنا على
      </p>

      <div className="mt-3 flex items-center gap-3">
        {socials.map((social) => {
          const Icon = social.icon;

          return (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="
                flex h-10 w-10 items-center justify-center
                rounded-lg bg-white text-[#192A4A]
                shadow-[0_2px_10px_rgba(0,0,0,0.05)]
                transition-all duration-300
                hover:-translate-y-1 hover:text-[#B8943F]
              "
            >
              <Icon size={17} />
            </a>
          );
        })}
      </div>
    </div>
  );
}

// ==================== Field ====================

function Field({ label, htmlFor, children }) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={htmlFor}
        className="text-sm font-bold text-[#192A4A]"
      >
        {label}
      </label>

      {children}
    </div>
  );
}

// ==================== Contact Form ====================

function ContactForm({ onSendMessage }) {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setFeedback(null);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (loading) return;

    if (typeof onSendMessage !== "function") {
      setFeedback({
        type: "error",
        text:
          "نموذج التواصل غير مربوط بخدمة إرسال الرسائل حاليًا. يمكنك التواصل معنا عبر البريد الإلكتروني الموجود في الصفحة.",
      });
      return;
    }

    setLoading(true);
    setFeedback(null);

    try {
      await onSendMessage(form);

      setFeedback({
        type: "success",
        text: "تم إرسال رسالتك بنجاح.",
      });

      setForm({ ...initialForm });
    } catch (error) {
      setFeedback({
        type: "error",
        text:
          error?.message ||
          "تعذّر إرسال الرسالة. حاول مرة أخرى.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
        w-full rounded-3xl
        bg-[#F8F6F0] p-3
        lg:w-1/2
      "
    >
      <form
        onSubmit={handleSubmit}
        className="
          flex h-full flex-col gap-5
          rounded-3xl bg-white
          p-6 sm:p-8
          shadow-[0_8px_24px_rgba(0,0,0,0.08)]
        "
      >
        <h2
          className="
            border-b border-[#EEF0F4]
            pb-4 text-2xl font-bold
            text-[#192A4A]
          "
        >
          أرسل لنا رسالة
        </h2>

        <Field
          label="الاسم الكامل"
          htmlFor="contact-name"
        >
          <input
            id="contact-name"
            type="text"
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            placeholder="اسمك الكامل"
            required
            className={inputClass}
          />
        </Field>

        <Field
          label="البريد الإلكتروني"
          htmlFor="contact-email"
        >
          <input
            id="contact-email"
            type="email"
            name="email"
            autoComplete="email"
            value={form.email}
            onChange={handleChange}
            placeholder="بريدك الإلكتروني"
            required
            className={inputClass}
          />
        </Field>

        <Field
          label="الموضوع"
          htmlFor="contact-subject"
        >
          <select
            id="contact-subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className={`${inputClass} cursor-pointer`}
          >
            {subjects.map((subject) => (
              <option
                key={subject}
                value={subject}
              >
                {subject}
              </option>
            ))}
          </select>
        </Field>

        <Field
          label="الرسالة"
          htmlFor="contact-message"
        >
          <textarea
            id="contact-message"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="اكتب رسالتك هنا..."
            required
            rows={5}
            className={`${inputClass} resize-y`}
          />
        </Field>

        {feedback && (
          <p
            role={
              feedback.type === "error"
                ? "alert"
                : "status"
            }
            className={`
              rounded-lg px-4 py-3
              text-sm leading-6
              ${
                feedback.type === "success"
                  ? "bg-green-50 text-green-800"
                  : "bg-red-50 text-red-700"
              }
            `}
          >
            {feedback.text}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="
            flex w-full items-center
            justify-center gap-2
            rounded-xl
            bg-gradient-to-b
            from-[#C9A84C] to-[#B8943F]
            py-3 font-bold text-white
            shadow-[0_6px_16px_rgba(184,148,63,0.35)]
            transition-all duration-300
            hover:-translate-y-1
            hover:from-[#B8943F]
            hover:to-[#9A7A2E]
            disabled:cursor-not-allowed
            disabled:opacity-60
          "
        >
          {loading ? "جاري الإرسال..." : "إرسال"}
          <FiSend size={17} />
        </button>
      </form>
    </div>
  );
}

// ==================== Main Section ====================

function ContactSection({ onSendMessage }) {
  return (
    <section
      className="
        w-full bg-white
        px-6 py-12
        sm:px-10 sm:py-16
        lg:px-20
      "
    >
      <div
        className="
          mx-auto flex w-full max-w-[1280px]
          flex-col-reverse items-stretch
          gap-8
          lg:flex-row lg:gap-12
        "
      >
        <ContactForm onSendMessage={onSendMessage} />
        <ContactInfo />
      </div>
    </section>
  );
}

// ==================== Contact Page ====================
// Footer is provided by MainLayout

export default function Contact({ onSendMessage }) {
  return (
    <div
      dir="rtl"
      className="w-full overflow-x-hidden bg-white"
    >
      <ContactHero />
      <ContactSection onSendMessage={onSendMessage} />
    </div>
  );
}
