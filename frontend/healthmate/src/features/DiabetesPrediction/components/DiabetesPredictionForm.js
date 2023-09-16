import React, { useState } from "react";
import axios from "axios";
import PredictionModal from "./PredictionModal";

const DiabetesPredictionForm = () => {
  const [formData, setFormData] = useState({
    gender: 0,
    age: "",
    hypertension: 0,
    heart_disease: 0,
    smoking_history: 0,
    bmi: "",
    avg_blood_sugar_level: "",
    blood_glucose_level: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [predictionResult, setPredictionResult] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Implement form submission logic here
    e.preventDefault();

    try {
      // Make a POST request to the prediction API endpoint
      const response = await axios.post(
        "http://localhost:8000/api/predict-diabetes/",
        formData
      );
      // Set the prediction result based on the API response
      setPredictionResult(response.data.prediction);
      setIsModalOpen(true);
    } catch (error) {
      // Handle errors, e.g., display an error message
      console.error("Prediction failed:", error);
      // You can set an error state or display an error message to the user
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPredictionResult(null);
  };

  return (
    <div className="mx-auto p-6 w-[50%] bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-semibold text-center mb-4">
        Diabetes Prediction
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="gender" className="block mb-2">
            Gender
          </label>
          <select
            name="gender"
            id="gender"
            value={formData.gender}
            onChange={handleInputChange}
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
          >
            <option value={0}>Male</option>
            <option value={1}>Female</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="age" className="block mb-2">
            Age
          </label>
          <input
            type="number"
            name="age"
            id="age"
            value={formData.age}
            onChange={handleInputChange}
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="hypertension" className="block mb-2">
            Hypertension
          </label>
          <select
            name="hypertension"
            id="hypertension"
            value={formData.hypertension}
            onChange={handleInputChange}
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
          >
            <option value={1}>Yes</option>
            <option value={0}>No</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="heart_disease" className="block mb-2">
            Heart Disease
          </label>
          <select
            name="heart_disease"
            id="heart_disease"
            value={formData.heart_disease}
            onChange={handleInputChange}
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
          >
            <option value={1}>Yes</option>
            <option value={0}>No</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="smoking_history" className="block mb-2">
            Smoking History
          </label>
          <select
            name="smoking_history"
            id="smoking_history"
            value={formData.smoking_history}
            onChange={handleInputChange}
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
          >
            <option value={0}>Never</option>
            <option value={1}>Former Smoker</option>
            <option value={2}>Frequent Smoker</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="bmi" className="block mb-2">
            BMI
          </label>
          <input
            type="number"
            name="bmi"
            id="bmi"
            value={formData.bmi}
            onChange={handleInputChange}
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="avg_blood_sugar_level" className="block mb-2">
            Avg Blood Sugar Level (HbA1c Level)
          </label>
          <input
            type="number"
            name="avg_blood_sugar_level"
            id="avg_blood_sugar_level"
            value={formData.avg_blood_sugar_level}
            onChange={handleInputChange}
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="blood_glucose_level" className="block mb-2">
            Blood Glucose Level
          </label>
          <input
            type="number"
            name="blood_glucose_level"
            id="blood_glucose_level"
            value={formData.blood_glucose_level}
            onChange={handleInputChange}
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Predict
        </button>
        {/* Display prediction result */}
        {isModalOpen && (
        <PredictionModal prediction={predictionResult} onClose={closeModal} />
      )}
      </form>
    </div>
  );
};

export default DiabetesPredictionForm;
