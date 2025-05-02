import React from 'react';

const SuccessModal = ({ show, onClose }) => (
  show && (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <div className="text-center">
          <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
            <i className="fas fa-check text-green-500 text-2xl"></i>
          </div>
          <h2 className="text-2xl font-serif font-bold text-[#0A2647] mb-2">Consultation Scheduled!</h2>
          <button
            onClick={onClose}
            className="bg-[#C5A572] text-white px-6 py-2 rounded-button hover:bg-[#b3945f] transition-colors duration-300 shadow-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
);

export default SuccessModal;