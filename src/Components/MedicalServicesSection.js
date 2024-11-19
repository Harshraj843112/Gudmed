import React, { useEffect, useState } from "react";
import Slider from "./Silder"; // Update this path based on your structure

const MedicalServicesSection = () => {
  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [showProSlider, setShowProSlider] = useState(false);

  const resetAnimations = () => {
    setShowText1(false);
    setShowText2(false);
    setShowButtons(false);

    // Adding slight delays for better sequencing
    setTimeout(() => setShowText1(true), 500);
    setTimeout(() => setShowText2(true), 1000);
    setTimeout(() => setShowButtons(true), 1500);
  };

  useEffect(() => {
    resetAnimations(); // Call resetAnimations when the component mounts
  }, []);

  const toggleProSlider = () => {
    setShowProSlider(!showProSlider);
  };

  return (
    <div className="relative h-screen bg-gray-50 flex flex-col md:flex-row items-center overflow-hidden">
      <div className="absolute inset-0">
        <Slider onSlideChange={resetAnimations} />
      </div>

      <div className="relative z-10 p-4 md:p-8 flex flex-col items-start mx-4 md:mx-0 w-full md:ml-56">
        {/* Title Animation */}
        <h1 className={`w-full text-2xl text-center md:text-left md:text-5xl font-bold text-gray-800 transition-transform transform ${showText1 ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} duration-700`}>
          We Provide <span className="text-customBlue">Medical</span> Services
          <br />
          That You Can <span className="text-customBlue">Trust!</span>
        </h1>

        {/* Subtitle Animation */}
        <p className={`mt-4 md:mt-8 text-base md:text-lg text-gray-600 transition-transform transform ${showText2 ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"} duration-700 delay-200`}>
          
        </p>

        {/* Button Animation */}
        <div className={`w-full duration-700 delay-400 flex flex-col md:flex-row space-x-0 md:space-x-4 mt-8 transition-transform transform ${showButtons ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"}`}>
          <button className="relative flex h-12 md:h-[50px] w-full md:w-48 p-3 items-center justify-center overflow-hidden bg-customBlue text-white shadow-2xl transition-all rounded-lg group mb-4 md:mb-0">
            <span className="relative z-10">Get Appointment</span>
            <div className="absolute h-0 w-0 rounded-full bg-customDark transition-all duration-500 ease-out group-hover:h-56 group-hover:w-56"></div>
          </button>

          <button className="relative flex h-12 md:h-[50px] w-full md:w-40 items-center justify-center overflow-hidden bg-gray-900 text-white shadow-2xl transition-all rounded-lg group">
            <span className="relative z-10">Learn More</span>
            <div className="absolute h-0 w-0 rounded-full bg-customBlue transition-all duration-500 ease-out group-hover:h-56 group-hover:w-56"></div>
          </button>
        </div>
      </div>

      {/* Pro Version Slider */}
      <div className={`fixed top-20 md:top-40 right-0 z-20 bg-white p-4 md:p-8 shadow-lg transition-transform transform ease-in-out duration-500 ${showProSlider ? "translate-x-0" : "translate-x-full"}`} style={{ height: "auto" }}>
        <div className="flex justify-between flex-row-reverse">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Pro Version Features</h2>
          <button onClick={toggleProSlider} className="bg-customBlue text-white py-2 px-4 rounded-md transition-duration:300">Get Pro</button>
        </div>
        <ul className="mt-4 md:mt-6 space-y-2">
          <li>2+ premade home pages</li>
          <li>20+ HTML pages</li>
          <li>Color plate with 12+ colors</li>
          <li>Sticky Header / Sticky Filters</li>
          <li>Working contact form with Google Map</li>
        </ul>
        <div className="mt-4 md:mt-6 flex flex-col md:flex-row space-x-0 md:space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Pro Version Demo</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded-md">Buy Pro Version</button>
        </div>
      </div>

      {/* Get Pro Button */}
      <button
        onClick={toggleProSlider}
        className={`absolute top-8 right-8 bg-customBlue text-white py-2 px-4 rounded-md hover:bg-customDark transition-all duration-500 transform ${showProSlider ? "-translate-x-24 opacity-0" : "translate-x-0 opacity-100"}`}
      >
        Get Pro
      </button>
    </div>
  );
};

export default MedicalServicesSection;