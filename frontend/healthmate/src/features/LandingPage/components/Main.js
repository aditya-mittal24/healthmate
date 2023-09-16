import React from "react";
import main from "./../../../assets/bgmain1.png";
import { useNavigate } from "react-router-dom";

const Main = () => {
  let navigate = useNavigate()
  return (
    <main className="bg-gradient-to-r from-white to-red-300 flex justify-around">
      <div className="flex w-2/3">
        <div className="main  py-40 pl-9">
          <div className="text-6xl">
            Charting Your Path to Wellness: Diabetes Prognosis Made Easy
          </div>
          <p className="w-1/2 py-6">
            At our diabetes prediction website, we're dedicated to making health
            management accessible to everyone. We offer a user-friendly
            interface that allows you to input your health data confidentially,
            receive accurate predictions, and access a wealth of educational
            resources to guide you on your wellness journey."
          </p>
          <div className="my-4 space-x-5">
            <button onClick={()=>{navigate("/register")}} className="bg-white border border-red-500 p-2 text-base rounded-xl  text-red-500 hover:bg-red-500 w-[80px] hover:text-white ">
              Sign Up
            </button>
            <button onClick={()=>{navigate("/register")}} className="bg-red-500 p-2 rounded-xl text-base text-white hover:bg-white hover:text-red-500 border border-red-500 w-[80px]">
              Login
            </button>
          </div>
        </div>
      </div>
      <div className="flex items-center ">
        <img src={main} alt="" className="h-96 pr-8" />
      </div>
    </main>
  );
};

export default Main;
