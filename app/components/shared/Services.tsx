import React from 'react'
// import pharmacy from "../../../public/pharmacy.jpg"

const services = [
  "Janitorial Service",
  "Office Cleaning",
  "Day Porter",
  "Carpet Cleaning",
  "Post Construction",
  "Hard Floor Care",
  "Window Washing",
  "Power Washing",
  "Healthcare Service",
  "National Accounts",
];

// const serviceImages = [
//   "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
//   "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
//   "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c",
//   "https://cleanroom.com.au/7-important-ways-to-prevent-cleanroom-contamination",
// ];

const serviceImages = [
  "/pharmacy.jpg",
  "/hardfloor.jpg",
  "/grocery.png",
  "/office.jpeg"
];

export default function ServicesSection() {
  return (
    <section className="py-16 px-6 bg-white scroll-mt-23" id="services">
      {/* Header */}
      <div className="text-center mb-10">
        <p className="text-green-600 font-semibold tracking-widest text-xl mb-2">
          SERVICES
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight float-right">
          Commercial Cleaning Services That Keep Business Moving
        </h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          From day-to-day janitorial support to specialized care, we deliver
          cleaning programs built around your facility, standards, and schedule.
        </p>
      </div>


      {/* summary of the servcies we provide  */}
      {/* Service Preview Images */}
        <div className="max-w-6xl mx-auto px-6 mb-12">
        <div className="flex flex-col md:flex-row gap-4">
            {serviceImages.map((src, i) => (
            <div
                key={i}
                className="flex-1 h-56 overflow-hidden rounded-xl shadow-sm"
            >
                <img
                src={src}
                alt="Service preview"
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
            </div>
            ))}
        </div>
        </div>
      
      
      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 max-w-6xl mx-auto">
        {services.map((item, i) => (
          <div
            key={i}
            className="bg-green-50 hover:bg-green-100 transition rounded-xl h-28 flex items-center justify-center text-center px-4 shadow-sm"
          >
            <span className="text-gray-800 font-semibold font-bold text-sm md:text-base">
              {item}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}