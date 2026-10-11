
import React from "react";
import Circle from "./Circle";

const StageTimeline = ({ timeline }) => {
  const {
    line,
    position,
    dotPosition,
    endImage,
    endPosition = "left-0",
    clipBottom = false,
  } = timeline;

  return (
    <div
      aria-hidden="true"
      className={`
        hidden lg:block
        absolute top-0
        w-fit h-full
        pointer-events-none
        z-20
        ${position}
      `}
    >
      {/* Curved Line */}
      <img
        src={line}
        alt=""
        className="block w-auto h-full max-w-none"
        style={
          clipBottom
            ? { clipPath: "inset(0 0 15% 0)" }
            : undefined
        }
      />

      {/* Gold Point */}
      <Circle
        className={`
          absolute
          size-[22px] xl:size-[30px]
          -translate-x-1/2
          -translate-y-1/2
          z-10
          ${dotPosition}
        `}
      />

      {/* Timeline Ending */}
      {endImage && (
        <img
          src={endImage}
          alt=""
          className={`
            absolute
            w-[50px]
            h-auto
            z-20
            ${clipBottom ? "bottom-[12%]" : "bottom-0"}
            ${endPosition}
          `}
        />
      )}
    </div>
  );
};

export default StageTimeline;
