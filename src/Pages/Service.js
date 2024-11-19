import React from 'react';
import HealthIDCard from '../Components/HealthIDCard';

const Service = () => {
  return (
    <div className="container mx-auto p-6 flex flex-col items-center text-center">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-blue-800">Our Services</h1>
      <p className="text-lg text-gray-600 mb-8">We offer a wide range of services tailored to your needs.</p>

      {/* Health ID Card Section */}
      <div className="w-full flex justify-center">
        <HealthIDCard />
      </div>
    </div>
  );
};
export default Service;