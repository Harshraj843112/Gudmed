import React from 'react';
import IPDBenefitsSectionIPD from '../Components/IPD/IPDBenefitsSectionIPD';
import DischargeSummaryIPD from '../Components/IPD/DischargeSummaryIPD';
import SliderIPD from '../Components/IPD/SliderIPD'; // Import the slider component

const IPDHomeIPD = () => {
  return (
    <div className="w-full relative overflow-hidden p-8">
      {/* Header Section for IPD Home */}
      <h1 className="text-5xl font-extrabold text-center  text-blue-800 mb-6 tracking-wide">
    Welcome to GudMed's In-Patient Department (IPD)
</h1>
<p className="text-center text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
Experience seamless care and efficient discharge processes with GudMed’s 
<br></br>10-Minute Discharge Summary.
</p>

      {/* Hero/Image Slider Section for IPD Home */}
      <div className="w-full">
  <div className="h-full"> {/* Set height to full screen */}
    <SliderIPD />
  </div>
</div>


      {/* Discharge Summary Section for IPD */}
      <DischargeSummaryIPD />

      {/* Benefits Section for IPD Services */}
      <IPDBenefitsSectionIPD />
    </div>
  );
};

export default IPDHomeIPD;
