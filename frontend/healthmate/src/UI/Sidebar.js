import { NavLink, useLocation } from "react-router-dom";
import { AiTwotoneAppstore } from "react-icons/ai";
import { RiHealthBookFill } from "react-icons/ri";
import { FaLaptopMedical } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import React, { useEffect, useState } from "react";

const SideBar = () => {
  const routeLinks = [
    {
      icon: <AiTwotoneAppstore />,
      display: "Dashboard",
      to: "/",
    },
    {
      icon: <RiHealthBookFill />,
      display: "Medical Records",
      to: "/medical-records",
    },
    {
      icon: <FaLaptopMedical/>,
      display: "Diabetes Prediction",
      to: "/diabetes-prediction",
    },
    {
      icon: <MdLogout />,
      display: "Logout",
      to: "/logout",
    },
  ];
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const currentPath = location.pathname;
    setActiveLink(currentPath);
  }, [location]);

  function getCurrentDateTime() {
    const weekd = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
    const month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    let today = new Date();
    let currentDateTime =
      weekd[today.getDay()] +
      " " +
      String(today.getDate()).padStart(2, "0") +
      "-" +
      month[today.getMonth()] +
      "-" +
      today.getFullYear() +
      " " +
      String(today.getHours()).padStart(2, "0") +
      ":" +
      String(today.getMinutes()).padStart(2, "0") +
      ":" +
      String(today.getSeconds()).padStart(2, "0");
    return currentDateTime;
  }

  return (
    <>
      <ul className="space-y-4">
        {routeLinks.map((routeItem, index) => {
          return (
            <li key={index}>
              <NavLink
                key={index}
                to={routeItem.to}
                className={`flex gap-4 px-2 items-center font-medium text-[0.94rem] whitespace-nowrap ${
                  activeLink === routeItem.to
                    ? "border-red-500 border-x-[3px] text-[#212832]"
                    : "text-[#212832] font-normal"
                }`}
              >
                {React.cloneElement(routeItem.icon, {
                  color: activeLink === routeItem.to ? "#B91C1C" : "#69707a",
                  size: activeLink === routeItem.to ? 20 : 16,
                })}
                <span>{routeItem.display}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>

      <div className="bg-[#f4f4f5] flex flex-col justify-center items-start gap-1 color-[#69707a] text-xs p-3 font-normal self-end">
        {/* <p>RA12340030105678</p>
        <p>DR PRADEEP S</p> */}
        <p className="color-[#212832] font-medium text-sm">
          {getCurrentDateTime()}
        </p>
      </div>
    </>
  );
};

export default SideBar;
