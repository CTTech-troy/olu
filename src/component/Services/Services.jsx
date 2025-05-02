import React from 'react';
import ServiceCard from './ServicesCard';
import servicesData from './servicesData';

const Services = () => (
  <section className="py-20 bg-[#F5F5F5]" id='Services'>
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif font-bold text-[#0A2647] mb-4">Our Premium Services</h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We provide comprehensive financial solutions tailored to meet your business needs.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  </section>
);

export default Services;