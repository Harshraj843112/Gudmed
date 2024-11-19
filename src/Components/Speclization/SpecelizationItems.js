import React from 'react';

const SpecializationItems = ({ title, icon, description }) => {
  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 p-8">
      {/* Icon Section */}
      <div className="flex items-center justify-center mb-4">
        {icon} {/* Image passed from parent */}
      </div>

      {/* Text Section */}
      <div className="text-center">
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default SpecializationItems;