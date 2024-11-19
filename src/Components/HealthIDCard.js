import React from 'react';
import CardImage from '../img/Unique-Digital-Health-Card-images.png'; // Ensure this path is correct
import { Link } from 'react-router-dom';

const HealthIDCard = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-r from-blue-200 to-blue-50 p-4">
      <div className="w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 p-4 sm:p-8 lg:p-14">
        
        {/* Left side: Full-width Health Card Image */}
        <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
          <img
            src={CardImage}
            alt="Digital Health Card"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Right side: Text Content */}
        <div className="flex flex-col justify-center text-center lg:text-left px-4 lg:px-8 lg:ml-28 lg:-mt-72 mt-6 lg:mt-0">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-blue-800 mb-4 transition-colors duration-300 hover:text-blue-600">
            Ayushman Bharat Digital Mission
          </h1>
          <p className="text-sm sm:text-md lg:text-xl text-gray-800 mb-6">
            Creating India’s Digital Health Ecosystem
          </p>

          {/* Bullet Points */}
          <ul className="space-y-2 sm:space-y-3 lg:space-y-4 text-left">
            <li className="flex items-center space-x-2 lg:space-x-3">
              <span className="text-green-600 text-xl sm:text-2xl lg:text-3xl">✔</span>
              <p className="text-gray-800 text-sm sm:text-base lg:text-xl font-medium transition-transform duration-300 transform hover:scale-105">
                ABHA - Ayushman Bharat Health Account
              </p>
            </li>
            <li className="flex items-center space-x-2 lg:space-x-3">
              <span className="text-green-600 text-xl sm:text-2xl lg:text-3xl">✔</span>
              <p className="text-gray-800 text-sm sm:text-base lg:text-xl font-medium transition-transform duration-300 transform hover:scale-105">
                Key to your digital healthcare journey
              </p>
            </li>
          </ul>

          {/* Buttons */}
          <div className="mt-8 w-full flex flex-col items-center lg:items-start">
            <Link to="https://patient.gudmed.in/generateHealthID">
              <button className="relative flex h-[50px] p-4 w-full sm:w-52 items-center justify-center overflow-hidden bg-customBlue text-white shadow-lg transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-customDark before:duration-500 before:ease-out hover:shadow-customBlue hover:before:h-56 hover:before:w-56 rounded-lg">
                <span className="relative z-10 font-semibold">Create ABHA number</span>
              </button>
            </Link>
            <p className="mt-4 text-sm sm:text-lg lg:text-2xl text-gray-600 font-bold text-center lg:text-left">
              Already have an ABHA number?{' '}
              <a href="#" className="text-blue-600 underline hover:text-blue-800 transition-colors duration-200">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthIDCard;
