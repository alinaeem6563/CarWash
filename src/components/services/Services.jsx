import React from "react";

export default function Services() {
  return (
    <section id="services" className="max-w-3/4 scroll-m-10 flex flex-col mx-2">
      <div className="flex justify-center sm:justify-start">
        <h3 className=" text-cyan-300  sm:text-xl text-sm">WHAT WE DO</h3>
        <hr className="w-1/6 bg-cyan-300 mt-3.5 mx-2" />
      </div>
      <h1 className="sm:text-left text-center text-4xl sm:text-5xl  text-white font-bold  mt-1">
        Our Services
      </h1>
      <section className="max-w-5xl justify-center items-center my-6 p-3 flex flex-wrap  sm:flex-row flex-col gap-6">
        <div className=" sm:w-1/3 w-1/2 text-center text-white  p-2">
        <div className="relative">
          <img
            className="rounded-2xl w-full h-48 object-cover "
            src="./src/images/car-wash-1.jpg"
            style={{
              clipPath: "polygon(0 0, 85% 0, 100% 15%, 100% 100%, 0% 100%)",
           }}
            alt="Exterior-Wash"
          />
          <div className="absolute  inset-0 bg-gradient-to-b  from-[#07a3fe0a] to-[#0d95fda1]"></div></div>
          <h3 className="md:text-base text-xl font-medium">Exterior Wash</h3>
          <button className="sm:text-sm text-xs text-cyan-300 underline">
            SEE DETAILS
          </button>
        </div>
        <div className=" sm:w-1/3 w-1/2 text-center text-white  p-2">
        <div className="relative">
          <img
            className="rounded-2xl w-full h-48 object-cover "
            src="./src/images/car-wash-2.jpg"
            style={{
              clipPath: "polygon(0 0, 85% 0, 100% 15%, 100% 100%, 0% 100%)",
           }}
            alt="Exterior-Wash"
          />
          <div className="absolute  inset-0 bg-gradient-to-b  from-[#07a3fe0a] to-[#0d95fda1]"></div></div>
          <h3 className="md:text-base text-xl font-medium">Exterior Wash</h3>
          <button className="sm:text-sm text-xs text-cyan-300 underline">
            SEE DETAILS
          </button>
        </div>
        <div className=" sm:w-1/3 w-1/2 text-center text-white  p-2">
        <div className="relative">
          <img
            className="rounded-2xl w-full h-48 object-cover "
            src="./src/images/car-wash-3.jpg"
            style={{
              clipPath: "polygon(0 0, 85% 0, 100% 15%, 100% 100%, 0% 100%)",
           }}
            alt="Exterior-Wash"
          />
          <div className="absolute  inset-0 bg-gradient-to-b  from-[#07a3fe0a] to-[#0d95fda1]"></div></div>
          <h3 className="md:text-base text-xl font-medium">Full Service Wash</h3>
          <button className="sm:text-sm text-xs text-cyan-300 underline">
            SEE DETAILS
          </button>
        </div>
        <div className=" sm:w-1/3 w-1/2 text-center text-white  p-2">
        <div className="relative">
          <img
            className="rounded-2xl w-full h-48 object-cover "
            src="./src/images/car-wash-4.jpg"
            style={{
              clipPath: "polygon(0 0, 85% 0, 100% 15%, 100% 100%, 0% 100%)",
           }}
            alt="Exterior-Wash"
          />
          <div className="absolute  inset-0 bg-gradient-to-b  from-[#07a3fe0a] to-[#0d95fda1]"></div></div>
          <h3 className="md:text-base text-xl font-medium">Interior Super Clean</h3>
          <button className="sm:text-sm text-xs text-cyan-300 underline">
            SEE DETAILS
          </button>
        </div>
        <div className=" sm:w-1/3 w-1/2 text-center text-white  p-2">
        <div className="relative">
          <img
            className="rounded-2xl w-full h-48 object-cover "
            src="./src/images/car-wash-5.jpg"
            style={{
              clipPath: "polygon(0 0, 85% 0, 100% 15%, 100% 100%, 0% 100%)",
           }}
            alt="Exterior-Wash"
          />
          <div className="absolute  inset-0 bg-gradient-to-b  from-[#07a3fe0a] to-[#0d95fda1]"></div></div>
          <h3 className="md:text-base text-xl font-medium">Extra Goodies</h3>
          <button className="sm:text-sm text-xs text-cyan-300 underline">
            SEE DETAILS
          </button>
        </div>
        <div className=" sm:w-1/3 w-1/2 text-center text-white  p-2">
        <div className="relative">
          <img
            className="rounded-2xl w-full h-48 object-cover "
            src="./src/images/car-wash-6.jpg"
            style={{
              clipPath: "polygon(0 0, 85% 0, 100% 15%, 100% 100%, 0% 100%)",
           }}
            alt="Exterior-Wash"
          />
          <div className="absolute  inset-0 bg-gradient-to-b  from-[#07a3fe0a] to-[#0d95fda1]"></div></div>
          <h3 className="md:text-base text-xl font-medium">Carpet Shampoo</h3>
          <button className="sm:text-sm text-xs text-cyan-300 underline">
            SEE DETAILS
          </button>
        </div>
        
      </section>
    </section>
  );
}
