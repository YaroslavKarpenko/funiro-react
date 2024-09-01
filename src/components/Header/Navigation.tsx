import React from "react";
import ArrowDown from "../../assets/svg/header/ArrowDown.svg?react";

const Navigation: React.FC = () => {
  return (
    <nav className="flex flex-row items-center gap-[40px]">
      <a className="flex leading-[29px] font-bold text-[24px] text-black hover:text-[#3A3A3A] cursor-pointer transition-all	duration-200	ease-in-out">
        Funiro.
      </a>
      <ul className="flex flex-row gap-[40px] text-[#3A3A3A] items-center w-[336px] h-[24px] text-[16px] font-medium">
        <li className="flex flex-row gap-[8px] items-center hover:text-[#e89f71] cursor-pointer transition-all	duration-200	ease-in-out">
          <a className="flex">Products</a>
          <ArrowDown />
        </li>
        <li className="flex flex-row gap-[8px] items-center hover:text-[#e89f71] cursor-pointer transition-all	duration-200	ease-in-out">
          <a className="flex">Rooms</a>
          <ArrowDown />
        </li>
        <li className="hover:text-[#e89f71] cursor-pointer transition-all	duration-200	ease-in-out">
          <a className="flex">Inspirations</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
