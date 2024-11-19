import React from "react";
import { FaHospitalAlt, FaUserMd, FaClock } from "react-icons/fa";
import ServiceCard from "./ServiceCard";

const ServiceCardSection = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center lg:w-9/12 w-11/12 mx-auto  lg:-mt-32 gap-8 -mt-80">
      <ServiceCard
        heading="GudMEd"
        title="Emergency Cases"
        description=""
        buttonText="LEARN MORE"
        icon={<FaHospitalAlt size={40} />}
      />
      <ServiceCard
        heading="GudMed"
        title="Doctors Timetable"
        description=""
        buttonText="LEARN MORE"
        icon={<FaUserMd size={40} />}
      />

      <ServiceCard
        heading="GudMed"
        title="Opening Hours"
        description="Monday -  Saturday: 8.00-18.00"
        buttonText="LEARN MORE"
        icon={<FaClock size={40} />}
      />
    </div>
  );
};

export default ServiceCardSection;