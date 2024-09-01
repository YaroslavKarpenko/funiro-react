import React from "react";
import data from "../../assets/data/products.json";
import ProductCard from "./ProductCard";

const Products: React.FC = () => {
  return (
    <div className="flex flex-col mt-[88px]">
      <h2 className="flex justify-center items-center font-bold text-[#3A3A3A] text-[40px] leading-[48px]">
        Our Products
      </h2>
      <ul className="mt-[32px] grid grid-cols-auto-fill gap-[32px] w-full">
        {data.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </ul>
      <button className="flex w-[245px] h-[48px] px-[15px] py-[12px] border border-[#E89F71] mt-8 mx-auto justify-center items-center font-semibold text-[#E89F71] text-[16px] leading-[24px] hover:bg-[#E89F71] hover:text-white transition-all	duration-200	ease-in-out">
        Show more
      </button>
    </div>
  );
};

export default Products;
