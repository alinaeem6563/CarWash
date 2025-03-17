import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Footer() {
  return (
    <>
    <footer className="bg-[#051f42] max-5xl flex sm:flex-row flex-col text-white justify-center items-center">
      <section>
        <div className=" text-white w-full flex justify-center pt-6">
          <hr className="w-1/6 bg-white sm:mt-3 mt-2 mx-2" />
          <h3 className="  sm:text-xl text-[8px]">Follow us on</h3>
          <hr className="w-1/6 bg-white sm:mt-3 mt-2 mx-2" />
        </div>
        <div className=" w-full flex flex-row justify-center pt-3 pb-6 ">
          <FontAwesomeIcon icon={faFacebookF} className="mx-2" />
          <FontAwesomeIcon icon={faTwitter} className="mx-2" />
          <FontAwesomeIcon icon={faYoutube} className="mx-2" />
          <FontAwesomeIcon icon={faInstagram} className="mx-2" />
        </div>
        <nav
          className="sm:text-base text-xl min-w-full hidden flex-row md:flex justify-between pt-6 pb-12"
          aria-label="footer"
        >
          <a href="#home" className="p-3  mx-auto  hover:text-white">
            Home
          </a>
          <a href="#services" className="p-3  mx-auto  hover:text-white">
            Services
          </a>
          <a href="#about" className="p-3  mx-auto  hover:text-white">
            About
          </a>
          <a href="#page" className="p-3  mx-auto  hover:text-white">
            Page
          </a>
          <a href="#blog" className="p-3  mx-auto  hover:text-white">
            Blog
          </a>
          <a href="#contact" className="p-3  mx-auto  hover:text-white">
            Contact
          </a>
        </nav>
        
      </section>
      
    </footer>
    <div class="py-3 bg-[#151515] text-white">
    <p class="text-center text-xs">
      Copyright &copy; <span id="year">2024 | All Rights Reserved</span>
    </p>
  </div>
  </>
  );
}
