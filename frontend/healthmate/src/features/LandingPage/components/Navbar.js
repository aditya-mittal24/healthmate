import React from 'react'
import logo from "./../../../assets/finallogo.jpg"
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  let navigate = useNavigate()
  return (
    <><nav className="py-2 px-4 bg-Cyan-950 text-black font text-lg flex justify-between">
        
    <div className="flex items-center">
        
        
        <img src={logo} alt="" className="w-[30px]"/>
        <span className="text-lg font-normal">
            Health<span className="text-red-700">Mate</span>
          </span>
    </div>
    
        <ul className="px-20 py-4 flex space-x-11 justify-end">    
        <li className="cursor-pointer  hover:border-b-2 hover:border-black" > Home </li>
        <li className="cursor-pointer  hover:border-b-2 hover:border-black"> <a href="#service">About</a>  </li>
        <li className="cursor-pointer  hover:border-b-2 hover:border-black"> <a href="#reviews">Reviews</a> </li>
        <li className="cursor-pointer  hover:border-b-2 hover:border-black"> <a href="#footer">Contact Us</a> </li>
    </ul>
    <div className="flex gap-x-3 items-center">
        <button onClick={()=>{navigate("/register")}} className="bg-white border border-red-500 p-2 text-base rounded-xl  text-red-500 hover:bg-red-500 w-[80px] hover:text-white ">Sign Up</button>
        <button onClick={()=>{navigate("/login")}} className="bg-red-500 p-2 rounded-xl text-base text-white hover:bg-white hover:text-red-500 border border-red-500 w-[80px]">Login</button>
        
    </div>
</nav>
<hr/></>
  )
}

export default Navbar