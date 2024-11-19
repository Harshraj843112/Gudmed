// BenefitsList.js
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
// Ensure the image path and format are correct
import Camera from '../../img/Tred_Soft.jpeg'; // Corrected the image extension

const benefits = [
    "Instant Access to Patient Data",
    "Improved Patient Care Continuity",
    "Enhanced Data Security",
    "Save Space and Reduce Costs",
    "Compliance and Reporting"
];

const BenefitsList = () => {
    return (
        <section className="py-10 px-6 bg-gray-50 rounded-lg shadow-md">
            <div className="flex flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-8">
                {/* Image Section */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                    <img
                        src={Camera}
                        alt="Digital Transformation for Hospitals"
                        className="w-3/4 lg:w-full max-w-md object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105"
                    />
                </div>

                {/* Content Section */}
                <div className="w-full lg:w-1/2 space-y-6">
                    <h3 className="text-2xl font-bold text-blue-900 text-center lg:text-left">
                        Stop Storing Data in Archived MRD Files—Go Digital with GudMed
                    </h3>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Many hospitals still rely on physical Medical Record Departments (MRDs) to store patient data, often in overcrowded, paper-based archives. This method is not only inefficient but also prone to errors and retrieval challenges. With GudMed, you can put an end to these storage issues by digitizing all patient records.
                    </p>
                    <ul className="space-y-4">
                        {benefits.map((benefit, index) => (
                            <li key={index} className="flex items-center">
                                <FaCheckCircle className="text-blue-500 mr-3" size={22} />
                                <span className="text-gray-800 font-medium text-lg">{benefit}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default BenefitsList;
