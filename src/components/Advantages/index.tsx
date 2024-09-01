import React from "react";
import Quality from "../../assets/svg/advantages/Quality.svg?react";
import Protection from "../../assets/svg/advantages/Protection.svg?react";
import Shipping from "../../assets/svg/advantages/Shipping.svg?react";
import Support from "../../assets/svg/advantages/Support.svg?react";

const Advantages: React.FC = () => {
  return (
    <ul className="flex mt-[862px] flex-row justify-between">
      <li className="flex flex-row p-[22px] pr-0 gap-[24px] items-center">
        <Quality />
        <div className="flex flex-col gap-[2px]">
          <h5 className="text-[#3A3A3A] font-semibold text-[18px] leading-[27px]">
            High Quality
          </h5>
          <span className="text-[#898989] font-medium text-[16px] leading-[24px]">
            crafted from top materials
          </span>
        </div>
      </li>
      <li className="flex flex-row p-[22px] pr-0 gap-[24px] items-center">
        <Protection />
        <div className="flex flex-col gap-[2px]">
          <h5 className="text-[#3A3A3A] font-semibold text-[18px] leading-[27px]">
            Warrany Protection
          </h5>
          <span className="text-[#898989] font-medium text-[16px] leading-[24px]">
            Over 2 years
          </span>
        </div>
      </li>
      <li className="flex flex-row p-[22px] pr-0 gap-[24px] items-center">
        <Shipping />
        <div className="flex flex-col gap-[2px]">
          <h5 className="text-[#3A3A3A] font-semibold text-[18px] leading-[27px]">
            Free Shipping
          </h5>
          <span className="text-[#898989] font-medium text-[16px] leading-[24px]">
            Order over 150 $
          </span>
        </div>
      </li>
      <li className="flex flex-row p-[22px] pr-0 gap-[24px] items-center">
        <Support />
        <div className="flex flex-col gap-[2px]">
          <h5 className="text-[#3A3A3A] font-semibold text-[18px] leading-[27px]">
            24 / 7 Support
          </h5>
          <span className="text-[#898989] font-medium text-[16px] leading-[24px]">
            Dedicated support
          </span>
        </div>
      </li>
    </ul>
  );
};

export default Advantages;
