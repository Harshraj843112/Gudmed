// OurClient.js
import React from 'react';
import Slider from "react-slick";
import AiimsDelhi from "../img/AIIMS_New_Delhi.png";
import Sharda from "../img/sharda.jpg";
import Amazon from "../img/Amazon.png";
import Patna from "../img/Aiims Patna.png";
import Appolo from "../img/Apollo.png";
import GangaRam from "../img/GangaRam.png";
import RedClif from "../img/RadClif.png";
import Jodhpur from "../img/Jodhpur.png";
import Rishikesh from "../img/Rishikesh.png";
import Psri from "../img/Psri.png";

// Reusable Component for Logo Items
const ClientLogo = ({ src, alt }) => (
  <div className="flex justify-center items-center mx-auto w-32 h-32 lg:w-40 lg:h-40">
    <img src={src} alt={alt} className="object-contain w-full h-full" />
  </div>
);

const OurClient = () => {
  // Carousel settings
  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ]
  };

  return (
    <div className="bg-white py-10">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-extrabold tracking-wide mb-4">
          <span className="text-customGreen mr-2">Our</span>
          <span className="text-customBlueDark">Clientele</span>
        </h2>
      </div>

      {/* Carousel for Client Logos */}
      <div className="w-11/12 mx-auto">
        <Slider {...settings}>
          {/* Client Logos in Carousel */}
          <ClientLogo src={AiimsDelhi} alt="AIIMS Delhi" />
          <div className="flex flex-col items-center">
            <p className="text-3xl font-semibold mb-4 text-center border-4 border-gray-600 p-4">
              <span className="text-customBlueDark"></span>
              <span className="text-customGreen"> </span>
            </p>
            <ClientLogo src={Amazon} alt="Amazon Pharmacy" />
          </div>
          <ClientLogo src={Patna} alt="AIIMS Patna" />
          <ClientLogo src={Psri} alt="PSRI Hospital" />
          <ClientLogo src={Appolo} alt="Apollo Hospital" />
          <ClientLogo src={GangaRam} alt="Sir Ganga Ram Hospital" />
          <ClientLogo src={Jodhpur} alt="AIIMS Jodhpur" />
          <ClientLogo src={Sharda} alt="Sharda Hospital" />
          <ClientLogo src={RedClif} alt="Redcliffe Diagnostics" />
          <ClientLogo src={Rishikesh} alt="AIIMS Rishikesh" />
        </Slider>
      </div>
    </div>
  );
};

export default OurClient;