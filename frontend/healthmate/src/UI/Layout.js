import React from "react";
import Navbar from "./Navbar";

function Layout({children}) {
  return (
    <main className="w-full h-screen min-h-screen">
      <Navbar></Navbar>
      <div
        className={
          "h-full min-h-screen w-full pl-[18%] overflow-scroll px-8 py-[80px] bg-[#e6ecf2] ease-in-out duration-500"
        }
      >
        {children}
      </div>
    </main>
  );
}

export default Layout;
