import React from "react";
import { BiSolidBuildingHouse, BiSolidCctv } from "react-icons/bi";
import { FaSquarespace } from "react-icons/fa";
import { RiSofaFill } from "react-icons/ri";
const FeatureApartment = () => {
  return (
    <div>
      <section className="p-4 lg:p-8 ">
        <div className="my-6">
          <h1 className="text-3xl font-abel text-center">FEATURES</h1>
          <div className="divider divider-neutral lg:mx-36 mx-4 my-10 ">
            <BiSolidBuildingHouse size={68} className="text-indigo-600 w-28 " />
          </div>
        </div>
        <div className="container mx-auto ">
          <div className="flex flex-col overflow-hidden rounded-t-md shadow-sm lg:flex-row">
            <img
              src="https://i.ibb.co.com/jvr1Cff/lobby.jpg"
              alt=""
              className="h-80 dark:bg-gray-500 aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-green-100">
              <h3 className="flex gap-3 text-4xl font-abel font-bold dark:text-gray-800">
                <FaSquarespace size={44} className="text-pink-800" />
                Luxurious Lobby
              </h3>
              <p className="my-6 dark:text-gray-600 text-xl">
                The luxurious lobby offers a grand entrance and elegantly
                furnished concierge desk, creating a welcoming and sophisticated
                atmosphere for residents and guests
              </p>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden shadow-sm lg:flex-row-reverse">
            <img
              src="https://i.ibb.co.com/cyB3D9x/feature.jpg"
              alt=""
              className="h-80 dark:bg-gray-500 aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-sky-100">
              <h3 className="flex gap-3 text-4xl font-bold font-abel dark:text-gray-800">
                <RiSofaFill size={44} className="text-pink-800" />
                Furnished Community Spaces
              </h3>
              <p className="my-6 dark:text-gray-600 text-xl">
                Offering fully-furnished and well-designed community spaces for
                social gatherings.
              </p>
            </div>
          </div>
          <div className="flex flex-col overflow-hidden rounded-b-md shadow-sm lg:flex-row">
            <img
              src="https://i.ibb.co.com/YZJn7Jy/fotntimage.jpg"
              alt=""
              className="h-80 dark:bg-gray-500 aspect-video"
            />
            <div className="flex flex-col justify-center flex-1 p-6 dark:bg-rose-100">
              <h3 className="flex gap-3 text-4xl font-abel  font-bold dark:text-gray-800">
                <BiSolidCctv size={44} className="text-pink-800" />
                CCTV Surveillance Monitoring System.
              </h3>
              <p className="my-6 dark:text-gray-600 text-xl">
                Comprehensive CCTV monitoring system, ensuring round-the-clock
                surveillance for enhanced security
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeatureApartment;
