import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import IPD from './Pages/IPD';
import OPDHome from './Pages/OPDHome';
import DoctorHome from './Pages/Doctor/DoctorHome';
import ForHospitalHome from './Pages/ForHospital/ForHospitalHome';
import TeamHome from './Pages/TeamHome';
import ContactHome from './Pages/ContactHome';
import Service from './Pages/Service'; // Import the Service page component
import Navbar from './Components/Navbar';
import Navbar2 from './Components/Navbar2';
import Footer from './Components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function App() {
  const [isNavbar2Fixed, setIsNavbar2Fixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsNavbar2Fixed(true);
      } else {
        setIsNavbar2Fixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <div className="h-screen w-full overflow-x-hidden">
        <Navbar />
        <Navbar2 isFixed={isNavbar2Fixed} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ipd" element={<IPD />} />
          <Route path="/opd" element={<OPDHome />} />
          <Route path="/doctor" element={<DoctorHome />} />
          <Route path="/hospital" element={<ForHospitalHome />} />
          <Route path="/services" element={<Service />} /> {/* Service Page Route */}
          <Route path="/team" element={<TeamHome />} />
          <Route path="/contact" element={<ContactHome />} />
      

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
