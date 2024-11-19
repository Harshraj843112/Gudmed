import React from 'react';
import SpecelizationItems from './SpecelizationItems'; // Use the exact file name here
import Monitor from "../../img/Monitor.png";
import Medicine from "../../img/Medicine reminder.png";
import Medical from "../../img/Medical value.jpg";
import Digital from "../../img/prescription.png";
import ClinicalMedicine from "../../img/medicine.png";

const services = [
  {
    title: 'Monitor Your Body VITALS!',
    icon: Monitor,
    description: 'Now you can monitor your Body Vitals by using the GudMed Vital Monitoring Service',
  },
  {
    title: 'Medicine Reminder',
    icon: Medicine,
    description: 'Now you can get Medicine reminders on your phone by using Medicine Reminder Service from GudMed',
  },
  {
    title: 'Medical VAULT',
    icon: Medical,
    description: 'Now you can store all your medical Documents, Reports, Prescriptions, Images in a secured VAULT',
  },
  {
    title: 'DIGITAL Prescription in your Language',
    icon: Digital,
    description: 'Now you can get your Doctor’s handwritten prescription in Digital format in your own Hindi Language',
  },
  {
    title: 'Generic Medicine Service',
    icon: ClinicalMedicine,
    description: 'Now you can SAVE UP TO 70% on your medical bills by using GudMed Generic Service',
  },
];

const Specialization = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          How we are making Patient Smarter
        </h2>

        {/* First row with three items */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((service, index) => (
            <SpecelizationItems
              key={index}
              title={service.title}
              icon={<img src={service.icon} alt={service.title} className="w-20 h-20 mx-auto mb-4 rounded-full border-4 border-blue-200 shadow-lg" />}
              description={service.description}
            />
          ))}
        </div>

        {/* Second row with two items, centered */}
        <div className="grid gap-8 grid-cols-2 justify-center mt-8">
          {services.slice(3).map((service, index) => (
            <SpecelizationItems
              key={index + 3}
              title={service.title}
              icon={<img src={service.icon} alt={service.title} className="w-20 h-20 mx-auto mb-4 rounded-full border-4 border-blue-200 shadow-lg" />}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialization;