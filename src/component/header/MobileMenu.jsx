import React from 'react';

const MobileMenu = ({ isOpen }) => (
  isOpen && (
    <div className="md:hidden bg-white shadow-lg">
      <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
        {['Home', 'About', 'Services', 'Why Choose Us', 'Contact'].map((item) => (
          <a key={item} href="#" className="text-gray-700 hover:text-[#C5A572] transition-colors duration-300 cursor-pointer">
            {item}
          </a>
        ))}
        <button className="bg-[#C5A572] text-white px-5 py-2 rounded-lg hover:bg-[#b3945f] transition-colors duration-300 shadow-md">
          Schedule Consultation
        </button>
      </div>
    </div>
  )
);

export default MobileMenu;