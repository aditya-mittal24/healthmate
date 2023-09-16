import React from "react";
import logo from "./../../../assets/finallogo.jpg";

const Footer = () => {
  return (
    <footer id="footer" class="py-8 px-4 bg-gradient-to-b from-white to-red-300 text-black font  justify-between">
      <div class="flex items-center justify-between pl-4">
        <span class="flex">
          <img src={logo} alt="" class="w-[30px]" />
          <span class="text-2xl font-base">
            Health<span class="text-red-500 ">Mate</span>
          </span>
        </span>
        <span>
          {" "}
          <a class="cursor-pointer pr-5 font-bold" href="landing.html">
            Return to top &#8593
          </a>
        </span>
      </div>

      <div
        class="grid grid-cols-1
    lg:grid-cols-3 lg:gap-3 justify-items-center mt-5"
      >
        <div class="text-left">
          <h1 class="text-lg font-semibold pb-5 ">
            {" "}
            <a href=""> ABOUT</a>
          </h1>
          <ul class="text-sm">
            <li class="py-4 ">
              <a class=" hover:border-b-2 hover:border-red-500" href="">
                Privacy Policy
              </a>
            </li>
            <li class="py-4">
              <a class=" hover:border-b-2 hover:border-red-500" href="">
                Terms Of Use
              </a>
            </li>
            <li class="py-4">
              <a class=" hover:border-b-2 hover:border-red-500" href="">
                Your Privacy Rights
              </a>
            </li>
            <li class="py-4">
              <a class=" hover:border-b-2 hover:border-red-500" href="">
                Our Company
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h1 class="text-lg font-semibold pb-5">
            <a href=""> CONTACT</a>
          </h1>
          <ul class="text-sm">
            <li class="py-4">
              <a class=" hover:border-b-2 hover:border-red-500" href="">
                Customer Service
              </a>
            </li>
            <li class="py-4">
              <a class=" hover:border-b-2 hover:border-red-500" href="">
                Contact Us
              </a>
            </li>
            <li class="py-4">
              <a class=" hover:border-b-2 hover:border-red-500" href="">
                Your Privacy Right
              </a>
            </li>
            <li class="py-4">
              <a class=" hover:border-b-2 hover:border-red-500" href="">
                Our Company
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h1 class="text-lg font-semibold pb-5">
            <a href=""> CONNECT</a>
          </h1>
          <ul class="text-sm">
            <li class="py-4">
              <a class=" hover:border-b-2 hover:border-red-500" href="">
                Email
              </a>
            </li>
            <li class="py-4">
              <a class=" hover:border-b-2 hover:border-red-500" href="">
                Facebook
              </a>
            </li>
            <li class="py-4">
              <a class=" hover:border-b-2 hover:border-red-500" href="">
                Twitter
              </a>
            </li>
            <li class="py-4">
              <a class=" hover:border-b-2 hover:border-red-500" href="">
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="text-center">
        <p> &#169 2023 Team BroCode- Aditya, Achlendu, Vishal, Farhan</p>
      </div>
    </footer>
  );
};

export default Footer;
