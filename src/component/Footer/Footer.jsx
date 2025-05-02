// components/Footer/Footer.jsx
import React from 'react';

const Footer = () => (
  <footer className="bg-[#0A2647] text-white py-16">
<div className="container mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
<div>
<h3 className="text-2xl font-serif font-bold mb-6">Olu Junaid <span className="text-[#C5A572]">&</span> Company</h3>
<p className="text-gray-300 mb-6">
Premium accounting and auditing services tailored to meet your business needs.
</p>
<div className="flex space-x-4">
<a href="#" className="text-gray-300 hover:text-[#C5A572] transition-colors duration-300 cursor-pointer">
<i className="fab fa-facebook-f"></i>
</a>
<a href="#" className="text-gray-300 hover:text-[#C5A572] transition-colors duration-300 cursor-pointer">
<i className="fab fa-twitter"></i>
</a>
<a href="#" className="text-gray-300 hover:text-[#C5A572] transition-colors duration-300 cursor-pointer">
<i className="fab fa-linkedin-in"></i>
</a>
<a href="#" className="text-gray-300 hover:text-[#C5A572] transition-colors duration-300 cursor-pointer">
<i className="fab fa-instagram"></i>
</a>
</div>
</div>
<div>
<h3 className="text-xl font-bold mb-6">Quick Links</h3>
<ul className="space-y-3">
<li><a href="#" className="text-gray-300 hover:text-[#C5A572] transition-colors duration-300 cursor-pointer">Home</a></li>
<li><a href="#" className="text-gray-300 hover:text-[#C5A572] transition-colors duration-300 cursor-pointer">About Us</a></li>
<li><a href="#" className="text-gray-300 hover:text-[#C5A572] transition-colors duration-300 cursor-pointer">Services</a></li>
<li><a href="#" className="text-gray-300 hover:text-[#C5A572] transition-colors duration-300 cursor-pointer">Testimonials</a></li>
<li><a href="#" className="text-gray-300 hover:text-[#C5A572] transition-colors duration-300 cursor-pointer">Contact</a></li>
</ul>
</div>
<div>
<h3 className="text-xl font-bold mb-6">Our Services</h3>
<ul className="space-y-3">
<li><a href="#" className="text-gray-300 hover:text-[#C5A572] transition-colors duration-300 cursor-pointer">Auditing</a></li>
<li><a href="#" className="text-gray-300 hover:text-[#C5A572] transition-colors duration-300 cursor-pointer">Financial Accounting</a></li>
<li><a href="#" className="text-gray-300 hover:text-[#C5A572] transition-colors duration-300 cursor-pointer">Tax Consulting</a></li>
<li><a href="#" className="text-gray-300 hover:text-[#C5A572] transition-colors duration-300 cursor-pointer">Payroll Services</a></li>
<li><a href="#" className="text-gray-300 hover:text-[#C5A572] transition-colors duration-300 cursor-pointer">Financial Advisory</a></li>
</ul>
</div>
<div>
<h3 className="text-xl font-bold mb-6">Newsletter</h3>
<p className="text-gray-300 mb-4">
Subscribe to our newsletter for the latest updates and insights.
</p>
<form className="mb-4">
<div className="flex">
<input
type="email"
placeholder="Your email address"
className="px-4 py-2 w-full rounded-l-lg focus:outline-none text-gray-800"
/>
<button
type="submit"
className="bg-[#C5A572] text-white px-4 py-2 rounded-r-lg hover:bg-[#b3945f] transition-colors duration-300 whitespace-nowrap cursor-pointer"
>
Subscribe
</button>
</div>
</form>
<div className="flex items-center space-x-4">
<div className="text-[#C5A572]">
<i className="fab fa-cc-visa text-2xl"></i>
</div>
<div className="text-[#C5A572]">
<i className="fab fa-cc-mastercard text-2xl"></i>
</div>
<div className="text-[#C5A572]">
<i className="fab fa-cc-paypal text-2xl"></i>
</div>
</div>
</div>
</div>
<div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
<p className="text-gray-400 text-sm mb-4 md:mb-0">
&copy; {new Date().getFullYear()} Olu Junaid & Company. All rights reserved.
</p>
<div className="flex space-x-6">
<a href="#" className="text-gray-400 text-sm hover:text-[#C5A572] transition-colors duration-300 cursor-pointer">Privacy Policy</a>
<a href="#" className="text-gray-400 text-sm hover:text-[#C5A572] transition-colors duration-300 cursor-pointer">Terms of Service</a>
<a href="#" className="text-gray-400 text-sm hover:text-[#C5A572] transition-colors duration-300 cursor-pointer">Cookie Policy</a>
</div>
</div>
</div>
</footer>
);

export default Footer;