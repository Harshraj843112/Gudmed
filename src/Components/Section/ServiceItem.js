import React from 'react';

// Reusable Component for Service Items with Hover Effect
const ServiceItem = ({ Icon, title, description }) => {
  return (
    <div className='text-center w-full md:w-1/3 transition duration-300 hover:scale-105'>
      <div className='flex justify-center'>
        <div className='p-4 rounded-full bg-transparent border-4 border-gray-100 
        transition duration-300 hover:bg-customBlue hover:border-customBlue hover:text-white active:bg-customBlue'>
          <Icon className='text-blue-500 text-5xl md:text-6xl transition duration-300 hover:text-white active:text-white' />
        </div>
      </div>
      <h3 className='text-lg md:text-xl font-semibold mt-4 transition duration-300 hover:text-blue-500'>
        {title}
      </h3>
      <p className='text-gray-500 mt-2 text-sm md:text-base transition duration-300 hover:text-gray-700'>
        {description}
      </p>
    </div>
  );
};

export default ServiceItem;
