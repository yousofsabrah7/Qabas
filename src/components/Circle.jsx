
import React from "react";

const Circle = ({ className = "" }) => {
    return (
        <div
            className={`
        rounded-full
        bg-yellow-normal
        shrink-0
        ${className}
      `}
        />
    );
};

export default Circle;
