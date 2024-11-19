import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images
const images = [
    require('../../img/processstep11.jpeg'),
    require('../../img/processstep21.jpeg'),
    require('../../img/processstep31.jpeg'),
    require('../../img/processstep41.png'),
    require('../../img/processstep51.png'),
    require('../../img/processstep61.png'),
    require('../../img/processstep71.png'),
    require('../../img/processstep81.png')
];

const ImageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 6,  // Show 4 images at once
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        centerMode: true,  // For centered images
        centerPadding: "10px",  // Reduced padding between images
    };

    return (
        <div className="mb-8">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="px-1">  {/* Reduced padding for image spacing */}
                        <img 
                            src={image} 
                            alt={`Slide ${index + 1}`} 
                            className="w-full h-80 object-contain rounded-lg"
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageSlider;
