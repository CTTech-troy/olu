// components/common/Button.jsx
import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const variants = {
    primary: 'bg-[#C5A572] text-white hover:bg-[#b3945f]',
    outline: 'bg-transparent border-2 border-white text-white hover:bg-white/10'
  };

  return (
    <button
      className={`px-5 py-2 rounded-lg transition-colors duration-300 shadow-md ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;