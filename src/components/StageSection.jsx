
import React from "react";
import Stage from "./Stage";
import StageImage from "./StageImage";
import StageTimeline from "./StageTimeLine";

const StageSection = ({ stage }) => {
    const isDark = stage.theme === "dark";
    const imageOnRight = stage.imagePosition === "right";

    return (
        <section
            className={`
        relative
        flex flex-col lg:flex-row
        min-h-[697px]
        overflow-hidden
        ${isDark
                    ? "bg-[#14223B]"
                    : "bg-cream2-normal"
                }
      `}
        >
            {/* Curved Timeline */}
            <StageTimeline timeline={stage.timeline} />

            {imageOnRight ? (
                <>
                    {/* Image first */}
                    <StageImage {...stage} />

                    {/* Text second */}
                    <Stage
                        {...stage}
                        width="w-full lg:w-[40%]"
                    />
                </>
            ) : (
                <>
                    {/* Text first */}
                    <Stage {...stage} />

                    {/* Image second */}
                    <StageImage {...stage} />
                </>
            )}
        </section>
    );
};

export default StageSection;
