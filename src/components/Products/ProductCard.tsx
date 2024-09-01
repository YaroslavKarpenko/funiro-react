import React from "react";
import Share from "../../assets/svg/product/Share.svg?react";
import Like from "../../assets/svg/product/Like.svg?react";
interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  isDiscount: boolean;
  discount: number;
  price: number;
  isNew: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  description,
  isDiscount,
  discount,
  price,
  isNew,
}) => {
  const formattedFullPrice = price.toLocaleString("de-DE");
  const formattedDiscountPrice = (price * (1 - discount / 100)).toLocaleString(
    "de-DE"
  );

  return (
    <li className="group flex flex-col h-[446px] bg-[#F4F5F7] relative ">
      <div className="hidden absolute z-10 w-full h-full bg-[#3A3A3A] bg-opacity-[72%] group-hover:flex transition-all	duration-200	ease-in-out justify-center items-center">
        <div className="flex flex-col w-[202px] h-[48px] gap-6">
          <button className="w-full py-3 bg-white font-semibold text-[#E89F71] text-[16px] leading-[24px] justify-center items-center hover:bg-[#E89F71] hover:text-white transition-all	duration-200	ease-in-out">
            Add to cart
          </button>
          <div className="flex flex-row justify-around ">
            <a className="flex flex-row gap-2 font-semibold text-white hover:text-[#E89F71] text-[16px] leading-[24px] items-center cursor-pointer transition-all	duration-200	ease-in-out">
              <Share className="" />
              Share
            </a>
            <a className="flex flex-row gap-2 font-semibold text-white hover:text-[#E89F71] text-[16px] leading-[24px] items-center cursor-pointer transition-all	duration-200	ease-in-out">
              <Like />
              Like
            </a>
          </div>
        </div>
      </div>
      {/* <div className="hidden absolute z-10 group-hover:flex"> </div> */}
      <div className="flex h-[301px] w-full relative">
        <img
          className="absolute left-0 top-0 w-full h-full z-0 object-cover"
          src={`src/assets/img/products/${id}.png`}
        />
        <div className="flex flex-row gap-[12px] absolute right-[24px] top-[24px]">
          {isDiscount && (
            <div className=" flex h-[48px] w-[48px] rounded-full bg-[#E97171] text-white font-medium text-[16px] leading-[24px] justify-center items-center">{`-${discount}%`}</div>
          )}
          {isNew && (
            <div className=" flex h-[48px] w-[48px] rounded-full bg-[#2EC1AC] text-white font-medium text-[16px] leading-[24px] justify-center items-center">
              New
            </div>
          )}
        </div>
      </div>
      <section className="flex flex-col mt-[16px] ml-[16px] gap-[8px]">
        <title className="flex text-[#3A3A3A] font-semibold text-[24px] leading-[28.8px]">
          {name}
        </title>
        <span className=" text-[#898989] font-medium text-[16px] leading-[24px]">
          {description}
        </span>
        <p className="flex flex-row gap-[16px] items-baseline">
          {isDiscount ? (
            <>
              <span className="flex text-[#3A3A3A] font-semibold text-[20px] leading-[30px]">
                Rp {formattedDiscountPrice}
              </span>
              <span className="flex text-[#B0B0B0] font-normal text-[16px] leading-[24px] line-through">
                Rp {formattedFullPrice}
              </span>
            </>
          ) : (
            <span className="flex text-[#3A3A3A] font-semibold text-[20px] leading-[30px]">
              Rp {formattedFullPrice}
            </span>
          )}
        </p>
      </section>
    </li>
  );
};

export default ProductCard;
