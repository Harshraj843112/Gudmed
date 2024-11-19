import React from 'react';

const KnowledgePartnerItem = ({ image, title }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"> 
      {/* Card with hover scale effect */}
      <img
        className="w-full h-32 sm:h-40 md:h-48 object-contain"
        src={image}
        alt={`${title} logo`} 
      />

      <div className="flex flex-col items-center p-4">
        <span className="text-gray-900 font-bold text-lg mb-2">{title}</span>
      </div>
    </div>
  );
};

export default KnowledgePartnerItem;
