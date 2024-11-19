import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; // Import carousel styles
import OfferContentSection from './Common/OfferContentSection';
import SectionImg from "../img/section-img.png";
import BreadImage from "../img/bread-bg.jpg"; // Ensure the image path is correct
import CentralHospitalLogo from "../img/client1.png"; // Your logo images
import PanaceaClinicLogo from "../img/client2.png";
import CardiacScienceLogo from "../img/client3.png";
import PharmacyLogo from "../img/client4.png";
import PharmacyLogoS from "../img/client5.png";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        partialVisibilityGutter: 40,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        partialVisibilityGutter: 30,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        partialVisibilityGutter: 30,
    },
};

const ContactFormSection = () => {
    return (
        <div>
        <div className="relative py-12 md:py-16 lg:py-24 h-40 "> {/* Removed h-7 to allow content growth */}
            {/* Background Image Layer */}
            <div
                className="absolute inset-0 "
                style={{
                    backgroundImage: `url(${BreadImage})`, // Ensure you use the correct background image
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'repeat',
                }}
            ></div>

            {/* Background Color Overlay */}
            <div className="absolute inset-0 bg-blue-600 opacity-90 "></div> {/* Adjust the color and opacity */}

            {/* Logos Section */}
            <div className="relative z-10 container mx-auto flex justify-center items-center py-8 h-7"> {/* Adjusted height for better spacing */}
                <div className="flex gap-12 items-center "> {/* Reduced gap for better alignment */}
                    <img src={CentralHospitalLogo} alt="Central Hospital" className="h-20" />
                    <img src={PanaceaClinicLogo} alt="Panacea Clinic" className="h-20" />
                    <img src={CardiacScienceLogo} alt="Cardiac Science" className="h-20" />
                    <img src={PharmacyLogo} alt="Pharmacy" className="h-20" />
                    <img src={PharmacyLogoS} alt="PharmacyLogoS" className="h-20" />
                </div>
            </div>

            
            
        </div>
      
        </div>
    );
};

export default ContactFormSection;
