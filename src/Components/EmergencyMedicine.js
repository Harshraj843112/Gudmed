import React, { useRef } from 'react';
import BreadImage from '../img/call-bg.jpg'; // Adjust the path according to your project structure
import OfferContentSection from './Common/OfferContentSection';
import { BiArrowBack } from "react-icons/bi";

const EmergencyMedicine = () => {
    const sectionRef = useRef(null); // Define the sectionRef here
    const showButtons = true; // Define this variable to control button visibility

    return (
        <div ref={sectionRef} className="relative py-12 md:py-16 lg:py-24 mt-20">
            {/* Background Image Layer */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `url(${BreadImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-customBlue opacity-80"></div>

            {/* Content Layer */}
            <div className="relative z-10 text-white text-center flex flex-col justify-center items-center h-full">
                <OfferContentSection
                    title="Do you need Emergency Medical <br> Care? Call @ 1234 56789"
                    className="text-white" // Ensure the text color is passed here
                />
                <p className="text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porttitor <br />
                    dictum turpis nec gravida.
                </p>

                {/* Button Section */}
                <div className={`w-full duration-700 delay-400 flex flex-row md:flex-row gap-4 justify-center items-center mt-8 transition-transform transform ${showButtons ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}>
                    <button className="relative flex h-12 md:h-[50px] w-full md:w-48 items-center justify-center overflow-hidden bg-white text-customBlue shadow-2xl transition-all duration-300 rounded-lg group hover:bg-customBlue hover:text-white p-7">
                        <span className="relative z-10 font-semibold">Contact Now</span>
                        <div className="absolute h-0 w-0 rounded-full bg-customDark transition-all duration-500 ease-out group-hover:h-56 group-hover:w-56"></div>
                    </button>

                    <button className="relative flex h-12 md:h-[50px] w-full md:w-48 items-center justify-center overflow-hidden bg-customBlue text-white shadow-2xl transition-all duration-300 rounded-lg group hover:bg-white hover:text-customBlue p-7">
                        <span className="relative z-10 font-semibold mr-2">Learn More</span>
                        <span className="relative z-10 transition-transform duration-300 ease-out transform group-hover:translate-x-2">
                            <BiArrowBack className="rotate-180" /> {/* Rotated arrow to point forward */}
                        </span>
                        <div className="absolute h-0 w-0 rounded-full bg-customBlue transition-all duration-500 ease-out group-hover:h-56 group-hover:w-56"></div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EmergencyMedicine;
