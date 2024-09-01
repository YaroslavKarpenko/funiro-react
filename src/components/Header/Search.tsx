import React from "react";
import SearchIcon from "../../assets/svg/header/SearchIcon.svg?react";

const Search: React.FC = () => {
  return (
    <div className="flex flex-row bg-white w-[473px] h-[45px] p-3 gap-[8px] text-[#333333]">
      <SearchIcon className="" />
      <input
        type="text"
        className="flex-grow placeholder-[#616161] text-[14px] focus:outline-none"
        placeholder="Search for minimalist chair"
      />
    </div>
  );
};

export default Search;
