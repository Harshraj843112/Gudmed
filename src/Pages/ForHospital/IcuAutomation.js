import React from 'react';
import { FaHeartbeat, FaChartLine, FaTools, FaIndustry } from 'react-icons/fa';
import MonitoringImage from "../../img/SmartPatientMonitroing.jpg";
import OutcomesImage from "../../img/EnhancedPatientoutcomes.jpg";
import WorkflowImage from "../../img/mission-img.jpg";
import MarketImage from "../../img/pf2.jpg";

const GudmedICUAutomation = () => {
    const features = [
        {
            icon: <FaHeartbeat size={30} className="text-blue-600" />,
            title: "Smart Patient Monitoring",
            description: "Real-time data capture from multiple devices, providing accurate patient data for informed decision-making.",
            image: MonitoringImage,
        },
        {
            icon: <FaChartLine size={30} className="text-blue-600" />,
            title: "Enhanced Patient Outcomes",
            description: "Dashboards for seamless collaboration between nurses and doctors, improving patient outcomes through coordinated care.",
            image: OutcomesImage,
        },
        {
            icon: <FaTools size={30} className="text-blue-600" />,
            title: "Efficient Workflow Management",
            description: "Optimizes workflows by automating routine tasks, freeing healthcare providers to focus on patient care.",
            image: WorkflowImage,
        },
        {
            icon: <FaIndustry size={30} className="text-blue-600" />,
            title: "Industry Impact and Market Potential",
            description: "With the tele-ICU market projected to grow, Gudmed is at the forefront of ICU tech solutions.",
            image: MarketImage,
        },
    ];

    return (
        <div className="bg-gradient-to-r from-indigo-50 to-blue-100 py-16 px-4 sm:px-8 lg:px-16">
            <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
                <h2 className="text-5xl font-extrabold text-blue-900 mb-8 text-center pt-8">
                    Revolutionizing ICU Automation with Gudmed
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-12 text-center px-8 sm:px-20">
                    Gudmed is transforming Intensive Care Unit (ICU) management with cutting-edge AI solutions designed to improve patient outcomes, streamline workflows, and empower healthcare professionals.
                </p>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-6 pb-10">
                    {features.map((feature, index) => (
                        <div 
                            key={index} 
                            className="flex flex-col bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2 p-6 lg:p-8"
                        >
                            {/* Image */}
                            <div className="w-full mb-6">
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="w-full h-72 object-cover rounded-lg shadow-lg "
                                />
                            </div>

                            {/* Icon, Title, and Description */}
                            <div className="flex items-center space-x-4 mb-4">
                                <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-4 rounded-full shadow-md">
                                    {feature.icon}
                                </div>
                                <h3 className="text-2xl font-semibold text-blue-800">
                                    {feature.title}
                                </h3>
                            </div>
                            <p className="text-gray-700 text-base leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GudmedICUAutomation;
