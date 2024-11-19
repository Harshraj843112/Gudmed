import React from 'react';

const BenefitItemIPD = ({ icon, title, description, image }) => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white p-4 shadow rounded-lg mb-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
      {/* Icon and Text Section */}
      <div className="flex items-center mb-4 md:mb-0 md:mr-4">
        <div className="text-blue-600">{icon}</div>
      </div>
      
      {/* Text Content */}
      <div className="flex-1">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      
      {/* Image Placeholder */}
      {image ? (
        <div className="w-24 h-24 ml-4 flex-shrink-0">
          <img src={image} alt={title} className="w-full h-full object-cover rounded-lg" />
        </div>
      ) : (
        <div className="w-24 h-24 ml-4 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
          <span>Image</span>
        </div>
      )}
    </div>
  );
};
export default BenefitItemIPD;