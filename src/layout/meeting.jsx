import React, { useState } from 'react';
import Header from '../component/header/newHeader';
import ConsultationForm from '../component/ConsultationForm/ConsultationForm';
import { ExpectationList, ContactInfo, WhyChooseUs } from '../component/sidebar/sidebar';
import Footer from '../component/Footer/Footer';
import SuccessModal from '../component/model/model';

const Meeting = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    timeSlot: '',
    serviceCategory: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM'];  // Example times
  const serviceCategories = ['Auditing', 'Financial Accounting', 'Consulting'];  // Example categories

  // Input change handler
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Checkbox change handler (if you need checkboxes)
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };

  // Service selection handler
  const handleServiceSelection = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    let formErrors = {};
    if (!formData.name) formErrors.name = 'Name is required';
    if (!formData.email) formErrors.email = 'Email is required';
    if (!formData.timeSlot) formErrors.timeSlot = 'Time slot is required';
    if (!formData.serviceCategory) formErrors.serviceCategory = 'Service category is required';

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccessModal(true);
    }, 2000);
  };

  // Get tomorrow's date (simple example)
  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toLocaleDateString();
  };

  return (
    <div className="min-h-screen font-sans text-gray-800">
      <Header />
      
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#0A2647] mb-4">
              Schedule a Consultation
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <ConsultationForm
              formData={formData}
              errors={errors}
              isSubmitting={isSubmitting}
              timeSlots={timeSlots}
              serviceCategories={serviceCategories}
              handleInputChange={handleInputChange}
              handleCheckboxChange={handleCheckboxChange}
              handleServiceSelection={handleServiceSelection}
              handleSubmit={handleSubmit}
              getTomorrowDate={getTomorrowDate}
            />

            <div className="lg:col-span-1">
              <ExpectationList />
              <ContactInfo />
              <WhyChooseUs />
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <SuccessModal show={showSuccessModal} onClose={() => setShowSuccessModal(false)} />
    </div>
  );
};

export default Meeting;
