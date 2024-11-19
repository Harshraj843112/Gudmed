import React from 'react';
import FeatureCard from './FeatureCard';

const DoctorHome = () => {
    return (
        <div className="relative bg-gray-100 py-12 px-4 sm:px-6 lg:px-20 xl:px-40"> {/* Changed background to light gray */}
            {/* Heading Section */}
            <div className="absolute top-4 left-6">
                <h1 className="text-2xl lg:text-4xl font-bold text-black hover:text-blue-800 transition-colors duration-300 cursor-pointer">
                    For Doctor
                </h1>
            </div>

            {/* Cards Section */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                <FeatureCard
                    title="Gudmed Smart Camera"
                    description="The GudMed Smart Camera is designed to simplify and accelerate the digitization of handwritten prescriptions in outpatient departments. It enables hospitals to convert physical, handwritten prescriptions into digital format instantly, with high accuracy and minimal effort."
                    features={[
                        "High-Quality Image Capture",
                        "Real-Time AI Processing",
                        "Instant Integration with Hospital Systems",
                        "Automatic Validation and Error Detection",
                        "Fast and Secure Data Transfer",
                        "User-Friendly for Healthcare Staff",
                    ]}
                />
                <FeatureCard
                    title="AI-Driven Technology for Real-Time Remote Monitoring"
                    description="GudMed's AI technology enables real-time remote monitoring in ICUs. This advanced system continuously tracks patient vital signs and conditions, ensuring that healthcare providers can respond immediately to any changes, even from a distance."
                    features={[
                        "AI-powered remote monitoring for ICU",
                        "Real-time data capture from patient monitors",
                        "Predictive analytics for proactive care",
                        "Automated alerts for critical events",
                        "Seamless integration with hospital EMR systems",
                        "Improved patient safety and outcomes",
                    ]}
                />
                <FeatureCard
                    title="Data Capture from Existing Patient Monitors"
                    description="GudMed captures critical data from existing patient monitors, allowing seamless integration with the hospital's digital systems. This feature supports real-time data analysis, helping clinicians make informed decisions quickly and efficiently."
                    features={[
                        "Integrates with existing patient monitors",
                        "Supports various types of vital sign monitors",
                        "Real-time data synchronization",
                        "Data visualization for quick insights",
                        "Enhances clinical decision-making",
                        "Reduces manual data entry",
                    ]}
                />
                <FeatureCard
                    title="Real-Time Patient Monitoring System"
                    description="GudMed's real-time patient monitoring system provides a comprehensive view of patient status, with continuous updates on vital signs and health metrics. This system enhances ICU efficiency by reducing response times and supporting better patient care."
                    features={[
                        "Continuous monitoring of patient vitals",
                        "Accessible data on mobile devices for doctors",
                        "Automated record-keeping in EMRs",
                        "Customizable alerts for critical values",
                        "Data-driven insights for treatment planning",
                        "Improved workflow efficiency",
                    ]}
                />
                <FeatureCard
                    title="GudMed Real-Time ICU Monitoring Platform"
                    description="GudMed’s platform leverages AI-driven analysis to monitor patients in ICUs in real-time, ensuring data from multiple monitors is centralized and accessible to healthcare providers. This platform is designed to improve ICU workflows and patient outcomes."
                    features={[
                        "Centralized data from multiple monitors",
                        "AI-driven analysis for early intervention",
                        "Secure and compliant data storage",
                        "User-friendly dashboard for ICU staff",
                        "Interoperable with other hospital systems",
                        "Helps improve response times in critical situations",
                    ]}
                />
            </div>
        </div>
    );
};

export default DoctorHome;