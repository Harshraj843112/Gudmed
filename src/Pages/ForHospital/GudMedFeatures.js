// GudMedFeatures.js
import React from 'react';
import { FaStethoscope, FaClipboardCheck, FaChartLine, FaPrescriptionBottle, FaHandHoldingHeart } from 'react-icons/fa';

const features = [
    {
        title: "Real-Time Prescription and Discharge Summary Digitization",
        description: "Digitize prescriptions and discharge summaries in real-time, ensuring instant record availability and automated workflows.",
        icon: <FaClipboardCheck className="text-blue-600" size={40} />
    },
    {
        title: "Digital Patient Records and Document Management",
        description: "Securely store and access patient records digitally, eliminating the need for physical files and improving care efficiency.",
        icon: <FaStethoscope className="text-blue-600" size={40} />
    },
    
    {
        title: "AI-Powered Analytics and Operational Efficiency",
        description: "Leverage AI-driven tools to optimize resource allocation, predict patient needs, and enhance decision-making.",
        icon: <FaChartLine className="text-blue-600" size={40} />
    },

    {
        title: "Seamless Integration with Labs and Pharmacies",
        description: "Enable real-time updates between hospital, lab, and pharmacy for faster patient care and improved inventory management.",
        icon: <FaPrescriptionBottle className="text-blue-600" size={40} />
    },

    {
        title: "Post-Care Engagement and Automated Follow-Ups",
        description: "Automate follow-ups and reminders to keep patients engaged and reduce readmission rates.",
        icon: <FaHandHoldingHeart className="text-blue-600" size={40} />
    }
];

const GudMedFeatures = () => {
    return (
        <section className="py-5 px-6 bg-white rounded-lg shadow-md space-y-8">
            <h3 className="text-2xl font-bold text-blue-900 text-center">
                Why GudMed Is the Perfect Partner for Your Smart Hospital Transition
            </h3>
            <div className="grid grid-cols-3 gap-8" style={{ gridTemplateAreas: `"feature1 feature2 feature3" ". feature4 ." ". feature5 ."`, justifyContent: "center" }}>
                <div style={{ gridArea: 'feature1' }} className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md">
                    {features[0].icon}
                    <h4 className="mt-4 text-xl font-semibold text-blue-800">{features[0].title}</h4>
                    <p className="mt-2 text-gray-700">{features[0].description}</p>
                </div>
                <div style={{ gridArea: 'feature2' }} className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md">
                    {features[1].icon}
                    <h4 className="mt-4 text-xl font-semibold text-blue-800">{features[1].title}</h4>
                    <p className="mt-2 text-gray-700">{features[1].description}</p>
                </div>
                <div style={{ gridArea: 'feature3' }} className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md">
                    {features[2].icon}
                    <h4 className="mt-4 text-xl font-semibold text-blue-800">{features[2].title}</h4>
                    <p className="mt-2 text-gray-700">{features[2].description}</p>
                </div>
                <div style={{ gridArea: 'feature4' }} className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md">
                    {features[3].icon}
                    <h4 className="mt-4 text-xl font-semibold text-blue-800">{features[3].title}</h4>
                    <p className="mt-2 text-gray-700">{features[3].description}</p>
                </div>
                <div style={{ gridArea: 'feature5' }} className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-md">
                    {features[4].icon}
                    <h4 className="mt-4 text-xl font-semibold text-blue-800">{features[4].title}</h4>
                    <p className="mt-2 text-gray-700">{features[4].description}</p>
                </div>
            </div>
        </section>
    );
};

export default GudMedFeatures;