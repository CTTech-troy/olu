import React from 'react';
import TestimonialCard from './TestimonialCard';

const WhyChooseUs = () => (
  <section className="py-20 bg-white">
  <div className="container mx-auto px-6">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
  <div>
  <h2 className="text-4xl font-serif font-bold text-[#0A2647] mb-6">Why Choose Us</h2>
  <p className="text-lg text-gray-600 mb-10">
  With decades of experience and a commitment to excellence, we deliver unparalleled financial services
  that help our clients achieve their business objectives.
  </p>
  <div className="grid grid-cols-2 gap-8">
  <div className="text-center">
  <div className="text-[#C5A572] text-5xl font-bold mb-2">25+</div>
  <p className="text-gray-600">Years of Experience</p>
  </div>
  <div className="text-center">
  <div className="text-[#C5A572] text-5xl font-bold mb-2">500+</div>
  <p className="text-gray-600">Satisfied Clients</p>
  </div>
  <div className="text-center">
  <div className="text-[#C5A572] text-5xl font-bold mb-2">1200+</div>
  <p className="text-gray-600">Projects Completed</p>
  </div>
  <div className="text-center">
  <div className="text-[#C5A572] text-5xl font-bold mb-2">15+</div>
  <p className="text-gray-600">Professional Certifications</p>
  </div>
  </div>
  </div>
  <div className="bg-[#F5F5F5] p-8 rounded-lg shadow-lg">
  <h3 className="text-2xl font-serif font-bold text-[#0A2647] mb-6">What Our Clients Say</h3>
  <div className="mb-8">
  <div className="flex items-center mb-4">
  <div className="w-12 h-12 rounded-full bg-[#0A2647] flex items-center justify-center text-white mr-4">
  <span className="text-xl font-bold">JD</span>
  </div>
  <div>
  <h4 className="font-bold">John Doe</h4>
  <p className="text-sm text-gray-500">CEO, Tech Innovations</p>
  </div>
  </div>
  <p className="text-gray-600 italic">
  "Olu Junaid & Company has transformed our financial operations. Their expertise and
  attention to detail have been invaluable to our business growth."
  </p>
  <div className="flex text-[#C5A572] mt-2">
  <i className="fas fa-star"></i>
  <i className="fas fa-star"></i>
  <i className="fas fa-star"></i>
  <i className="fas fa-star"></i>
  <i className="fas fa-star"></i>
  </div>
  </div>
  <div>
  <div className="flex items-center mb-4">
  <div className="w-12 h-12 rounded-full bg-[#0A2647] flex items-center justify-center text-white mr-4">
  <span className="text-xl font-bold">SJ</span>
  </div>
  <div>
  <h4 className="font-bold">Sarah Johnson</h4>
  <p className="text-sm text-gray-500">CFO, Global Enterprises</p>
  </div>
  </div>
  <p className="text-gray-600 italic">
  "Working with Olu Junaid & Company has been a game-changer for our financial strategy.
  Their team's professionalism and expertise are second to none."
  </p>
  <div className="flex text-[#C5A572] mt-2">
  <i className="fas fa-star"></i>
  <i className="fas fa-star"></i>
  <i className="fas fa-star"></i>
  <i className="fas fa-star"></i>
  <i className="fas fa-star"></i>
  </div>
  </div>
  <div className="flex justify-center mt-8">
  <button className="bg-[#0A2647] text-white px-6 py-2 rounded-button hover:bg-[#0a3060] transition-colors duration-300 shadow-md whitespace-nowrap cursor-pointer">
  View All Testimonials
  </button>
  </div>
  </div>
  </div>
  </div>
  </section>
  
);

export default WhyChooseUs;