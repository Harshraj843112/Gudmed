import React from 'react';

// Importing all sections used in the Home component
import MedicalServicesSection from '../Components/MedicalServicesSection';
import ServiceCardSection from '../Components/serviceLayout/ServiceCardSection';
import Section from '../Components/Section/Section';
import CounterSection from '../Components/CounterSection';
import WhoAreWe from '../Components/WhoAreWe';
import CarouselSmall from '../Components/CaroselSmall';
import Specialization from '../Components/Speclization/Specelization';
import KnowledgePartnerCardSection from '../Components/KnowledgePartner/KnowldgePartnerCardSection';
import ContactFormSection from '../Components/ContactFormSection';
import OurClient from '../Components/OurClient';
import ImageCompare from '../Components/ImageCompare';
import WhyGudmedUnique from '../Components/WhyGudmedUnique';
import GudMedSmartCamera from '../Components/GudMedSmartCamera'; // Import the new section component
import ComparisonSection from '../Components/ComparisonSection';

// Main Home component
const Home = () => {
  return (
    <div className="w-full relative overflow-hidden overflow-x-hidden">
      
      {/* Hero Section */}
      <MedicalServicesSection />

      {/* Services Section */}
      <ServiceCardSection />

      {/* Additional Informative Section */}
      <Specialization />

      {/* Image Comparison Section */}
      <ImageCompare />

      {/* Counter Section */}
      <CounterSection />

      {/* About Us Section */}
      <WhoAreWe />

      {/* New Section: Why Gudmed is Unique */}
      <WhyGudmedUnique />

      {/* Comparison Section */}
      <ComparisonSection />


      {/* New Section: GudMed Smart Camera */}
      <GudMedSmartCamera /> {/* Placeholder for "GudMed Smart Camera" */}

      {/* Knowledge Partner Section */}
      <KnowledgePartnerCardSection />

      {/* Our Clients Section */}
      <OurClient />

      {/* Small Carousel Section */}
      <CarouselSmall />
      
    </div>
  );
};

export default Home;