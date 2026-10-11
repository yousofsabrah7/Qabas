
import React from "react";

function DoubleCircle({ className = "" }) {
    return (
        <div
            className={`
        size-40 sm:size-60 lg:size-89
        rounded-full
        border-[3px] border-yellow-normal
        flex items-center justify-center
        opacity-40
        pointer-events-none
        ${className}
      `}
        >
            <div
                className="
          size-28 sm:size-44 lg:size-67
          rounded-full
          border-[3px] border-yellow-normal
        "
            />
        </div>
    );
}

export default DoubleCircle;
