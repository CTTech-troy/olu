import React from 'react';

const HeroBadges = () => (
  <div className="absolute bottom-8 left-0 right-0 flex justify-center">
    <div className="bg-white/10 backdrop-blur-sm px-8 py-4 rounded-lg flex items-center gap-6">
      {['Certified', 'Trusted', '5-Star Rated'].map((text, index) => (
        <div key={text} className="text-white text-center">
          <i className={`fas ${
            index === 0 ? 'fa-award' : 
            index === 1 ? 'fa-shield-alt' : 'fa-star'
          } text-[#C5A572] text-2xl mb-2`}></i>
          <p className="text-sm font-medium">{text}</p>
        </div>
      ))}
    </div>
  </div>
);

export default HeroBadges;