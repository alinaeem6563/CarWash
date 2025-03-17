import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Testimonial() {
  return (
    <section className="max-w-5xl mx-2 border border-solid flex flex-col justify-center items-center sm:mx-auto  my-12 py-8 px-4">
      <div className="w-full flex justify-center">
        <hr className="w-1/6 bg-[#40fda1] sm:mt-3 mt-2 mx-2" />
        <h3 className=" text-[#40fda1]  sm:text-xl text-xs">
          OUR CUSTOMER LOVE US
        </h3>
        <hr className="w-1/6 bg-[#40fda1] sm:mt-3 mt-2 mx-2" />
      </div>
      <h1 className="sm:text-left text-center text-3xl sm:text-5xl  text-white font-bold  mt-1">
        Testimonials
      </h1>

      <section className="flex sm:flex-row flex-col gap-3 my-6">
        <section className="flex flex-row gap-3 justify-center items-center">
          <div className="text-white px-3 py-8 bg-gradient-to-t from-[#6e91fd] to-[#3965f8]">
            <div className="text-left">
              <FontAwesomeIcon
                icon={faStar}
                className="text-yellow-400  mx-1"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="text-yellow-400  mx-1"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="text-yellow-400  mx-1"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="text-yellow-400  mx-1"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="text-yellow-400  mx-1"
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur blanditiis itaque at facere modi provident quos
              Consectetur blanditiis itaque at facere modi provident quos.
            </p>
            <div className="flex flex-row justify-start ">
              <img src="./src/images/team-4.png" className="w-1/6" alt="" />
              <div className="my-auto ">
                <h4 className="text-base font-bold ">Victor Elmann</h4>
                <p className="text-sm">Customer</p>
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-row gap-3 justify-center items-center">
          <div className="text-white px-3 py-8 bg-gradient-to-t from-[#6e91fd] to-[#3965f8]">
            <div className="text-left">
              <FontAwesomeIcon
                icon={faStar}
                className="text-yellow-400  mx-1"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="text-yellow-400  mx-1"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="text-yellow-400  mx-1"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="text-yellow-400  mx-1"
              />
              <FontAwesomeIcon
                icon={faStar}
                className="text-yellow-400  mx-1"
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur blanditiis itaque at facere modi provident quos
              Consectetur blanditiis itaque at facere modi provident quos.
            </p>
            <div className="flex flex-row justify-start ">
              <img src="./src/images/team-1.png" className="w-1/6" alt="" />
              <div className="my-auto ">
                <h4 className="text-base font-bold ">Sarah Solis</h4>
                <p className="text-sm">Customer</p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}
