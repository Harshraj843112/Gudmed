import React from 'react';
import AmountCard from './AmountCard';
import OfferContentSection from '../Common/OfferContentSection';
import SectionImg from "../../img/section-img.png"
const AmountSection = () => {
  const amountData = [
    {
      icon: '✂️',
      title: 'Plastic Surgery',
      price: 199,
      items: [
        'Lorem Ipsum Dolor Sit',
        'Cubitur Sollicitudin Fentum',
        'Nullam Interdum Enim',
        'Donec Ultricies Metus',
        'Pellentesque Eget Nibh',
      ],
      isAvailable: [true, true, false, false, false],
    },
    {
      icon: '🦷',
      title: 'Teeth Whitening',
      price: 299,
      items: [
        'Lorem Ipsum Dolor Sit',
        'Cubitur Sollicitudin Fentum',
        'Nullam Interdum Enim',
        'Donec Ultricies Metus',
        'Pellentesque Eget Nibh',
      ],
      isAvailable: [true, true, true, false, false],
    },
    {
      icon: '❤️',
      title: 'Heart Surgery',
      price: 399,
      items: [
        'Lorem Ipsum Dolor Sit',
        'Cubitur Sollicitudin Fentum',
        'Nullam Interdum Enim',
        'Donec Ultricies Metus',
        'Pellentesque Eget Nibh',
      ],
      isAvailable: [true, true, true, true, true],
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
        <div className="mt-20 px-4 lg:px-0"> {/* Added padding for better spacing on smaller screens */}
      <OfferContentSection
        titleDesktop="We Offer Different Services To <br> Improve Your Health" // Title for desktop
        titleMobile="We Offer Different Services To Improve Your Health" // Title for mobile
        imageSrc={SectionImg} // Using the imported image
        descriptionDesktop="Lorem ipsum dolor sit amet consectetur adipiscing elit. <br /> Praesent aliquet pretiumts." // Description for desktop
        descriptionMobile="Lorem ipsum dolor sit amet consectetur adipiscing elit. Praesent aliquet pretiumts." // Description for mobile without <br />
      />
    </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {amountData.map((data, index) => (
            <AmountCard
              key={index}
              icon={data.icon}
              title={data.title}
              price={data.price}
              items={data.items}
              isAvailable={data.isAvailable}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmountSection;
