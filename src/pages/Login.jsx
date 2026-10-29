
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, LoaderCircle } from "lucide-react";

import loginFrame from "../assets/login-frame.svg";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const isDemoCredentials = (values) =>
  values.email.trim() === "123" &&
  values.password === "123";

export default function Login({ onLogin }) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");

  const validate = (values) => {
    const nextErrors = {};
    const isDemoLogin = isDemoCredentials(values);

    if (!values.email.trim()) {
      nextErrors.email = "الاسم مطلوب";
    } else if (
      !isDemoLogin &&
      !EMAIL_REGEX.test(values.email.trim())
    ) {
      nextErrors.email =
        "أدخل الاسم 123 للدخول التجريبي، أو بريدًا إلكترونيًا صحيحًا";
    }

    if (!values.password) {
      nextErrors.password = "كلمة المرور مطلوبة";
    } else if (!isDemoLogin && values.password.length < 8) {
      nextErrors.password =
        "كلمة المرور يجب أن تحتوي على 8 أحرف على الأقل";
    }

    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setServerError("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = validate(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    if (isDemoCredentials(form)) {
      localStorage.setItem("qabas-demo-session", "true");
      navigate("/management");
      return;
    }

    if (typeof onLogin !== "function") {
      setServerError(
        "خدمة تسجيل الدخول غير متصلة بعد. يرجى ربطها بنظام الحسابات."
      );
      return;
    }

    setIsSubmitting(true);
    setServerError("");

    try {
      await onLogin({
        email: form.email.trim(),
        password: form.password,
      });
    } catch (error) {
      setServerError(
        error?.message ||
        "تعذر تسجيل الدخول. يرجى المحاولة مرة أخرى."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      dir="ltr"
      className="
        flex
        min-h-dvh
        w-full
        flex-col
        bg-[#F8F6F0]
        px-4
        sm:px-8
        lg:px-20
        lg:h-dvh
        lg:flex-row
        lg:overflow-hidden
      "
    >
      {/* LEFT SIDE - IMAGE */}

<aside
  className="relative block h-[220px] w-full shrink-0 overflow-hidden bg-[#061D36] sm:h-[280px] lg:h-dvh lg:w-[551px]"
>
  <img
    src={loginFrame}
    alt="قبس - الطريق نحو الفرص"
    className="block h-full w-full object-cover lg:object-fill"
  />
</aside>


      {/* RIGHT SIDE - FORM */}
      <main
        dir="rtl"
        className="
          flex
          min-h-dvh
          min-w-0
          flex-1
          items-center
          justify-start
          bg-[#F8F6F0]
          px-5
          py-10
          sm:px-8
          lg:min-h-0
          lg:overflow-y-auto
        "
      >
        <div
          className="
            w-full
            max-w-[480px]
            rounded-[24px]
            bg-white
            px-6
            py-9
            shadow-[0_4px_20px_rgba(20,34,59,0.04)]
            sm:px-10
            sm:py-11
          "
        >
          {/* HEADER */}
          <div className="mb-9 text-right">
            <h1
              className="
                text-[28px]
                font-bold
                text-[#14223B]
                sm:text-[34px]
              "
            >
              مرحبًا بعودتك.
            </h1>

            <p
              className="
                mt-2
                text-[14px]
                leading-7
                text-[#7C818B]
                sm:text-[15px]
              "
            >
              سجّل دخولك، وواصل رحلتك في قبس.
            </p>
          </div>

          {/* LOGIN FORM */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="flex flex-col gap-5"
          >
            {/* EMAIL */}
            <div>
              <label
                htmlFor="login-email"
                className="
                  mb-2
                  block
                  text-[14px]
                  font-semibold
                  text-[#14223B]
                "
              >
                الاسم
              </label>

              <input
                id="login-email"
                name="email"
                type="text"
                inputMode="email"
                dir="rtl"
                autoComplete="username"
                value={form.email}
                onChange={handleChange}
                placeholder="123"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={
                  errors.email ? "email-error" : undefined
                }
                className={`
                  h-[48px]
                  w-full
                  rounded-[12px]
                  border
                  bg-white
                  px-4
                  text-[14px]
                  text-[#14223B]
                  outline-none
                  transition-colors
                  placeholder:text-[#9CA3AF]
                  focus:border-[#B8943F]
                  ${errors.email
                    ? "border-red-500"
                    : "border-[#D6D9DF]"
                  }
                `}
              />

              {errors.email && (
                <p
                  id="email-error"
                  role="alert"
                  className="mt-2 text-[12px] text-red-600"
                >
                  {errors.email}
                </p>
              )}
            </div>

            {/* PASSWORD */}
            <div>
              <label
                htmlFor="login-password"
                className="
                  mb-2
                  block
                  text-[14px]
                  font-semibold
                  text-[#14223B]
                "
              >
                كلمة المرور
              </label>

              <div className="relative">
                <input
                  id="login-password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  dir="rtl"
                  autoComplete="current-password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="أدخل كلمة المرور"
                  aria-invalid={Boolean(errors.password)}
                  aria-describedby={
                    errors.password
                      ? "password-error"
                      : undefined
                  }
                  className={`
                    h-[48px]
                    w-full
                    rounded-[12px]
                    border
                    bg-white
                    py-2
                    pr-4
                    pl-12
                    text-[14px]
                    text-[#14223B]
                    outline-none
                    transition-colors
                    placeholder:text-[#9CA3AF]
                    focus:border-[#B8943F]
                    ${errors.password
                      ? "border-red-500"
                      : "border-[#D6D9DF]"
                    }
                  `}
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword((prev) => !prev)
                  }
                  aria-label={
                    showPassword
                      ? "إخفاء كلمة المرور"
                      : "إظهار كلمة المرور"
                  }
                  className="
                    absolute
                    left-3
                    top-1/2
                    -translate-y-1/2
                    text-[#94A3B8]
                    transition-colors
                    hover:text-[#B8943F]
                  "
                >
                  {showPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>
              </div>

              {errors.password && (
                <p
                  id="password-error"
                  role="alert"
                  className="mt-2 text-[12px] text-red-600"
                >
                  {errors.password}
                </p>
              )}
            </div>

            {/* REMEMBER ME */}
            <div className="flex items-center justify-between gap-3">
              <label
                className="
                  flex
                  cursor-pointer
                  items-center
                  gap-2
                  text-[13px]
                  text-[#64748B]
                "
              >
                <input
                  type="checkbox"
                  className="
                    size-4
                    accent-[#B8943F]
                  "
                />
                تذكرني
              </label>

              <Link
                to="/forgot-password"
                className="
                  text-[13px]
                  font-medium
                  text-[#B8943F]
                  hover:underline
                "
              >
                نسيت كلمة المرور؟
              </Link>
            </div>

            {/* SERVER ERROR */}
            {serverError && (
              <p
                role="alert"
                className="
                  rounded-lg
                  bg-red-50
                  px-4
                  py-3
                  text-[13px]
                  text-red-600
                "
              >
                {serverError}
              </p>
            )}

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="
                flex
                h-[50px]
                w-full
                items-center
                justify-center
                gap-2
                rounded-[12px]
                bg-[#B8943F]
                text-[16px]
                font-semibold
                text-white
                transition-colors
                hover:bg-[#A58232]
                disabled:cursor-not-allowed
                disabled:opacity-70
              "
            >
              {isSubmitting ? (
                <>
                  <LoaderCircle
                    size={19}
                    className="animate-spin"
                  />
                  جاري تسجيل الدخول...
                </>
              ) : (
                "تسجيل الدخول"
              )}
            </button>
          </form>

          <div className="mt-7 text-center">
            <Link
              to="/joinUs"
              className="text-sm font-semibold text-[#B8943F] hover:underline"
            >
              نماذج التطوع واحتضان المشاريع
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}
