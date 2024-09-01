import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Prev from "../../assets/svg/tips/Prev.svg?react";
import Next from "../../assets/svg/tips/Next.svg?react";
import data from "../../assets/data/tips.json";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const splideRef = React.useRef(null);

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
      className="mt-[32px]"
      ref={splideRef}
      hasTrack={false}
      options={{
        speed: 1000,
        height: "370px",
        width: "100%",
        type: "loop",
        perPage: 3,
        perMove: 1,
        gap: "32px",

        pagination: false,
        arrows: false,
      }}
      aria-label="My Images"
    >
      <button
        className="custom-controls absolute z-10 left-[-24px] flex bottom-1/2 justify-center items-center h-[48px] w-[48px] rounded-full shadow-xl bg-white text-[#E89F71] hover:bg-[#E89F71] hover:text-white transition-all	duration-200	ease-in-out"
        onClick={() => splideRef.current?.go("<")}
      >
        <Prev />
      </button>
      <button
        className="custom-controls absolute z-10 right-[-24px] bottom-1/2 flex justify-center items-center h-[48px] w-[48px] rounded-full shadow-xl bg-white text-[#E89F71] hover:bg-[#E89F71] hover:text-white transition-all	duration-200	ease-in-out"
        onClick={() => splideRef.current?.go(">")}
      >
        <Next />
      </button>

      <SplideTrack className=" w-full h-[440px]">
        {data.map((item) => (
          <SplideSlide key={item.title} className="">
            <div className="flex flex-col h-[370px] hover:shadow-lg transition-shadow duration-300">
              <img src={item.img} className="w-full h-[251px] object-cover" />
              <section className="flex flex-col p-[16px] gap-2">
                <title className="flex font-semibold text-[24px] text-[#3A3A3A] leading-[28.8px]">
                  {item.title}
                </title>
                <span className="flex font-normal text-[14px] text-[#898989] leading-[21px]">
                  {item.date}
                </span>
              </section>
            </div>
          </SplideSlide>
        ))}
      </SplideTrack>

      <div className="custom-pagination justify-center flex flex-row gap-[20px]">
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
    </Splide>
  );
};

export default Slider;
