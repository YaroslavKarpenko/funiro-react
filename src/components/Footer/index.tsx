import React from "react";
import Location from "../../assets/svg/footer/Location.svg?react";
import Phone from "../../assets/svg/footer/Phone.svg?react";
import Subscribe from "../../assets/svg/footer/Subscribe.svg?react";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col mt-[87px]">
      <div className="bg-[#D8D8D8] h-[1px]"></div>
      <section className="flex flex-row mt-[31px] h-[336px] py-[50px] font-normal text-[16px] text-[#616161] leading-[24px] justify-between">
        <div className="flex flex-col w-[249px] h-[237px] gap-[16px]">
          <a className="font-bold text-[24px] text-black leading-[29.02px] cursor-pointer">
            Funiro.
          </a>
          <p>
            Worldwide furniture store since 2020. We sell over 1000+ branded
            products on our website
          </p>
          <a href="#" className="flex flex-row cursor-pointer gap-[8px]">
            <Location /> Sawojajar Malang, Indonesia
          </a>
          <a href="#" className="flex flex-row cursor-pointer gap-[8px]">
            <Phone /> +6289 456 3455
          </a>
          <a href="#" className=" cursor-pointer">
            www.funiro.com
          </a>
        </div>
        <div className="flex flex-col w-[104px] h-[229px] gap-[16px]">
          <a className="font-bold text-[24px] text-black leading-[29.02px] cursor-pointer">
            Menu
          </a>
          <a href="#" className=" cursor-pointer">
            Products
          </a>
          <a>Rooms</a>
          <a href="#" className=" cursor-pointer">
            Inspirations
          </a>
          <a href="#" className=" cursor-pointer">
            About us
          </a>
          <a href="#" className=" cursor-pointer">
            Terms & Policy
          </a>
        </div>{" "}
        <div className="flex flex-col w-[93px] h-[189px] gap-[16px]">
          <a className="font-bold text-[24px] text-black leading-[29.02px] cursor-pointer">
            Account
          </a>
          <a href="#" className=" cursor-pointer">
            My Account
          </a>
          <a href="#" className=" cursor-pointer">
            Checkout
          </a>
          <a href="#" className=" cursor-pointer">
            My Cart
          </a>
          <a href="#" className=" cursor-pointer">
            My catalog
          </a>
        </div>{" "}
        <div className="flex flex-col w-[180px] h-[149px] gap-[16px]">
          <h3 className="font-bold text-[24px] text-black leading-[29.02px]">
            Stay Connected
          </h3>
          <a href="#" className=" cursor-pointer">
            Facebook
          </a>
          <a href="#" className=" cursor-pointer">
            Instagram
          </a>
          <a href="#" className=" cursor-pointer">
            Twitter
          </a>
        </div>
        <div className="flex flex-col w-[292px] h-[90px] gap-[16px]">
          <h3 className="font-bold text-[24px] text-black leading-[29.02px]">
            Stay Updated
          </h3>
          <div className="flex flex-row gap-[4px]">
            <input
              className=" flex-grow placeholder-[#616161] text-[14px] focus:outline-none bg-[#F4F5F7] py-[10px] px-[12px]"
              placeholder="Enter your email"
            />
            <button className="flex justify-center items-center w-[46px] h-[45px]  bg-[#E89F71]">
              <Subscribe />
            </button>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
