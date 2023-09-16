import React, { Fragment, useState } from "react";
import Sidebar from "./Sidebar";
import { FaSignOutAlt, FaBars } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import logo from "../assets/download.png";
import { useAuth } from "../features/useAuth";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Navbar = ({ children }) => {
  const { logout } = useAuth();
  const [sidebar, setSidebar] = useState(true);
  let navigate = useNavigate();

  function handleClick() {
    setSidebar(!sidebar);
  }
  const handleLogout = async () => {
    try {
      await axios.post("http://localhost:8000/api/logout/");
      logout();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <Fragment>
      <div className="fixed w-full flex items-center bg-white z-30 drop-shadow">
        <div className="order-last lg:order-first">
          <button
            onClick={handleClick}
            className="rounded-full p-3 text-gray-500 text-sm hover:bg-gray-200"
          >
            <FaBars />
          </button>
        </div>
        <div className="flex justify-between w-full py-2.5 px-3 items-center">
          <div className="flex text-xs gap-1 items-center font-bold">
            <img src={logo} className="w-[30px]" alt="" />
            <span className="text-lg font-normal">
              Health<span className="text-red-700">Mate</span>
            </span>
          </div>
          <div className="flex justify-between items-center">
            <button className="text-center px-5 py-1 rounded-md cursor-pointer hover:bg-gray-100 flex flex-col justify-center items-center">
              <BsPersonCircle />
              <p className="text-sm font-medium">Account</p>
            </button>
            <button
              onClick={handleLogout}
              className="text-center px-5 py-1 rounded-md cursor-pointer hover:bg-gray-100 flex flex-col justify-center items-center"
            >
              <FaSignOutAlt />
              <p className="text-sm font-medium">Logout</p>
            </button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div
          className={
            sidebar
              ? "fixed grid row-span-2 left-[-100%] lg:left-0 top-0 pt-20 w-60 z-10 border-0 h-full drop-shadow-lg bg-white ease-in-out duration-500"
              : "fixed grid row-span-2 left-0 lg:left-[-100%] top-0 pt-20 w-60 z-10 border-0 h-full drop-shadow-lg bg-white ease-in-out duration-500"
          }
        >
          <Sidebar />
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
