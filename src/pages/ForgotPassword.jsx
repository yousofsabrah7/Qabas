import { useState } from "react";
import { Link } from "react-router-dom";
import { LockKeyhole, Mail, LoaderCircle, CheckCircle2 } from "lucide-react";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Pass onResetPassword(email) to connect your backend.
 * Resolve when the request has been accepted, reject on a network/server error.
 */
export default function ForgotPassword({ onResetPassword }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [requestError, setRequestError] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    if (loading) return;
    setError("");
    setRequestError("");
    const normalized = email.trim();
    if (!normalized) {
      setError("يرجى إدخال البريد الإلكتروني.");
      return;
    }
    if (!EMAIL_PATTERN.test(normalized)) {
      setError("يرجى إدخال بريد إلكتروني صحيح.");
      return;
    }
    if (typeof onResetPassword !== "function") {
      setRequestError("خدمة استعادة كلمة المرور غير مربوطة بعد.");
      return;
    }
    setLoading(true);
    try {
      await onResetPassword(normalized);
      setSubmitted(true);
    } catch {
      setRequestError("تعذر إرسال الطلب حاليًا. حاول مرة أخرى.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main dir="rtl" className="flex min-h-dvh w-full items-center justify-center bg-[#F8F6F0] px-4 py-10 sm:px-6">
      <section aria-labelledby="reset-title" className="w-full max-w-[460px] rounded-[22px] bg-white px-6 py-9 sm:px-9 sm:py-10">
        <div className="mx-auto mb-6 flex size-[62px] items-center justify-center rounded-full bg-[#F5F0E4]">
          <LockKeyhole size={29} strokeWidth={1.6} className="text-[#14223B]" aria-hidden="true" />
        </div>
        <h1 id="reset-title" className="text-center text-[25px] font-bold leading-[1.5] text-[#14223B] sm:text-[28px]">استعادة كلمة المرور</h1>
        <p className="mx-auto mt-2 max-w-[365px] text-center text-[13px] leading-7 text-[#7C818B] sm:text-[14px]">
          أدخل بريدك الإلكتروني، وسنرسل لك رابطًا لإعادة تعيين كلمة المرور.
        </p>

        {submitted ? (
          <div role="status" className="mt-9 flex flex-col items-center gap-3 text-center">
            <CheckCircle2 size={36} className="text-[#B8943F]" aria-hidden="true" />
            <p className="font-semibold text-[#14223B]">تم استلام طلب الاستعادة</p>
            <p className="text-[14px] leading-7 text-[#7C818B]">إذا كان البريد مسجّلًا لدينا، ستصلك رسالة تتضمن تعليمات إعادة تعيين كلمة المرور.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="mt-9">
            <label htmlFor="forgot-email" className="mb-2 block text-right text-[14px] font-medium text-[#14223B]">البريد الإلكتروني</label>
            <div className="relative">
              <Mail aria-hidden="true" size={17} strokeWidth={1.6} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#64748B]" />
              <input
                id="forgot-email" name="email" type="email" autoComplete="email" dir="rtl"
                value={email} onChange={(event) => { setEmail(event.target.value); setError(""); setRequestError(""); }}
                placeholder="أدخل بريدك الإلكتروني" aria-invalid={Boolean(error)} aria-describedby={error ? "forgot-email-error" : undefined}
                className={`h-[49px] w-full rounded-[12px] border bg-white pr-11 pl-4 text-[14px] text-[#14223B] outline-none transition-colors placeholder:text-[#9CA3AF] focus:border-[#B8943F] ${error ? "border-red-500" : "border-[#9FA7B3]"}`}
              />
            </div>
            {error && <p id="forgot-email-error" role="alert" className="mt-2 text-[12px] text-red-600">{error}</p>}
            {requestError && <p role="alert" className="mt-3 rounded-lg bg-red-50 px-3 py-2 text-[13px] text-red-600">{requestError}</p>}
            <button type="submit" disabled={loading} className="mt-4 flex h-[49px] w-full items-center justify-center gap-2 rounded-[12px] bg-[#B8943F] text-[16px] font-semibold text-white transition-colors hover:bg-[#A58232] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B8943F] disabled:cursor-not-allowed disabled:opacity-60">
              {loading ? <><LoaderCircle size={18} className="animate-spin" aria-hidden="true" /> جاري الإرسال...</> : "إرسال رابط الاستعادة"}
            </button>
          </form>
        )}
        <Link to="/login" className="mt-12 block text-center text-[14px] text-[#64748B] transition-colors hover:text-[#B8943F]">العودة إلى تسجيل الدخول</Link>
      </section>
    </main>
  );
}
