import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const FeatureCard = ({ title, description, features }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl p-6 flex flex-col justify-between">
            {/* Text Section */}
            <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-blue-800 mb-4 sm:mb-6">{title}</h3>
                <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">{description}</p>
                <h4 className="text-lg sm:text-xl font-semibold text-blue-800 mb-3">Features:</h4>
                <div className="space-y-2 sm:space-y-3">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-start">
                            <FaCheckCircle className="text-blue-600 mr-2 sm:mr-3" size={20} />
                            <p className="text-gray-700 text-sm sm:text-base font-medium">{feature}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;
