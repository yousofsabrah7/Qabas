
import React from "react";
import Circle from "./Circle";

const Stage = ({
    number,
    phase,
    title,
    duration,
    subtitle,
    description,
    listTitle,
    learn = [],
    theme = "light",
    width = "w-full lg:w-1/2",
}) => {
    const isDark = theme === "dark";

    return (
        <div
            className={`
        flex flex-col
        gap-6 lg:gap-8
        justify-center lg:justify-between
        p-6 sm:p-10 lg:p-8
        ${width}
        ${isDark ? "text-cream-normal" : "text-blue-normal"}
      `}
        >
            {/* Heading */}
            <div className="head w-fit text-right">
                <h2
                    className={`
            text-base sm:text-lg lg:text-xl
            ${isDark ? "text-cream-normal/70" : "text-gray-normal"}
          `}
                >
                    {phase}
                </h2>

                <h3
                    className="
            text-3xl sm:text-4xl lg:text-5xl
            flex items-center gap-4
            font-semibold
          "
                >
                    <span className="text-yellow-normal">
                        {number}
                    </span>
                    {title}
                </h3>
            </div>

            {/* Duration */}
            {duration && (
                <p className="text-xl sm:text-2xl lg:text-[32px] font-semibold">
                    {duration}
                </p>
            )}

            {/* Description */}
<p
  className={`
    text-base sm:text-xl lg:text-2xl
    leading-8 lg:leading-10
    ${isDark ? "text-cream-normal" : "text-blue-normal"}
  `}
>
  {subtitle}
  <br />
  {description}
</p>

            {/* Learning List */}
            {learn.length > 0 && (
                <div>
                    <p className="text-xl sm:text-2xl lg:text-[32px] font-semibold">
                        {listTitle}
                    </p>

                    <ul className="flex flex-col gap-3 mt-4">
                        {learn.map((step, index) => (
                            <li
                                key={`${number}-${index}`}
                                className="
                  flex items-start sm:items-center
                  gap-3
                  text-base sm:text-xl lg:text-2xl
                "
                            >
                                <Circle className="size-[14px] shrink-0 mt-1 sm:mt-0" />
                                <span>{step}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Stage;
