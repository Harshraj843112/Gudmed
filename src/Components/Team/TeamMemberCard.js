import React from 'react';

const TeamMemberCard = ({ title, name, description }) => (
    <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 group">
        {/* Decorative Border */}
        <div className="w-16 h-1 bg-blue-500 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300"></div>
        
        {/* Name and Title */}
        <h3 className="text-2xl font-extrabold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
            {name}
        </h3>
        <p className="text-blue-500 font-medium italic mb-4">{title}</p>
        
        {/* Divider */}
        <hr className="border-t-2 border-gray-200 mb-4 group-hover:border-blue-500 transition-colors duration-300" />
        
        {/* Description */}
        <p className="text-gray-700 text-base leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
            {description}
        </p>

        {/* Call-to-Action Button */}
        <div className="mt-6 text-center">
            <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
                Connect
            </button>
        </div>
    </div>
);

export default TeamMemberCard;
