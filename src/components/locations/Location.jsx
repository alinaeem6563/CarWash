import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Location() {
  return (
    <>
      <section
        id="location"
        className="max-w-5xl scroll-m-10 flex flex-col mx-2"
      >
        <div>
          <div className="flex justify-center sm:justify-start">
            <h3 className=" text-[#40fda1]  sm:text-xl text-sm">LOCATIONS</h3>
            <hr className="w-1/6 bg-[#40fda1] mt-3 mx-2" />
          </div>
          <h1 className="sm:text-left text-center text-3xl sm:text-5xl  text-white font-bold  mt-1">
            Car Washing and Care Points
          </h1>
        </div>
        <section className="text-white flex  sm:flex-row flex-col gap-3 sm:justify-start ">
          <div className="flex-wrap  flex-row  flex w-full justify-center items-center gap-3">
            <div className="basis-1/2 sm:basis-1/3  bg-gradient-to-t from-[#6e91fd] to-[#3263fd] flex flex-row border p-3  mt-6 sm:w-1/4 w-1/2">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-white py-2 px-2 rounded-full bg-black mx-2"
              />
              <div>
                <h4 className="sm:text-xl  text-base mb-2">ORLANDO</h4>
                <p className="text-sm">
                  5599 Lake margaret drive orlando,FL 32822
                </p>
              </div>
            </div>
            <div className="basis-1/2 sm:basis-1/3  bg-gradient-to-t from-[#6e91fd] to-[#3263fd] flex flex-row border p-3  mt-6 sm:w-1/4 w-1/2">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-white  py-2 px-2 rounded-full bg-black mx-2"
              />
              <div>
                <h4 className=" sm:text-xl text-base  mb-2">SOUTH FLORIDA</h4>
                <p className="text-sm">
                  5599 Lake margaret drive orlando,FL 32822
                </p>
              </div>
            </div>
            <div className="basis-1/2 sm:basis-1/3 bg-gradient-to-t from-[#6e91fd] to-[#3263fd] flex flex-row border p-3  mt-6 sm:w-1/4 w-1/2">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-white  py-2 px-2 rounded-full bg-black mx-2"
              />
              <div>
                <h4 className=" sm:text-xl text-base  mb-2">INDIANA</h4>
                <p className="text-sm">
                  5599 Lake margaret drive orlando,FL 32822
                </p>
              </div>
            </div>
            <div className="basis-1/2 sm:basis-1/3 bg-gradient-to-t from-[#6e91fd] to-[#3263fd] flex flex-row border p-3  mt-6 sm:w-1/4 w-1/2">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="text-white  py-2 px-2 rounded-full bg-black mx-2"
              />
              <div>
                <h4 className=" sm:text-xl text-base  mb-2">HOUSTON</h4>
                <p className="text-sm">
                  5599 Lake margaret drive orlando,FL 32822
                </p>
              </div>
            </div>
          </div>
          <section className="justify-center items-center flex  flex-col mx-auto my-2 sm:w-1/2 px-4  bg-[#051f42]">
            <h3 className="text-center sm:text-3xl w-full text-2xl font-bold my-6 text-white ">
              Apply for a car wash
            </h3>
            <form action="">
              <input
                type="text"
                className="w-full my-2 p-1"
                placeholder="Name"
              />
              <input
                type="text"
                className="w-full my-2 p-1"
                placeholder="Phone Name"
              />
              <input
                type="date"
                className="w-1/3 my-2 mr-12 p-1"
                placeholder="Date"
              />
              <input
                type="time"
                className="w-1/3   my-2  p-1"
                placeholder="Time"
              />
              <button className="px-7 py-2 mb-12 w-full bg-[#eb3743] text-white">
                SEND REQUEST
              </button>
            </form>
          </section>
        </section>
      </section>
    </>
  );
}
