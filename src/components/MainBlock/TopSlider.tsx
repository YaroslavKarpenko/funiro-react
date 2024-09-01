import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

import data from "../../assets/data/top-slider.json";

import Prev from "../../assets/svg/top-slider/Prev.svg?react";
import Next from "../../assets/svg/top-slider/Next.svg?react";
import Arrow from "../../assets/svg/top-slider/Arrow.svg?react";

const TopSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const splideRef = React.useRef(null);
  const formattedFullPrice = (price: number) => {
    return "Rp " + price.toLocaleString("de-DE");
  };

  React.useEffect(() => {
    const splideInstance = splideRef.current?.splide;

    if (splideInstance) {
      splideInstance.on("move", () => {
        const slideIndex = splideInstance.index % data.length;
        setCurrentSlide(slideIndex);
      });
    }
  }, []);

  return (
    <Splide
      ref={splideRef}
      hasTrack={false}
      options={{
        speed: 1000,
        type: "loop",
        perPage: 1,
        perMove: 1,
        gap: "32px",
        padding: { left: "406px", right: "100px" },
        pagination: false,
        arrows: false,
        updateOnMove: true,
      }}
      aria-label="My Favorite Images"
    >
      <div className="absolute top-[-70px] right-[100px] flex flex-row items-center gap-[490px]">
        <div className="custom-pagination flex flex-row gap-[20px]">
          {data.map((_, index) => (
            <button
              key={index}
              className={`relative h-[11px] w-[11px] rounded-full flex items-center justify-center ${
                currentSlide === index
                  ? "h-[11px] w-[11px] bg-[#E89F71] before:absolute before:content-[''] before:w-[27px] before:h-[27px] before:border before:border-[#E89F71] before:rounded-full before:top-[-8px] before:left-[-8px]"
                  : "bg-[#D8D8D8]"
              }`}
              onClick={() => splideRef.current.splide.go(index)}
            ></button>
          ))}
        </div>
        <div className="custom-controls flex flex-row gap-2">
          <button
            className="flex justify-center items-center h-[48px] w-[48px] rounded-full bg-[#F6DDCC] text-[#E89F71] hover:bg-[#E89F71] hover:text-[#F6DDCC] transition-all	duration-200	ease-in-out"
            onClick={() => splideRef.current?.go("<")}
          >
            <Prev />
          </button>
          <button
            className="flex justify-center items-center h-[48px] w-[48px] rounded-full bg-[#F6DDCC] text-[#E89F71] hover:bg-[#E89F71] hover:text-[#F6DDCC] transition-all	duration-200	ease-in-out"
            onClick={() => splideRef.current?.go(">")}
          >
            <Next />
          </button>
        </div>
      </div>

      <SplideTrack>
        {data.map((item, index) => (
          <SplideSlide className="relative" key={item.title}>
            <img src={item.img} className="w-full h-[553px] object-cover" />
            {currentSlide === index && (
              <a
                href="#"
                className="absolute bottom-[40px] right-[40px] flex flex-col w-[294px] h-[148px] bg-white p-[24px] bg-opacity-[72%] backdrop-blur-lg hover:bg-opacity-100 transition-all	duration-200	ease-in-out cursor-pointer"
              >
                <h3 className="flex font-semibold text-[28px] text-[#3A3A3A] leading-[33.6px]">
                  {item.title}
                </h3>
                <span className="flex mt-[4px] font-medium text-[16px] text-[#616161] leading-[24px]">
                  {item.description}
                </span>
                <span className="flex mt-[8px] font-semibold text-[20px] text-[#3A3A3A] leading-[30px] justify-between items-center">
                  {formattedFullPrice(item.price)}
                  <Arrow />
                </span>
              </a>
            )}
          </SplideSlide>
        ))}
      </SplideTrack>
    </Splide>
  );
};

export default TopSlider;
