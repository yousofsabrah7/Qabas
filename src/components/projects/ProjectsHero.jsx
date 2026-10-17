
import decorDetail from "../../assets/projects/decor-detail.svg";
import Circle from "../Circle";

const stats = [
  {
    number: "+70",
    label: "مبادرة ومشروع",
  },
  {
    number: "6",
    label: "مجالات",
  },
  {
    number: "+20",
    label: "مشروع محتضن",
  },
];

export default function ProjectsHero() {
  return (
    <section
      dir="rtl"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#14223B]
        text-[#F8F6F0]
      "
    >
      {/* Decorative Circle */}
      <Circle
        className="
          pointer-events-none
          absolute
          bottom-2
          left-[45%]
          z-20
          size-5
          sm:size-6
          lg:size-8
        "
      />

      <div
        className="
          relative
          mx-auto
          flex
          w-full
          max-w-[1440px]
          flex-col
          md:min-h-[500px]
          md:flex-row
          lg:min-h-[600px]
        "
      >
        {/* RIGHT SIDE - CONTENT */}
        <div
          className="
            relative
            z-10
            flex
            w-full
            flex-col
            justify-center
            px-5
            pb-5
            pt-12
            text-right

            sm:px-8
            sm:pt-14

            md:w-[52%]
            md:shrink-0
            md:justify-evenly
            md:py-10
            md:pr-6
            md:pl-3

            lg:w-1/2
            lg:py-8
            lg:pr-6
            lg:pl-10
          "
        >
          {/* Small Heading */}
          <span
            className="
              mb-3
              text-[26px]
              font-bold
              text-[#B8943F]

              sm:text-[32px]
              md:text-[30px]
              lg:text-[40px]
            "
          >
            مشاريع قبس
          </span>

          {/* Main Heading */}
          <h1
            className="
              text-[34px]
              font-bold
              leading-[1.3]
              text-[#F8F6F0]

              sm:text-[42px]
              md:text-[36px]
              lg:text-[48px]
              xl:text-[56px]
            "
          >
            من شرارات صغيرة...
            <br />
            <span className="text-[#B8943F]">
              إلى مشاريع حقيقية.
            </span>
          </h1>

          {/* Description */}
          <p
            className="
              mt-5
              max-w-[500px]
              text-[15px]
              leading-[1.9]
              text-[#F8F6F0]

              sm:text-[17px]
              md:text-[15px]
              lg:text-[18px]
              xl:text-[20px]
            "
          >
            هنا تبدأ حكايات المشاريع التي احتضنتها قبس.
            <br className="hidden sm:block" />
            اكتشف أفكارًا تحولت إلى مشاريع، وتعرّف على
            أصحابها وما يصنعونه.
          </p>

          {/* Statistics */}
          <div
            className="
              mt-8
              flex
              w-full
              items-center
              justify-between

              sm:mt-10
              md:mt-7
              lg:mt-9
            "
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="
                  flex
                  min-w-0
                  flex-1
                  items-center
                "
              >
                <div
                  className="
                    flex
                    min-w-0
                    flex-1
                    flex-col
                    items-center
                    text-center
                  "
                >
                  <span
                    className="
                      text-[26px]
                      font-bold
                      leading-none
                      text-[#B8943F]

                      sm:text-[34px]
                      md:text-[28px]
                      lg:text-[38px]
                      xl:text-[48px]
                    "
                  >
                    {stat.number}
                  </span>

                  <span
                    className="
                      mt-2
                      text-[11px]
                      leading-snug
                      text-[#F8F6F0]

                      sm:text-[14px]
                      md:text-[12px]
                      lg:text-[17px]
                      xl:text-[20px]
                    "
                  >
                    {stat.label}
                  </span>
                </div>

                {index < stats.length - 1 && (
                  <div
                    className="
                      h-[42px]
                      w-px
                      shrink-0
                      bg-[#B8943F]

                      sm:h-[52px]
                      md:h-[48px]
                      lg:h-[65px]
                      xl:h-[72px]
                      xl:w-[2px]
                    "
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* LEFT SIDE - ORIGINAL FIGMA IMAGE */}
        <div
          className="
            relative
            flex
            w-full
            min-w-0
            items-center
            justify-center
            px-4
            pb-8
            pt-4

            sm:px-8

            md:w-[48%]
            md:flex-1
            md:px-2
            md:py-6

            lg:w-1/2
            lg:px-3
          "
        >
          <img
            src={decorDetail}
            alt="مشاريع قبس من الفكرة إلى المشروع"
            className="
              block
              h-auto
              w-full
              max-h-[350px]
              object-contain
              object-center

              sm:max-h-[420px]
              md:max-h-[470px]
              lg:max-h-[560px]
            "
          />
        </div>
      </div>
    </section>
  );
}
