// HospitalFeatureCard.js
import React from 'react';

const HospitalFeatureCard = ({ imageSrc, title, description, features }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl my-6">
            <div className="flex flex-col lg:flex-row">
                {/* Image Frame */}
                <div className="w-full lg:w-1/2 bg-blue-50 flex items-center justify-center">
                    <img
                        src={imageSrc}
                        alt={title}
                        className="object-cover w-full h-72 lg:h-full rounded-lg lg:rounded-none transition-transform transform hover:scale-105"
                    />
                </div>

                {/* Text Content Frame */}
                <div className="w-full lg:w-1/2 p-8 lg:p-10 flex flex-col justify-start bg-gray-50">
                    <h3 className="text-2xl font-bold text-blue-800 mb-4 mt-0">{title}</h3>
                    <p className="text-gray-700 mb-6">{description}</p>
                    <h4 className="text-lg font-semibold text-blue-800 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                                <span className="text-blue-600 mr-2">•</span>
                                <p className="text-gray-700">{feature}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default HospitalFeatureCard;