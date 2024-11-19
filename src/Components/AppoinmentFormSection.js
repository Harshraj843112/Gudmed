import React from 'react';

const AppoinmentFormSection = () => {
  return (
    <div className="bg-white py-10">
      <div className="container mx-auto px-4">

        {/* Heading Section */}
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-8">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">

          {/* Form Section */}
          <div className="bg-white rounded-lg p-8 shadow-md">
            <form className="grid grid-cols-1 gap-6">
              {/* Name and Email Fields */}
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              {/* Phone Field */}
              <div>
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              {/* Message Field */}
              <div>
                <textarea
                  placeholder="Write Your Message Here....."
                  rows="4"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                ></textarea>
              </div>

              {/* Submit Button and Confirmation Note */}
              <div className="flex justify-between items-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Submit
                </button>
                <p className="text-gray-500 text-sm">
                  ( We will get back to you shortly )
                </p>
              </div>
            </form>
          </div>

          {/* Full-Width Video Section with Left Margin */}
          <div className="flex items-center justify-center w-full object-cover lg:ml-6">
            <iframe
              className="w-full h-64 lg:h-full"
              src="https://www.youtube.com/embed/NUHPtQ3n6vQ"
              title="How GudMed Works?"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppoinmentFormSection;
