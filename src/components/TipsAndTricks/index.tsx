import React from "react";
import Slider from "./Slider";

const TipsAndTricks: React.FC = () => {
  return (
    <div className="flex flex-col mt-[44px]">
      <h3 className="flex justify-center items-center font-bold text-[40px] leading-[48px] text-[#3A3A3A]">
        Tips & Tricks
      </h3>
      <Slider />
    </div>
  );
};

export default TipsAndTricks;
