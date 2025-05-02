import React from 'react';

export const ExpectationList = () => (
  <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
    <h2 className="text-2xl font-serif font-bold text-[#0A2647] mb-6">What to Expect</h2>
    <ul className="space-y-4">
      {[
        { icon: 'check', title: 'Initial Assessment', text: "We'll evaluate your current financial situation and goals." },
        { icon: 'lightbulb', title: 'Strategic Planning', text: 'Our experts will develop tailored financial strategies.' },
        { icon: 'handshake', title: 'Implementation Support', text: "We'll guide you through implementation." },
        { icon: 'chart-line', title: 'Ongoing Monitoring', text: 'Regular check-ins to ensure effectiveness.' }
      ].map((item, index) => (
        <li key={index} className="flex items-start">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0A2647] flex items-center justify-center text-white mr-3">
            <i className={`fas fa-${item.icon} text-sm`}></i>
          </div>
          <div>
            <h3 className="font-bold text-gray-800">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.text}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export const ContactInfo = () => (
  <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
    <h2 className="text-2xl font-serif font-bold text-[#0A2647] mb-6">Contact Information</h2>
    <div className="space-y-4">
      {[
        { icon: 'map-marker-alt', title: 'Office Address', text: 'Km 3, Fajol, Obantoko, Abeokuta–Ibadan Road...' },
        { icon: 'envelope', title: 'Email', text: 'olujunaidandco@gmail.com' },
        { icon: 'phone-alt', title: 'Phone', text: '+234 123 456 7890' },
        { icon: 'clock', title: 'Office Hours', text: 'Monday - Friday: 9:00 AM - 5:00 PM' }
      ].map((item, index) => (
        <div key={index} className="flex items-start">
          <div className="text-[#C5A572] text-xl mr-4 mt-1">
            <i className={`fas fa-${item.icon}`}></i>
          </div>
          <div>
            <h3 className="font-bold text-gray-800">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const WhyChooseUs = () => (
  <div className="bg-[#0A2647] rounded-lg shadow-lg p-8 text-white">
    <h2 className="text-2xl font-serif font-bold mb-6">Why Choose Us</h2>
    <div className="space-y-4">
      {[
        '25+ years of financial expertise',
        'Certified financial professionals',
        'Personalized service approach',
        'Confidential and secure process'
      ].map((text, index) => (
        <div key={index} className="flex items-center">
          <i className={`fas fa-${['star', 'certificate', 'user-tie', 'shield-alt'][index]} text-[#C5A572] mr-3`}></i>
          <p>{text}</p>
        </div>
      ))}
    </div>
  </div>
);