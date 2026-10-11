
import React from "react";
import DoubleCircle from "./DoubleCircle";

const StageImage = ({
    image,
    imageAlt,
    imageConfig,
}) => {
    const {
        containerClass = "",
        imageClass = "",
        circles = [],
    } = imageConfig || {};

    return (
        <div
            className={`
        relative
        w-full lg:w-1/2
        flex items-center justify-center
        p-6 sm:p-10 lg:p-14
        min-h-[300px] sm:min-h-[400px]
        ${containerClass}
      `}
        >
            {/* Decorative Circles */}
            {circles.map((circleClass, index) => (
                <DoubleCircle
                    key={index}
                    className={circleClass}
                />
            ))}

            {/* Stage Image */}
            <img
                src={image}
                alt={imageAlt}
                className={imageClass}
            />
        </div>
    );
};

export default StageImage;
