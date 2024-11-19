import React, { useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Slider1 from "../img/slidern2.jpeg";
import Slider2 from "../img/slidern3.png";
import Slider3 from "../img/slidern.jpeg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Slider = ({ onSlideChange }) => {
  const carouselRef = useRef();

  const items = [
    <div className="flex justify-end h-full mr-2 mt-2">
      <img src={Slider1} alt="Slide 1" className="w-[1000px] h-[1000px] object-cover" />
    </div>,
    <div className="flex justify-end h-full mr-6 mt-6">
      <img src={Slider2} alt="Slide 2" className="w-[1000px] h-[1000px] object-cover" />
    </div>,
    <div className="flex justify-end h-full mr-6 mt-6">
      <img src={Slider3} alt="Slide 3" className="w-[1000px] h-[1000px] object-cover" />
    </div>,
  ];



  const carouselSettings = {
    autoPlay: true,
    autoPlayInterval: 2000,
    infinite: true,
    disableButtonsControls: true,
    disableDotsControls: false,
    onSlideChanged: onSlideChange,
  };

  const handleNext = () => {
    carouselRef.current?.slideNext();
  };

  const handlePrev = () => {
    carouselRef.current?.slidePrev();
  };

  return (
    <div className="relative w-full h-[500px]"> {/* Set a height to container */}
      <AliceCarousel ref={carouselRef} {...carouselSettings} items={items} />

      <button
        onClick={handlePrev}
        className="absolute left-2 sm:left-4 top-[400px] transform -translate-y-1/2 bg-customBlue w-12 h-12 sm:w-14 sm:h-14 rounded-full text-white hover:bg-customDark shadow-lg flex items-center justify-center transition-all duration-300 z-50"
      >
        <FaChevronLeft size={24} />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-2 sm:right-4 top-[400px]  transform -translate-y-1/2 bg-customBlue w-12 h-12 sm:w-14 sm:h-14 rounded-full text-white hover:bg-customDark shadow-lg flex items-center justify-center transition-all duration-300 z-50"
      >
        <FaChevronRight size={24} />
      </button>
    </div>
  );
};

export default Slider;