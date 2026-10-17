
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function JoinUsSection() {
    return (
        <section className="bg-[#14223B] px-5 py-14 text-center text-white">
            <h2 className="text-[27px] font-bold sm:text-[34px]">
                هل لديك فكرة؟
            </h2>

            <p className="mx-auto mt-3 max-w-[580px] text-sm leading-7 text-[#CBD2DC]">
                نحن هنا لنساعدك على تحويلها من مجرد فكرة
                إلى مشروع يصنع فرقًا.
            </p>

            <Link
                to="/joinUs"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#B7964A] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#9D7D36]"
            >
                انضم إلى قبس
                <ArrowLeft size={17} />
            </Link>
        </section>
    );
}
