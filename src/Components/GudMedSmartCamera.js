// src/Components/GudMedSmartCamera.js
import React from 'react';
import SmartCameraImage from '../img/SmartCam.webp'; // Adjust the path to where your image is stored

const GudMedSmartCamera = () => {
  return (
    <div className="flex justify-center px-4"> {/* Outer container to center the component */}
      <div className="flex flex-col items-center bg-white rounded-lg  transform transition-all duration-300 p-8 w-10/12 lg:w-10/12 mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-blue-800 text-center mb-6">GudMed Smart Camera</h2>
        
        {/* Section Content */}
        <div className="flex flex-col lg:flex-row items-center lg:space-x-10">
          
          {/* Image Section */}
          <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0 mx-auto">
            <img
              src={SmartCameraImage}
              alt="GudMed Smart Camera"
              className="w-full max-w-md h-auto object-cover rounded-lg"
            />
          </div>
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <p className="text-lg text-gray-700 mb-6">
              The GudMed Smart Camera is designed to simplify and accelerate the digitization of handwritten prescriptions in outpatient departments. It enables hospitals to convert physical, handwritten prescriptions into digital format instantly, with high accuracy and minimal effort.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "High-Quality Image Capture",
                "Real-Time AI Processing",
                "Instant Integration with Hospital Systems",
                "Automatic Validation and Error Detection",
                "Fast and Secure Data Transfer",
                "User-Friendly for Healthcare Staff",
              ].map((feature, index) => (
                <div
                  key={index}
                  className="border border-gray-300 rounded-lg p-4 flex items-center space-x-2 transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  <span className="text-green-600 text-lg">✔</span>
                  <span className="text-gray-800">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GudMedSmartCamera;
