// src/Components/ProcessStepsOPD.js
import React from 'react';
import ImageSlider from './ImageSlider'; // Import the slider component

// Define the steps with an `image` property and numbering
const steps = [
    {
        title: "Prescription Creation by the Doctor",
        description: "During an OPD consultation, the doctor writes the patient’s prescription on paper, including medications, lab tests, and care instructions.",
        image: require('../../img/processstep11.jpeg')
    },
    {
        title: "Real-Time Digitization",
        description: "The handwritten prescription is scanned using GudMed’s technology. Advanced AI analyzes and digitizes the text, medical terms, and abbreviations.",
        image: require('../../img/processstep21.jpeg')
    },
    {
        title: "Review and Validation",
        description: "After digitization, the prescription is reviewed to ensure accuracy. Any errors or ambiguities are clarified to avoid delays.",
        image: require('../../img/processstep31.jpeg')
    },
    {
        title: "Integration with Hospital Systems",
        description: "Once validated, the digitized prescription is integrated with the hospital’s EMR system for seamless sharing with pharmacies, labs, and other departments.",
        image: require('../../img/processstep41.png')
    },
    {
        title: "Patient Communication and Engagement",
        description: "The patient receives the digitized prescription on their phone via SMS or WhatsApp, with details of medications, dosage, and lab tests.",
        image: require('../../img/processstep51.png')
    },
    {
        title: "Pharmacy Integration for Faster Fulfillment",
        description: "The digitized prescription is sent to the hospital’s pharmacy in real-time, allowing quick preparation of medications, reducing patient wait times.",
        image: require('../../img/processstep61.png')
    },
    {
        title: "Lab Test Orders and Results",
        description: "Lab test orders are sent to the hospital’s lab, enabling patients to schedule tests promptly. Results are shared digitally for review.",
        image: require('../../img/processstep71.png')
    },
    {
        title: "Secure Storage and Access",
        description: "All digitized prescriptions are securely stored in the EMR system, allowing doctors to access a patient’s prescription history for continuity of care.",
        image: require('../../img/processstep81.png')
    },
];

const ProcessStepsOPD = () => (
    <section className="bg-white p-6 rounded-lg shadow-md mb-8">
        {/* Slider Component */}
        <ImageSlider /> 

        {/* Steps Section */}
        <h2 className="text-2xl font-semibold text-center mb-4">Step-by-Step Process of OPD Prescription Digitization</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {steps.map((step, index) => (
                <div 
                    key={index} 
                    className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 p-4 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-200 ease-in-out"
                >
                    {/* Step Number */}
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                        {index + 1}
                    </div>

                    {/* Image and Content */}
                    <div className="flex items-center space-x-4">
                        {/* Step Image */}
                        <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center">
                            {step.image ? (
                                <img src={step.image} alt={step.title} className="w-full h-full object-cover rounded-lg" />
                            ) : (
                                <span>Image</span>
                            )}
                        </div>

                        {/* Text Content */}
                        <div>
                            <h3 className="text-xl font-bold text-blue-800">{step.title}</h3>
                            <p className="text-gray-700">{step.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default ProcessStepsOPD;
