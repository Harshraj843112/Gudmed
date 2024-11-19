// ForHospitalHome.js
import React from 'react';
import HospitalFeatureCard from './HospitalFeatureCard';
import Camera from '../../img/ForPatient.pnj.webp';
import Ncamera from '../../img/HospitalRevon.jpeg';
import GudmedICUAutomation from './IcuAutomation';
import HospitalOverview from './HospitalOverview';
import BenefitsList from './BenefitsList';
import GudMedFeatures from './GudMedFeatures';
import CTASection from './CTASection';
import Footer from '../../Components/Footer';

const ForHospitalHome = () => {
    return (
        <div className="w-11/12 lg:w-9/12 xl:w-8/12 flex flex-col mx-auto py-10 space-y-10 bg-gray-50 rounded-lg shadow-md">
            {/* Hospital Feature Card */}
            <HospitalFeatureCard
                imageSrc={Ncamera}
                title="GudMed for Hospitals"
                description="Hospitals today need more than just care facilities-they need intelligent solutions that make processes efficient and patient-centric. GudMed enhances your hospital's operational efficiency by digitizing medical records, reducing discharge times, and optimizing the use of your medical resources. Our AI-integrated platform helps reduce the burden on healthcare staff, improve the patient experience, and increase overall revenue by managing prescriptions, tests, and patient engagement seamlessly."
                features={[
                    "Reduce discharge waiting times",
                    "Real-time lab and pharmacy integration",
                    "Manage post-treatment care with automated reminders",
                    "AI-powered analytics for better decision-making",
                    "Enhanced patient engagement and satisfaction",
                    "Optimize medical resources and staff workload"
                ]}
            />

            {/* Gudmed ICU Automation Section */}
            <GudmedICUAutomation />
            <HospitalOverview />
            <BenefitsList/>
            <GudMedFeatures />
            <CTASection/>
           
        </div>
    );
};
export default ForHospitalHome;