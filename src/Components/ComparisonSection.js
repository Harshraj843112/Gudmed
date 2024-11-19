import React from 'react';

const ComparisonSection = () => {
  const comparisonData = [
    {
      aspect: "Prescription Handling",
      other: "Stores xerox/digital copies of handwritten prescriptions without full digitization",
      gudmed: "Fully digitizes handwritten prescriptions and converts data into a digital format",
    },
    {
      aspect: "Data Accessibility",
      other: "Limited to viewing scanned or xeroxed copies",
      gudmed: "Provides structured, searchable data, allowing easy access to individual prescription details",
    },
    {
      aspect: "Data Usability",
      other: "Minimal usability for analytics or processing",
      gudmed: "Enables analytics, easy access, and integration for various use cases, such as patient engagement and follow-ups",
    },
    {
      aspect: "Integration Capability",
      other: "Limited due to storage of image files rather than structured data",
      gudmed: "High integration capability with other hospital systems, pharmacies, and labs",
    },
    {
      aspect: "Operational Efficiency",
      other: "Provides a basic digital record but does not improve workflow significantly",
      gudmed: "Improves operational efficiency through automated reminders, real-time pharmacy updates, and lab test offerings",
    },
    {
      aspect: "Patient Engagement",
      other: "Limited engagement; does not facilitate reminders or follow-up actions",
      gudmed: "Engages patients with reminders for medication, follow-up appointments, and lab test notifications",
    },
    {
      aspect: "Document Format",
      other: "Retains original handwriting in an image format",
      gudmed: "Converts prescription to a digital text format, making it easier to use and share electronically",
    },
    {
      aspect: "Technology Benefits",
      other: "Provides a basic digitization solution, often for record-keeping",
      gudmed: "Offers real-time benefits, reducing discharge times and enhancing patient care post-treatment",
    },
    {
      aspect: "Data Security",
      other: "Stores data as images, often without structured data safeguards",
      gudmed: "Offers structured, securely managed data without third-party sharing",
    },
  ];

  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-8 lg:px-16">
      <h2 className="text-4xl font-bold text-blue-800 text-center mb-10">
        Comparison between Other Technologies vs GudMed Technology
      </h2>
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="table-auto border-collapse w-full bg-white rounded-lg">
          <thead className="bg-blue-600 text-white text-sm">
            <tr>
              <th className="border border-blue-700 px-6 py-3 text-left font-semibold">Aspect</th>
              <th className="border border-blue-700 px-6 py-3 text-left font-semibold">Other Technology</th>
              <th className="border border-blue-700 px-6 py-3 text-left font-semibold">GudMed Technology</th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((item, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } hover:bg-blue-50 transition-colors duration-300`}
              >
                <td className="border border-gray-300 px-6 py-4 text-blue-800 font-medium">{item.aspect}</td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700">{item.other}</td>
                <td className="border border-gray-300 px-6 py-4 text-gray-700">{item.gudmed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ComparisonSection;