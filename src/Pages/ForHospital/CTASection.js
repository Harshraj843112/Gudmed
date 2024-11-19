import React from 'react';
import { FaHandsHelping, FaRegSmileBeam, FaPiggyBank, FaBrain } from 'react-icons/fa';

const benefits = [
    {
        icon: <FaHandsHelping className="w-8 h-8 text-purple-600" />,
        title: "Operational Excellence",
        description: "Streamline operations with automated workflows that free up time and reduce errors."
    },
    {
        icon: <FaRegSmileBeam className="w-8 h-8 text-red-500" />,
        title: "Improved Patient Outcomes",
        description: "Provide better engagement, faster access to care, and continuous follow-ups for optimal health outcomes."
    },
    {
        icon: <FaPiggyBank className="w-8 h-8 text-green-600" />,
        title: "Cost Efficiency",
        description: "Reduce operational costs through digital records and process automation."
    },
    {
        icon: <FaBrain className="w-8 h-8 text-blue-600" />,
        title: "Data-Driven Decision Making",
        description: "Utilize AI insights to predict trends, optimize resources, and personalize care."
    }
];

const CTASection = () => {
    return (
        <section className="py-12 px-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow-lg text-center md:px-12 lg:px-20">
            <h3 className="text-4xl font-extrabold text-blue-900 mb-6">
                The Smart Hospital of Tomorrow – Today with <span className="text-blue-700">GudMed</span>
            </h3>
            <p className="text-lg text-gray-800 mb-8">
                Transform your hospital into a smart, efficient, and patient-centered facility with GudMed's innovative solutions.
            </p>
            <ul className="space-y-6 text-left md:text-lg">
                {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start bg-white p-6 rounded-lg shadow-sm">
                        <div className="mr-4">
                            {benefit.icon}
                        </div>
                        <div>
                            <strong className="text-blue-900 text-lg">{benefit.title}</strong>
                            <p className="text-gray-700">{benefit.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
            <h4 className="text-3xl font-semibold text-blue-900 mt-10 mb-6">
                Join the Future of Healthcare Today
            </h4>
            <p className="text-lg text-gray-800 mb-8">
                Experience GudMed’s smart hospital solutions and move beyond the limitations of physical records and manual processes. Together, let's enhance healthcare operations for better outcomes.
            </p>
            <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-full shadow-lg transition-colors duration-300">
                Get Started with GudMed
            </button>
        </section>
    );
};

export default CTASection;
