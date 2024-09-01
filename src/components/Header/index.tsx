import React from "react";
import Navigation from "./Navigation";
import Search from "./Search";
import RightNav from "./RightNav";

const Header: React.FC = () => {
  return (
    <header className="flex flex-row gap-[40px] h-[45px] mt-[40px] z-10 justify-between">
      <Navigation />
      <Search />
      <RightNav />
    </header>
  );
};

export default Header;
