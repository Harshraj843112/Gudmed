import React from 'react';
import KnowledgePartnerItem from './KnowldgePartnerItem'; // Corrected the component import
import OfferContentSection from '../Common/OfferContentSection';

// Import local images
import Image1 from '../../img/Google.png';
import Image2 from '../../img/IIT BOMABAY.png';
import Image3 from '../../img/IITIndore.png';

const KnowledgePartnerCardSection = () => {
  const cards = [
    {
      title: 'GOOGLE',
      image: Image1,
    },
    {
      title: 'IIT BOMBAY',
      image: Image2,
    },
    {
      title: 'IIT INDORE',
      image: Image3,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mt-20 px-4 lg:px-0">
        <OfferContentSection
          titleDesktop="Our Knowledge Partners" // Updated title for desktop
          titleMobile="Our Knowledge Partners" // Updated title for mobile
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <KnowledgePartnerItem
            key={index}
            title={card.title}
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
};

export default KnowledgePartnerCardSection;
