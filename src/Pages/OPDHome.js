import React from 'react';
import HeaderOPD from '../Components/OPD/HeaderOPD';
import ProcessStepsOPD from '../Components/OPD/ProcessStepsOPD';
import BenefitsOPD from '../Components/OPD/BenefitsOPD';

const OPDHome = () => (
    <div className="w-full p-8 space-y-8">
        <HeaderOPD />
        <ProcessStepsOPD />
        <BenefitsOPD />
    </div>
);
export default OPDHome;