import React from 'react';
import HeroBadges from './HeroBadges';

const Hero = () => (
  <section className="relative h-screen flex items-center">
<div className="absolute inset-0 overflow-hidden">
<img
src="https://readdy.ai/api/search-image?query=professional%20business%20meeting%20with%20executives%20in%20modern%20office%20setting%2C%20elegant%20corporate%20environment%20with%20financial%20documents%20and%20charts%2C%20soft%20natural%20lighting%2C%20premium%20atmosphere%2C%20navy%20blue%20and%20gold%20color%20scheme%2C%20professional%20setting&width=1920&height=1080&seq=1&orientation=landscape"
alt="Financial professionals in meeting"
className="w-full h-full object-cover object-top"
/>
<div className="absolute inset-0 bg-gradient-to-r from-[#0A2647]/90 to-[#0A2647]/70"></div>
</div>
<div className="container mx-auto px-6 relative z-10">
<div className="max-w-3xl">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-6">
Excellence in <span className="text-[#C5A572]">Financial Services</span>
</h1>
<p className="text-xl text-white/90 mb-8">
Professional accounting, auditing, tax consulting, and financial advisory services
tailored to elevate your business to new heights.
</p>
<div className="flex flex-col sm:flex-row gap-4">
<a href="https://readdy.ai/home/e1d0f666-b06a-47ea-90a1-2361e0720a90/e0547f7f-ee84-4886-8ff7-6eb63d0f1d96" data-readdy="true">
<button className="bg-[#C5A572] text-white px-8 py-3 rounded-button hover:bg-[#b3945f] transition-colors duration-300 shadow-lg text-lg font-medium whitespace-nowrap cursor-pointer">
Schedule Consultation
</button>
</a>
<button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-button hover:bg-white/10 transition-colors duration-300 text-lg font-medium whitespace-nowrap cursor-pointer">
Our Services
</button>
</div>
</div>
</div>
<div className="absolute bottom-8 left-0 right-0 flex justify-center">
<div className="bg-white/10 backdrop-blur-sm px-8 py-4 rounded-lg flex items-center gap-6">
<div className="text-white text-center">
<i className="fas fa-award text-[#C5A572] text-2xl mb-2"></i>
<p className="text-sm font-medium">Certified</p>
</div>
<div className="text-white text-center">
<i className="fas fa-shield-alt text-[#C5A572] text-2xl mb-2"></i>
<p className="text-sm font-medium">Trusted</p>
</div>
<div className="text-white text-center">
<i className="fas fa-star text-[#C5A572] text-2xl mb-2"></i>
<p className="text-sm font-medium">5-Star Rated</p>
</div>
</div>
</div>
</section>
);


export default Hero;