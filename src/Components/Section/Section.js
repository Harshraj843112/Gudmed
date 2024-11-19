import React from 'react';
import { FaAmbulance, FaClinicMedical, FaStethoscope } from 'react-icons/fa'; // Use react-icons for icons

import ServiceItem from './ServiceItem'; // Import the ServiceItem component
import Offer from '../Common/Offer';

const Section = () => {
  return (
    <div className='w-full flex justify-center py-16 bg-white'>
      <div className='w-11/12 lg:w-9/12'>

        {/* Offer Component */}
        <Offer />

        {/* Flex Row for Services */}
        <div className='flex flex-col md:flex-row items-center justify-between gap-8 mt-12'>
          
          {/* Emergency Help */}
          <ServiceItem
            Icon={FaAmbulance}
            title="Emergency Help"
            description="Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate."
          />

          {/* Dotted Line */}
          <div className='hidden md:block w-1/6'>
            <div className='border-b-4 border-dotted border-blue-500 h-1'></div>
          </div>

          {/* Enriched Pharmacy */}
          <ServiceItem
            Icon={FaClinicMedical}
            title="Enriched Pharmacy"
            description="Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate."
          />

          {/* Dotted Line */}
          <div className='hidden md:block w-1/6'>
            <div className='border-b-4 border-dotted border-blue-500 h-1'></div>
          </div>

          {/* Medical Treatment */}
          <ServiceItem
            Icon={FaStethoscope}
            title="Medical Treatment"
            description="Lorem ipsum sit, consectetur adipiscing elit. Maecenas mi quam vulputate."
          />
        </div>
      </div>
    </div>
  );
}

export default Section;
