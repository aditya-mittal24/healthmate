import React, { useState, useEffect } from "react";
import Layout from "../../UI/Layout";
import HalfDonutChart from "./components/HalfDonutChart";
import { useAuth } from "../useAuth";
import axios from "axios";

function Dashboard() {
  const [userData, setUserData] = useState({
    user: {
      first_name: "",
      last_name: "",
    },
    profile: {
      age: null,
      weight: null,
      aadhar_no: "",
      height: null,
      bmi: null,
    },
  });
  const { getToken } = useAuth();
  const user_id = getToken();
  useEffect(() => {
    // Function to fetch user data from the API
    const getUser = async () => {
      try {
        const url = "http://localhost:8000/api/get-user/" + user_id;
        const response = await axios.get(url);
        const data = response.data;
        setUserData(data);
      } catch (err) {
        console.log(err.message);
      }
    };

    getUser();
  }, []);
  const userBMI = userData.profile.bmi;
  return (
    <Layout>
      <h1 className="font-semibold text-xl">Dashboard</h1>
      <div className="grid grid-cols-2 gap-x-80 p-4 justify-around">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex flex-col gap-y-6 w-full">
            <p>
              <span className="font-semibold">First Name:</span>{" "}
              {userData.user.first_name}
            </p>
            <p>
              <span className="font-semibold">Last Name:</span>{" "}
              {userData.user.last_name}
            </p>
            <p>
              <span className="font-semibold">Age:</span> {userData.profile.age}
            </p>
            <p>
              <span className="font-semibold">Blood Group:</span>{" "}
              {userData.profile.blood_group}
            </p>
            <p>
              <span className="font-semibold">Weight:</span>{" "}
              {userData.profile.weight} kg
            </p>
            <p>
              <span className="font-semibold">Height:</span>{" "}
              {userData.profile.height} cm
            </p>
            <p>
              <span className="font-semibold">Aadhar Number:</span>{" "}
              {userData.profile.aadhar_no}
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col items-center">
          <h2 className="text-lg">BMI</h2>
          <HalfDonutChart userBMI={userBMI} />
          <h2 className="relative top-[-130px]">{userData.profile.bmi}</h2>
          {/* Other dashboard components */}
        </div>
      </div>
    </Layout>
  );
}

export default Dashboard;
