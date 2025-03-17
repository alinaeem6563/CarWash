import React, { useState } from "react";

export default function Navbar() {
  const [sideNav, setSideNav] = useState(false);
  return (
    <>
    <header className="w-4/5  mx-auto mt-10 justify-between flex flex-col">
      <section className=" hidden  md:block bg-white text-slate-900">
        <nav
          className="sm:text-base text-xl min-w-full md:flex justify-between"
          aria-label="full-screen"
        >
          <div className="bg-[#051f42] h-0  w-1/6  mb-4 border-t-[35px] border-r-[20px] border-r-white border-t-transparent   ">
            <br />
          </div>

          <a
            href="#home"
            className="p-3  mx-auto hover:bg-[#051f42]   hover:text-white"
          >
            Home
          </a>
          <a
            href="#services"
            className="p-3  mx-auto hover:bg-[#051f42] hover:text-white"
          >
            Services
          </a>
          <a
            href="#about"
            className="p-3  mx-auto hover:bg-[#051f42] hover:text-white"
          >
            About
          </a>
          <a
            href="#page"
            className="p-3  mx-auto hover:bg-[#051f42] hover:text-white"
          >
            Page
          </a>
          <a
            href="#blog"
            className="p-3  mx-auto hover:bg-[#051f42] hover:text-white"
          >
            Blog
          </a>
          <a
            href="#contact"
            className="p-3  mx-auto hover:bg-[#051f42] hover:text-white"
          >
            Contact
          </a>
          <button className="hover:opacity-90 py-3 bg-[#051f42] md:text-xs text-xl w-1/4 mr-5 text-white">
            MAKE APPOINTMENT
          </button>
        </nav>
      </section>
      <section className="ml-auto ">
        <button className=" md:hidden  text-white text-5xl hover:border border-white rounded-2xl p-2">
          {sideNav ? (
            <span onClick={() => setSideNav(!sideNav)}>&times;</span>
          ) : (
            <span className="text-4xl" onClick={() => setSideNav(!sideNav)}>
              &#9776;
            </span>
          )}
        </button>
      </section>
    </header>
      <section
        className={`md:hidden block bg-white font-serif max-w-4xl  min-h-screen  text-3xl item-center trans ${
          sideNav ? "block" : "hidden"
        }`}
      >
        <nav className="flex flex-col  " aria-label="mobile-menu">
          <a
            href="#home"
            onClick={() => setSideNav(!sideNav)}
            className="mt-2 p-3 text-center w-full  hover:bg-[#051f42] hover:border border-blue-600 rounded-2xl hover:text-white"
          >
            Home
          </a>
          <a
            href="#services"
            onClick={() => setSideNav(!sideNav)}
            className=" p-3 text-center w-full  hover:bg-[#051f42] hover:border border-blue-600 rounded-2xl hover:text-white"
          >
            Services
          </a>
          <a
            href="#about"
            onClick={() => setSideNav(!sideNav)}
            className=" p-3 text-center w-full  hover:bg-[#051f42] hover:border border-blue-600 rounded-2xl hover:text-white"
          >
            About
          </a>
          <a
            href="#page"
            onClick={() => setSideNav(!sideNav)}
            className=" p-3 text-center w-full  hover:bg-[#051f42] hover:border border-blue-600 rounded-2xl hover:text-white"
          >
            Page
          </a>
          <a
            href="#blog"
            onClick={() => setSideNav(!sideNav)}
            className=" p-3 text-center w-full  hover:bg-[#051f42] hover:border border-blue-600 rounded-2xl hover:text-white"
          >
            Blog
          </a>
          <a
            href="#contact"
            onClick={() => setSideNav(!sideNav)}
            className=" p-3 text-center w-full  hover:bg-[#051f42] hover:border border-blue-600 rounded-2xl hover:text-white"
          >
            Contact
          </a>
        </nav>
      </section>
      </>
  );
}
