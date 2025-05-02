import React from 'react';

const TestimonialCard = ({ initials, name, role, text }) => (
  <div className="mb-8">
    <div className="flex items-center mb-4">
      <div className="w-12 h-12 rounded-full bg-[#0A2647] flex items-center justify-center text-white mr-4">
        <span className="text-xl font-bold">{initials}</span>
      </div>
      <div>
        <h4 className="font-bold">{name}</h4>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
    <p className="text-gray-600 italic">"{text}"</p>
    <div className="flex text-[#C5A572] mt-2">
      {[...Array(5)].map((_, i) => <i key={i} className="fas fa-star" />)}
    </div>
  </div>
);

export default TestimonialCard;