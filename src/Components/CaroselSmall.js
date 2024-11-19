// DoctorsCarousel.js
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const doctors = [
    {
        image: require('../img/Dr-Anurag-Agarwal_edited_edited.png'),
        name: "Dr. Anurag Agarwal",
        title: "Senior Consultant, NHS, UK",
        description: "Dr. Agarwal has been involved in the evolution of primary health services in the UK with extensive knowledge of healthcare delivery challenges."
    },
    {
        image: require('../img/Dr-Ved-Prakash.png'),
        name: "Dr. Ved Prakash",
        title: "Ex-Director, AIIMS, New Delhi",
        description: "Neurosurgeon with over 40 years in healthcare. Ex-Deputy Director of Medical Services, Indian Army."
    },
    {
        image: require('../img/Dr-Swati-Singh.png'),
        name: "Dr. Swati Singh",
        title: "Consultant Onco-Surgeon",
        description: "Multi-Gold Medalist from LHMC, Delhi, with specialization in Onco-surgery and healthcare process improvement."
    },
    {
        image: require('../img/MC-Misra.png'),
        name: "Prof. MC Misra",
        title: "Ex-Director, AIIMS, New Delhi",
        description: "With over 40 years at AIIMS, he led the transformation and digitization efforts at AIIMS, Delhi."
    },
    {
        image: require('../img/Dr manish pant.jpg'),
        name: "Dr. Manish Pant",
        title: "Chief, Health and Governance, UNDP, India",
        description: "Preventive & Social Medicine specialist, ex-WHO advisor, and creator of the COWIN platform for immunization and COVID vaccination."
    }
];

const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3, partialVisibilityGutter: 40 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2, partialVisibilityGutter: 30 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1, partialVisibilityGutter: 30 },
};

const DoctorsCarousel = () => {
    return (
        <div className="w-full mt-20">
            <h2 className="text-4xl font-bold text-center mt-12 mb-10">Our Advisory Board</h2>
            <Carousel
                autoPlay
                autoPlaySpeed={5000} // Slow speed for smooth scrolling
                infinite
                responsive={responsive}
                draggable
                swipeable
                showDots
                containerClass="carousel-container"
                itemClass="carousel-item-padding-40-px"
                transitionDuration={1000} // Smooth transition duration
            >
                {doctors.map((doctor, index) => (
                    <div key={index} className="w-10/12 mx-auto bg-white p-6 rounded-lg shadow-lg group hover:shadow-xl transition duration-300 ease-in-out">
                        <div className="w-full h-64 flex justify-center items-center mb-4"> {/* Adjusted container height */}
                            <img
                                src={doctor.image}
                                alt={doctor.name}
                                className="w-full h-full object-contain rounded-lg" // object-contain prevents cropping
                            />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">{doctor.name}</h3>
                        <p className="text-gray-600 font-medium">{doctor.title}</p>
                        <p className="text-gray-500 mt-2 text-sm leading-relaxed">{doctor.description}</p>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default DoctorsCarousel;