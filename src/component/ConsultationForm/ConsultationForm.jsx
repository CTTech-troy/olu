import React, { useState } from 'react';

const ConsultationForm = ({
  timeSlots,
  serviceCategories,
  handleSubmit,
}) => {
  // State for form data and errors
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    serviceCategory: [],
    additionalInfo: '',
    agreeToTerms: false,
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Get tomorrow's date for min date validation
  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0]; // 'YYYY-MM-DD' format
  };

  // Handle changes in text inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle changes in checkbox inputs
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
  };

  // Handle service selection (checkboxes)
  const handleServiceSelection = (service) => {
    setFormData((prevData) => {
      const updatedServices = prevData.serviceCategory.includes(service)
        ? prevData.serviceCategory.filter((item) => item !== service)
        : [...prevData.serviceCategory, service];
      return { ...prevData, serviceCategory: updatedServices };
    });
  };

  // Validation function
  const validate = () => {
    const validationErrors = {};
    if (!formData.fullName) validationErrors.fullName = 'Full name is required.';
    if (!formData.email) validationErrors.email = 'Email is required.';
    if (!formData.phone) validationErrors.phone = 'Phone number is required.';
    if (!formData.preferredDate) validationErrors.preferredDate = 'Preferred date is required.';
    if (!formData.preferredTime) validationErrors.preferredTime = 'Preferred time is required.';
    if (!formData.serviceCategory.length) validationErrors.serviceCategory = 'At least one service must be selected.';
    if (!formData.agreeToTerms) validationErrors.agreeToTerms = 'You must agree to the terms and conditions.';
    return validationErrors;
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrors({});

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    // Call the parent handleSubmit (you can replace this with API call or any submission logic)
    handleSubmit(formData)
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div className="lg:col-span-2">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <form onSubmit={handleFormSubmit}>
          <h2 className="text-2xl font-serif font-bold text-[#0A2647] mb-6">Your Information</h2>
          
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label htmlFor="fullName" className="block text-gray-700 font-medium mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C5A572] focus:border-transparent text-sm`}
                placeholder="Enter your full name"
              />
              {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C5A572] focus:border-transparent text-sm`}
                placeholder="Enter your email address"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C5A572] focus:border-transparent text-sm`}
                placeholder="Enter your phone number"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>
          </div>

          {/* Consultation Details */}
          <h2 className="text-2xl font-serif font-bold text-[#0A2647] mb-6">Consultation Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label htmlFor="preferredDate" className="block text-gray-700 font-medium mb-2">
                Preferred Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                id="preferredDate"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleInputChange}
                min={getTomorrowDate()}
                className={`w-full px-4 py-3 border ${errors.preferredDate ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C5A572] focus:border-transparent text-sm`}
              />
              {errors.preferredDate && <p className="text-red-500 text-sm mt-1">{errors.preferredDate}</p>}
            </div>
            <div>
              <label htmlFor="preferredTime" className="block text-gray-700 font-medium mb-2">
                Preferred Time <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border ${errors.preferredTime ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C5A572] focus:border-transparent text-sm appearance-none`}
                >
                  <option value="">Select a time slot</option>
                  {timeSlots.map((time) => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                  <i className="fas fa-chevron-down text-gray-500"></i>
                </div>
              </div>
              {errors.preferredTime && <p className="text-red-500 text-sm mt-1">{errors.preferredTime}</p>}
            </div>
          </div>

          {/* Service Selection */}
          <h2 className="text-2xl font-serif font-bold text-[#0A2647] mb-6">Services Interested In</h2>
          <div className="mb-8">
            <p className="text-gray-700 font-medium mb-3">
              Select Services <span className="text-red-500">*</span> <span className="text-sm text-gray-500">(Select all that apply)</span>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {serviceCategories.map((service) => (
                <div key={service} className="flex items-center">
                  <input
                    type="checkbox"
                    id={service.replace(/\s+/g, '-').toLowerCase()}
                    checked={formData.serviceCategory.includes(service)}
                    onChange={() => handleServiceSelection(service)}
                    className="w-5 h-5 text-[#C5A572] border-gray-300 rounded focus:ring-[#C5A572]"
                  />
                  <label
                    htmlFor={service.replace(/\s+/g, '-').toLowerCase()}
                    className="ml-2 text-gray-700 cursor-pointer"
                  >
                    {service}
                  </label>
                </div>
              ))}
            </div>
            {errors.serviceCategory && <p className="text-red-500 text-sm mt-1">{errors.serviceCategory}</p>}
          </div>

          {/* Additional Information */}
          <h2 className="text-2xl font-serif font-bold text-[#0A2647] mb-6">Additional Information</h2>
          <div className="mb-8">
            <label htmlFor="additionalInfo" className="block text-gray-700 font-medium mb-2">
              Please describe your financial needs or questions
            </label>
            <textarea
              id="additionalInfo"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#C5A572] focus:border-transparent text-sm"
              placeholder="Enter additional information (optional)"
              rows="4"
            ></textarea>
          </div>

          {/* Terms and Conditions */}
          <div className="mb-8">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={formData.agreeToTerms}
                onChange={handleCheckboxChange}
                className="w-5 h-5 text-[#C5A572] border-gray-300 rounded focus:ring-[#C5A572]"
              />
              <span className="ml-2 text-sm text-gray-700">
                I agree to the <a href="/terms" className="text-[#C5A572] underline">terms and conditions</a> <span className="text-red-500">*</span>
              </span>
            </label>
            {errors.agreeToTerms && <p className="text-red-500 text-sm mt-1">{errors.agreeToTerms}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full py-3 text-white bg-[#C5A572] rounded-lg focus:outline-none ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Processing...' : 'Schedule Consultation'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConsultationForm;
