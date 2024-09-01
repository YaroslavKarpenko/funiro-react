import React from "react";
import Slider from "./Slider";
const Rooms: React.FC = () => {
  return (
    <div className="mt-[44px] mx-[-100px] relative flex h-[670px]">
      <div className="absolute w-full h-full bg-[#FCF8F3] z-0"></div>
      <div className="flex flex-row ml-[100px] gap-[86px] items-center z-10">
        <div className="flex flex-col w-[378px] gap-[24px] items-start">
          <section className="flex flex-col gap-[8px]">
            <h2 className="font-bold text-[#3A3A3A] text-[40px] leading-[48px]">
              50+ Beautiful rooms inspiration
            </h2>
            <span className="font-medium text-[#616161] text-[16px] leading-[24px]">
              Our designer already made a lot of beautiful prototipe of rooms
              that inspire you
            </span>
          </section>
          <button className="flex justify-center items-center px-[40px] py-[12px] bg-[#E89F71] text-white text-[16px] font-semibold leading-[24px]">
            Explore More
          </button>
        </div>
        <Slider />
      </div>
    </div>
  );
};

export default Rooms;
