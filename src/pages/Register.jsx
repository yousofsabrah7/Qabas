
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FiUser,
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiArrowLeft,
} from "react-icons/fi";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (form.password.length < 8) {
      setError("كلمة المرور لازم تكون 8 أحرف على الأقل.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("كلمتا المرور غير متطابقتين.");
      return;
    }

    setError(
      "النموذج جاهز، لكن إنشاء الحساب يحتاج ربطًا بخدمة التسجيل."
    );
  };

  const inputClass =
    "w-full rounded-xl border border-[#E3E5E9] bg-[#F8F9FC] py-3 pr-11 pl-11 text-sm text-[#14223B] outline-none transition focus:border-[#B8943F] focus:ring-2 focus:ring-[#B8943F]/15";

  return (
    <main
      dir="rtl"
      className="flex min-h-screen items-center justify-center bg-[#FBF9F4] px-4 py-12"
    >
      <div className="w-full max-w-[480px] rounded-[24px] border border-[#EEE8DD] bg-white p-6 shadow-[0_12px_40px_rgba(20,34,59,0.08)] sm:p-10">
        <div className="text-center">
          <span className="text-3xl font-bold text-[#B8943F]">
            قبس
          </span>

          <h1 className="mt-5 text-[28px] font-bold text-[#14223B]">
            إنشاء حساب جديد
          </h1>

          <p className="mt-2 text-sm leading-7 text-[#858A91]">
            انضم إلى قبس وابدأ رحلتك معنا
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-8 flex flex-col gap-5"
        >
          <div>
            <label
              htmlFor="register-name"
              className="mb-2 block text-sm font-bold text-[#14223B]"
            >
              الاسم الكامل
            </label>

            <div className="relative">
              <FiUser className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9298A3]" />

              <input
                id="register-name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="أدخل اسمك الكامل"
                autoComplete="name"
                required
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="register-email"
              className="mb-2 block text-sm font-bold text-[#14223B]"
            >
              البريد الإلكتروني
            </label>

            <div className="relative">
              <FiMail className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9298A3]" />

              <input
                id="register-email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="example@email.com"
                autoComplete="email"
                dir="ltr"
                required
                className={`${inputClass} text-left`}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="register-password"
              className="mb-2 block text-sm font-bold text-[#14223B]"
            >
              كلمة المرور
            </label>

            <div className="relative">
              <FiLock className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9298A3]" />

              <input
                id="register-password"
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="8 أحرف على الأقل"
                autoComplete="new-password"
                minLength={8}
                required
                className={inputClass}
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword((previous) => !previous)
                }
                aria-label={
                  showPassword
                    ? "إخفاء كلمة المرور"
                    : "إظهار كلمة المرور"
                }
                className="absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer text-[#9298A3] hover:text-[#B8943F]"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
          </div>

          <div>
            <label
              htmlFor="register-confirm"
              className="mb-2 block text-sm font-bold text-[#14223B]"
            >
              تأكيد كلمة المرور
            </label>

            <div className="relative">
              <FiLock className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9298A3]" />

              <input
                id="register-confirm"
                type={
                  showConfirmPassword ? "text" : "password"
                }
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="أعد إدخال كلمة المرور"
                autoComplete="new-password"
                required
                className={inputClass}
              />

              <button
                type="button"
                onClick={() =>
                  setShowConfirmPassword(
                    (previous) => !previous
                  )
                }
                aria-label={
                  showConfirmPassword
                    ? "إخفاء تأكيد كلمة المرور"
                    : "إظهار تأكيد كلمة المرور"
                }
                className="absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer text-[#9298A3] hover:text-[#B8943F]"
              >
                {showConfirmPassword ? (
                  <FiEyeOff />
                ) : (
                  <FiEye />
                )}
              </button>
            </div>
          </div>

          {error && (
            <p
              role="alert"
              className="rounded-lg bg-[#FFF4F0] px-4 py-3 text-sm leading-6 text-[#A34B3F]"
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            className="mt-2 flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#B8943F] py-3.5 text-sm font-bold text-white transition hover:bg-[#9A7A2E]"
          >
            إنشاء حساب
            <FiArrowLeft size={17} />
          </button>
        </form>

        <p className="mt-7 text-center text-sm text-[#858A91]">
          عندك حساب بالفعل؟{" "}
          <Link
            to="/login"
            className="font-bold text-[#B8943F] hover:underline"
          >
            سجّل الدخول
          </Link>
        </p>
      </div>
    </main>
  );
}
