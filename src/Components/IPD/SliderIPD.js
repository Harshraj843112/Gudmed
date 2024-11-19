import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import IPDdischarge1 from '../../img/impdimage1.jpg';
import IPDdischarge2 from '../../img/ipdimage2.jpg';

const images = [IPDdischarge1, IPDdischarge2];

// Custom Previous Arrow Button
const PrevArrow = ({ onClick }) => (
    <div
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 cursor-pointer bg-gray-700 p-3 rounded-full shadow-lg hover:bg-gray-800 transition-colors"
        onClick={onClick}
    >
        <FaArrowLeft className="text-white" size={20} />
    </div>
);

const NextArrow = ({ onClick }) => (
    <div
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 cursor-pointer bg-gray-700 p-3 rounded-full shadow-lg hover:bg-gray-800 transition-colors"
        onClick={onClick}
    >
        <FaArrowRight className="text-white" size={20} />
    </div>
);

const SliderIPD = () => {
    const settings = {
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: false,
        autoplaySpeed: 0,
        arrows: false,
        // nextArrow: <NextArrow />,
        // prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="relative w-full bg-gray-100 rounded-lg overflow-hidden shadow-lg">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="flex items-center justify-center px-4"
                    >
                        <img
                            src={image}
                            alt={`Slider-${index}`}
                            className="w-full object-cover rounded-lg"
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default SliderIPD;
