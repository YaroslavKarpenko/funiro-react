import React from "react";
import TopSlider from "./TopSlider";

const MainBlock: React.FC = () => {
  return (
    <div className="flex relative mx-[-100px] mt-[-85px] z-0 ">
      <div className="flex bg-[#FCF8F3] absolute top-0 left-0 h-[774px] w-full ">
        <div className="flex bg-[#F9F1E7] w-2/3 h-full z-1"></div>
        <div className="flex flex-col top-[141px] left-[100px] w-[494px] h-[553px] bg-white  bg-opacity-[72%] backdrop-blur-md z-10 absolute p-[60px]">
          <h1 className="flex font-bold text-[56px] text-[#3A3A3A] leading-[67.2px]">
            High-Quality Furniture Just For You
          </h1>
          <p className="flex w-[357px] mt-[16px] font-medium text-[20px] text-[#898989] leading-[30px]">
            Our furniture is made from selected and best quality materials that
            are suitable for your dream home
          </p>
          <button className="flex mt-[48px] px-[140px] py-[24px] font-semibold text-[20px] leading-[30px] text-white justify-center items-center bg-[#E89F71] hover:bg-[#F6DDCC] hover:text-[#E89F71] transition-all	duration-200	ease-in-out">
            Shop Now
          </button>
        </div>
        <div className="flex absolute bottom-0 z-0 ">
          <TopSlider />
        </div>
      </div>
    </div>
  );
};

export default MainBlock;
