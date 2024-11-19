import React from "react";

const ServiceCard = ({ title, description, buttonText, icon, heading }) => {
  return (
    <div className="bg-customBlue text-white p-6 md:p-8 rounded-lg shadow-lg w-full lg:w-[30%] 
    mx-auto transform transition duration-700 hover:-translate-y-2
     hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] flex flex-col gap-4">
      <div className="flex flex-col gap-6 mb-4">
        <h3 className="text-xl md:text-2xl">{heading}</h3>
        <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
      </div>
      <p className="mb-6 text-left text-sm md:text-base">{description}</p>
      <div className="flex justify-start">
        <button className="underline hover:text-customDark transition-colors text-sm md:text-base">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
