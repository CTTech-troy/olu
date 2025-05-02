import React from 'react';

const ServiceCard = ({ title, icon, description }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2 cursor-pointer">
    <div className="h-40 bg-[#0A2647] flex items-center justify-center">
      <i className={`fas ${icon} text-[#C5A572] text-5xl`}></i>
    </div>
    <div className="p-8">
      <h3 className="text-2xl font-serif font-bold text-[#0A2647] mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <a href="#" className="text-[#C5A572] font-medium hover:text-[#b3945f] inline-flex items-center">
        Learn More <i className="fas fa-arrow-right ml-2"></i>
      </a>
    </div>
  </div>
);

export default ServiceCard;