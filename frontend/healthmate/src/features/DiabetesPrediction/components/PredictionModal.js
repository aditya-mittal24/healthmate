import React from 'react';

const PredictionModal = ({ prediction, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex bg-black bg-opacity-20 items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
      <div className="relative w-auto max-w-md mx-auto my-6">
        {/* Modal content */}
        <div className="relative p-12 bg-white rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Prediction Result</h2>
          <p className="text-blue-500">{prediction}</p>
          <button
            onClick={onClose}
            className="absolute top-0 right-0 mt-1 mr-1 text-gray-500 cursor-pointer hover:text-gray-700 focus:outline-none"
          >
            <span>&times;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PredictionModal;
