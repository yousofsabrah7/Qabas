
import DoubleCircle from "../DoubleCircle";

export default function ProjectsCTA() {
    return (
        <section
            dir="rtl"
            className="
        relative
        flex
        w-full
        min-h-[240px]
        flex-col
        items-center
        justify-center
        overflow-hidden
        border-y
        border-[#E8E0D1]
        bg-[#F8F4EC]
        px-5
        py-12
        text-center

        sm:px-8
        sm:py-14

        lg:h-[240px]
      "
        >
            {/* LEFT DECORATIVE CIRCLES */}
            <DoubleCircle
                className="
          pointer-events-none
          absolute
          -left-20
          -top-5
          z-0
          max-sm:!-left-28
          max-sm:!-top-12
        "
            />

            {/* RIGHT DECORATIVE CIRCLES */}
            <DoubleCircle
                className="
          pointer-events-none
          absolute
          -right-20
          -top-5
          z-0
          max-sm:!-right-28
          max-sm:!-top-12
        "
            />

            {/* CONTENT */}
            <div
                className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-[850px]
          flex-col
          items-center
          gap-4
        "
            >
                <h2
                    className="
            text-[30px]
            font-bold
            leading-tight
            text-[#14223B]

            sm:text-[36px]
            lg:text-[48px]
          "
                >
                    كل مشروع له قصة.
                </h2>

                <p
                    className="
            mx-auto
            max-w-[650px]
            text-[16px]
            leading-[1.9]
            text-[#7C818B]

            sm:text-[19px]
            lg:text-[24px]
            lg:leading-[1.6]
          "
                >
                    خلف كل مشروع فكرة بدأت بشرارة، وشخص آمن بها، ورحلة ساعدت
                    على تحويلها إلى واقع.
                </p>
            </div>
        </section>
    );
}
