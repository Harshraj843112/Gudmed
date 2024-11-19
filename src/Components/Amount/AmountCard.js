import React from 'react';
import AmountItem from './AmountItem';

const AmountCard = ({ icon, title, price, items, isAvailable }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center space-y-4">
      {/* Icon and Title */}
      <div className="text-blue-500 text-5xl ">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      
      {/* Price */}
      <div className="text-blue-500 text-3xl font-bold">
        ${price}
        <span className="text-gray-500 text-lg"> / Per Visit</span>
      </div>

      {/* Items List */}
      <ul className="text-gray-700 space-y-2">
        {items.map((item, index) => (
          <AmountItem key={index} item={item} available={isAvailable[index]} />
        ))}
      </ul>

      {/* Book Now Button */}
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition">
        Book Now
      </button>
    </div>
  );
};

export default AmountCard;