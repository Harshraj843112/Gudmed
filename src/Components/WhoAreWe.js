import React from 'react';
import OfferContentSection from './Common/OfferContentSection';
import SectionImg from '../img/section-img.png';
import { AiOutlinePlayCircle } from 'react-icons/ai';
import RightSideImage from '../img/WhoWeAre 2.png';

const items = [
  "Healthcare Innovators",
  "Patient-Centric Solution Providers",
  "Technology and AI Experts",
  "Committed to Data Security",
  "Partners in Hospital Transformation",
  "Advocates for a Smart Healthcare Future"
];

const WhoAreWe = () => {
  return (
    <div className='mt-20 px-4 lg:px-0'>
      {/* Offer Content Section */}
      <div className="mt-20 px-4 lg:px-0">
      </div>

      {/* Main container */}
      <div className='flex flex-col lg:flex-row justify-between items-center w-10/12 mx-auto'>

        {/* Left content */}
        <div className='lg:w-1/2 flex flex-col text-left gap-y-6 mx-auto mr-4'>
          <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl relative inline-block mx-auto'>
            Who We Are
            <span className='absolute left-0 bottom-0 h-1 w-68 bg-gradient-to-r from-blue-500 to-green-500 transition-all duration-500 transform scale-100'></span>
          </h1>
          <p className='text-base md:text-lg lg:text-xl mt-4 mx-auto'>
            GUDMED was born to fill the need for basic healthcare knowledge of patients, because of incorrect, insufficient, or irregular medications and health information. Surprisingly, it is found that &gt;96% of patients (including educated ones) take prescribed medications without understanding the prescription; while &gt;82% of patients forget to take medicines on time and do not maintain the desired interval between medications. This leads to risking their own health and may lead to chronic diseases.
          </p>

          {/* List of services */}
          <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mt-4 mx-auto'>
  {items.map((text, index) => (
    <div key={index} className='flex items-center space-x-2 transition-all duration-300 hover:shadow-lg hover:bg-blue-50 rounded-lg p-2'>
      <AiOutlinePlayCircle className='text-xl text-blue-500 hover:text-blue-700 transition-colors duration-300' />
      <p className='text-base md:text-lg'>{text}</p>
    </div>
  ))}
</div>
        </div>

        {/* Right-side Image with Overlay */}
        <div className='lg:w-1/2 flex items-center justify-end mt-6 lg:mt-0 relative'>
          <div className='relative w-full h-auto group'>
            {/* Right-side Image */}
            <img
              src={RightSideImage}
              alt="Who We Are"
              className='w-full h-auto rounded-lg shadow-lg transition-transform duration-500 group-hover:scale-102' // Reduced hover scale
            />
            {/* Overlay Effect */}
            <div className='absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-20 rounded-lg transition-all duration-500'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;