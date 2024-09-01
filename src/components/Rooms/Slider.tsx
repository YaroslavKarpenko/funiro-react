import React from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import data from "../../assets/data/rooms.json";
import Prev from "../../assets/svg/tips/Prev.svg?react";
import Next from "../../assets/svg/tips/Next.svg?react";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const splideRef = React.useRef(null);
  const forceUpdate = React.useRef(0);

  React.useEffect(() => {
    const splideInstance = splideRef.current?.splide;

    if (splideInstance) {
      splideInstance.on("move", () => {
        const slideIndex = splideInstance.index % data.length;
        setCurrentSlide(slideIndex);
        forceUpdate.current++;
      });
    }
  }, []);

  return (
    <Splide
      ref={splideRef}
      className=""
      hasTrack={false}
      options={{
        focus: "left",
        // cloneStatus: false,
        clones: 1,
        speed: 1000,
        type: "loop",
        width: "876px",
        perPage: 1,
        perMove: 1,
        gap: "24px",
        padding: { right: "472px" },
        pagination: false,
        arrows: false,
      }}
      aria-label="My Images 2"
    >
      <SplideTrack className="">
        {data.map((item, index) => (
          <SplideSlide key={item.id + forceUpdate.current}>
            <img
              src={item.img}
              className={`object-cover transition-all duration-500 ${
                currentSlide === index
                  ? "w-[404px] h-[582px]"
                  : "w-[372px] h-[486px]"
              }`}
            />
          </SplideSlide>
        ))}
      </SplideTrack>

      <button
        className="custom-controls absolute z-10 right-[-24px] bottom-1/2 flex justify-center items-center h-[48px] w-[48px] rounded-full shadow-xl bg-white text-[#E89F71] hover:bg-[#E89F71] hover:text-white transition-all	duration-200	ease-in-out"
        onClick={() => splideRef.current?.go(">")}
      >
        <Next />
      </button>
    </Splide>
  );
};

export default Slider;
