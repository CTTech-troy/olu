// src/components/About/About.jsx
import React from 'react';

const About = () => (
  <section className="py-20 bg-[#0A2647] text-white">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif font-bold mb-6">About Our Company</h2>
        <p className="text-lg max-w-3xl mx-auto">
          Founded in 2000, Olu Junaid & Company has established itself as a premier accounting and
          auditing firm, dedicated to providing exceptional financial services to businesses across Nigeria.
          Our commitment to excellence and client success has made us a trusted partner for organizations
          seeking to optimize their financial operations and achieve sustainable growth.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="text-center p-8 bg-[#0a3060] rounded-lg">
          <i className="fas fa-users text-[#C5A572] text-4xl mb-4"></i>
          <h3 className="text-xl font-bold mb-4">Expert Team</h3>
          <p className="text-gray-300">
            Our team consists of certified professionals with extensive experience in accounting,
            auditing, and financial advisory services.
          </p>
        </div>

        <div className="text-center p-8 bg-[#0a3060] rounded-lg">
          <i className="fas fa-chart-line text-[#C5A572] text-4xl mb-4"></i>
          <h3 className="text-xl font-bold mb-4">Proven Track Record</h3>
          <p className="text-gray-300">
            With over two decades of success, we have helped numerous businesses achieve their
            financial goals and maintain compliance.
          </p>
        </div>

        <div className="text-center p-8 bg-[#0a3060] rounded-lg">
          <i className="fas fa-globe text-[#C5A572] text-4xl mb-4"></i>
          <h3 className="text-xl font-bold mb-4">Global Standards</h3>
          <p className="text-gray-300">
            We adhere to international accounting standards and best practices to deliver
            world-class financial services.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default About;