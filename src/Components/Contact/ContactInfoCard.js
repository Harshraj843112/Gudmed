import React from 'react';

const ContactInfoCard = ({ icon, title, content }) => (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center transform transition-transform hover:scale-105">
        <div className="text-blue-600 text-4xl mb-4">{icon}</div>
        <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
        <p className="text-gray-600 mt-2">{content}</p>
    </div>
);

export default ContactInfoCard;
