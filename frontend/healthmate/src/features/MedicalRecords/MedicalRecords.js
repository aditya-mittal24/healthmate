import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../UI/Layout";
import { useAuth } from "../useAuth";

const MedicalRecords = () => {
  const { getToken } = useAuth();
  const user_id = getToken();
  const [records, setRecords] = useState([]);
  const [formData, setFormData] = useState({
    date_recorded: "",
    sugar_level: "",
    blood_pressure: "",
  });

  // Function to fetch and update the list of health records
  const fetchRecords = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/health-record/" + user_id + "/"
      ); // Replace with your API endpoint
      setRecords(response.data);
    } catch (error) {
      console.error("Error fetching health records:", error);
    }
  };

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Function to handle health record submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:8000/api/health-record/" + user_id + "/",
        formData
      ); // Replace with your API endpoint
      fetchRecords(); // Refresh the list of health records
      setFormData({
        date_recorded: "",
        sugar_level: "",
        blood_pressure: "",
      });
    } catch (error) {
      console.error("Error adding health record:", error);
    }
  };

  // Fetch health records when the component mounts
  useEffect(() => {
    fetchRecords();
  }, []);

  return (
    <Layout>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-semibold mb-4">Medical Records</h1>

        {/* Health Record Form */}
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-1/3 px-3 mb-6">
              <label
                htmlFor="date_recorded"
                className="block text-gray-600 font-semibold mb-2"
              >
                Date Recorded
              </label>
              <input
                type="date"
                id="date_recorded"
                name="date_recorded"
                value={formData.date_recorded}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6">
              <label
                htmlFor="sugar_level"
                className="block text-gray-600 font-semibold mb-2"
              >
                Sugar Level
              </label>
              <input
                type="number"
                id="sugar_level"
                name="sugar_level"
                value={formData.sugar_level}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6">
              <label
                htmlFor="blood_pressure"
                className="block text-gray-600 font-semibold mb-2"
              >
                Blood Pressure
              </label>
              <input
                type="text"
                id="blood_pressure"
                name="blood_pressure"
                value={formData.blood_pressure}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="bg-red-400 text-white px-4 py-2 rounded-md hover:bg-red-500 focus:outline-none"
            >
              Add Health Record
            </button>
          </div>
        </form>

        {/* Health Record Table */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Health Records</h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto bg-white shadow-md rounded-lg">
              <thead className="bg-red-400 text-white">
                <tr>
                  <th className="px-4 py-2">Date Recorded</th>
                  <th className="px-4 py-2">Sugar Level</th>
                  <th className="px-4 py-2">Blood Pressure</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 text-center py-6">
                {records.map((record) => (
                  <tr key={record.id}>
                    <td className="px-4 py-4">{record.date_recorded}</td>
                    <td className="px-4 py-4">{record.sugar_level}</td>
                    <td className="px-4 py-4">{record.blood_pressure}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MedicalRecords;
