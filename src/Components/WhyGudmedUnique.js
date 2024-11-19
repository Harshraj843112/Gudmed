// src/Components/WhyGudmedUnique.js
import React from 'react';
import { FaClock, FaBrain, FaFileMedical, FaCalendarCheck } from 'react-icons/fa'; // Importing icons

const WhyGudmedUnique = () => {
  const sections = [
    {
      title: "Real-Time Prescription Digitization",
      description:
        "Experience the power of real-time digitization! With GudMed, handwritten prescriptions are instantly transformed into digital formats, seamlessly sent to pharmacies, and boost operational efficiency. Hospitals can also provide instant lab test bookings and results, ensuring patient convenience and satisfaction.",
    },
  
    {
      title: "Comprehensive Hospital Support",
      description: "We empower hospitals with features designed to streamline operations:",
      points: [
        { icon: <FaClock className="text-blue-500 text-lg" />, text: "Quick Discharge Summaries: Reducing patient waiting times." },
        { icon: <FaBrain className="text-blue-500 text-lg" />, text: "AI-Driven Solutions: Enhancing operational excellence." },
        { icon: <FaFileMedical className="text-blue-500 text-lg" />, text: "MRD File Management: Capturing patient records across OPD and IPD." },
        { icon: <FaCalendarCheck className="text-blue-500 text-lg" />, text: "Post-Care Management: Timely medication reminders and follow-up scheduling." },
      ],
    },

    {
      title: "Enhanced Patient Engagement",
      description:
        "GudMed puts patients at the heart of healthcare. By educating them about treatments and providing timely reminders, we ensure better health outcomes. Patients can access their medical documents digitally, making their healthcare journey smooth and transparent.",
    },

    {
      title: "Seamless Workflow Integration",
      description:
        "Our technology adapts to your needs, not the other way around. Whether it’s editable discharge summaries, role-based EMR access, or integrated lab and radiology services, GudMed ensures your hospital’s workflows remain uninterrupted.",
    },

    {
      title: "Data Security and Privacy",
      description:
        "Your trust matters. GudMed ensures stringent data protection and confidentiality, adhering to global standards. We guarantee no sharing of Scoped Data with third parties, prioritizing your patients' privacy.",
    },

    {
      title: "Customizable and Scalable Solutions",
      description:
        "No matter the size of your organization, GudMed offers flexible, scalable solutions tailored to your needs. From small clinics to large hospitals, our technology grows with you.",
    },

    {
      title: "Join the GudMed Revolution",
      description:
        "Partner with GudMed and embrace a smarter, more efficient future for healthcare. Contact us today to learn how we can transform your healthcare operations.",
    },
  ];

  return (
    <section className="bg-gray-50 py-10 px-4 sm:px-8 lg:px-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-blue-800 text-center mb-8">Why GudMed is Unique</h2>
        <p className="text-lg font-bold text-black text-center mb-12">
          GudMed is revolutionizing healthcare with innovative, patient-focused solutions designed to meet the unique needs of hospitals, doctors, and patients.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 ease-in-out ${
                section.centered ? "flex flex-col items-center justify-center text-center" : ""
              }`}
            >
              <h3 className="text-2xl font-semibold text-black mb-4">{section.title}</h3> {/* Changed text color to black */}
              <p className="text-gray-700 mb-4">{section.description}</p>
              {section.points && (
                <ul className="space-y-3">
                  {section.points.map((point, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      {point.icon}
                      <span className="text-gray-700">{point.text}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyGudmedUnique;