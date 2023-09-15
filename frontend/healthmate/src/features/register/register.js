import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: "",
    height: "",
    weight: "",
    blood_group: "",
    aadhar_no: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    // Add form validation logic here if needed

    try {
      // Send a POST request to the registration API endpoint using Axios
      const data = {
        first_name: formData.first_name,
        last_name: formData.last_name,
        username: formData.email,
        email: formData.email,
        password: formData.password,
        profile: {
          age: formData.age,
          height: formData.height,
          weight: formData.weight,
          blood_group: formData.blood_group,
          aadhar_no: formData.aadhar_no,
        },
      };
      const response = await axios.post(
        "http://localhost:8000/api/register/",
        data
      );

      if (response.status === 201) {
        return navigate("/login");
      }
    } catch (error) {
      // Handle registration errors, e.g., if the username or email is already taken
      setErrorMessage("User already exists");
      console.error("Registration failed:", error.response.data);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Register for HealthMate
          </h2>
        </div>
        {errorMessage ? (
          <h2 className="text-red-700 py-1 px-2 rounded-md bg-[#F8D7D9]">
            {errorMessage}
          </h2>
        ) : (
          ""
        )}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="first_name" className="sr-only">
                  First Name
                </label>
                <input
                  id="first_name"
                  name="first_name"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="First Name"
                  value={formData.first_name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="last_name" className="sr-only">
                  Last Name
                </label>
                <input
                  id="last_name"
                  name="last_name"
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Last Name"
                  value={formData.last_name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="sr-only">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="age" className="sr-only">
                  Age
                </label>
                <input
                  id="age"
                  name="age"
                  type="number"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Age"
                  value={formData.age}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="height" className="sr-only">
                  Height (in cm)
                </label>
                <input
                  id="height"
                  name="height"
                  type="number"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Height (in cm)"
                  value={formData.height}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="weight" className="sr-only">
                  Weight
                </label>
                <input
                  id="weight"
                  name="weight"
                  type="number"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Weight"
                  value={formData.weight}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="blood_group" className="sr-only">
                  Blood Group
                </label>
                <select
                  id="blood_group"
                  name="blood_group"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  value={formData.blood_group}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select Blood Group
                  </option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="aadhar_no" className="sr-only">
                Aadhar Number
              </label>
              <input
                id="aadhar_no"
                name="aadhar_no"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Aadhar Number"
                value={formData.aadhar_no}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
