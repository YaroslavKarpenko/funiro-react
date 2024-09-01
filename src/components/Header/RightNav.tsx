import React from "react";
import Heart from "../../assets/svg/header/Heart.svg?react";
import Cart from "../../assets/svg/header/Cart.svg?react";

const RightNav: React.FC = () => {
  return (
    <nav className="flex flex-row gap-[32px] items-center">
      <a className="flex justify-center items-center text-[#3A3A3A] hover:hover:text-[#e89f71] cursor-pointer transition-all	duration-200	ease-in-out">
        <Heart />
      </a>
      <a className="flex justify-center items-center text-[#3A3A3A] hover:hover:text-[#e89f71] cursor-pointer transition-all	duration-200	ease-in-out">
        <Cart />
      </a>
      <a className="flex justify-center items-center cursor-pointer">
        <img src="src\assets\svg\header\Ellipse 2.png" />
      </a>
    </nav>
  );
};

export default RightNav;
