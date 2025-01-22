import React from "react";
import { BiBuildingHouse } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900  ">
      <div className=" container px-6 py-4 mx-auto ">
        <div className=" flex justify-end items-center">
          <div>
            <BiBuildingHouse size={48} className="text-green-600 " />
            <p className="font-abel text-3xl dark:text-white">Dream Rent</p>
          </div>
        </div>
        <div className="lg:flex items-center text-center ">
          <div className=" lg:mt-4">
            <section className="py-2 dark: dark:text-gray-900 ">
                <p className="dark:text-gray-300 text-3xl font-abel text-start ml-4">Gallery</p>
               
              <div className="container grid grid-cols-2 gap-2 p-2 mx-auto md:grid-cols-4 ">
                <img
                  src="https://i.ibb.co.com/8zMxgRR/img2.jpg"
                  alt=""
                  className="w-full h-[250px] col-span-2 row-span-2 object-cover object-center rounded shadow-sm min-h-44 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
                />
                <img
                  alt=""
                  className="w-full h-[120px] object-cover object-center rounded shadow-sm min-h-24 dark:bg-gray-500 aspect-square"
                  src="https://i.ibb.co.com/5BH883r/img3.jpg"
                />
                <img
                  alt=""
                  className="w-full h-[120px] rounded shadow-sm min-h-24 object-cover object-center dark:bg-gray-500 aspect-square"
                  src="https://i.ibb.co.com/51Br0zV/img4.jpg"
                />
                <img
                  alt=""
                  className="w-full h-[120px] rounded shadow-sm min-h-24 object-cover object-center dark:bg-gray-500 aspect-square"
                  src="https://i.ibb.co.com/VqrSWrZ/img5.jpg"
                />
                <img
                  alt=""
                  className="w-full h-[120px] rounded shadow-sm min-h-24 object-cover object-center dark:bg-gray-500 aspect-square"
                  src="https://i.ibb.co.com/RhzNRDv/img9.jpg"
                />
              </div>
            </section>
          </div>
        </div>

        <hr className="my-10 border-gray-200 dark:border-gray-700" />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-500">
            © Copyright 2021. All Rights Reserved.
          </p>

          <div className="flex mt-3 -mx-2 sm:mt-0">
            <a
              href="#"
              className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
              aria-label="Reddit"
            >
              {" "}
              Teams{" "}
            </a>

            <a
              href="#"
              className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
              aria-label="Reddit"
            >
              {" "}
              Privacy{" "}
            </a>

            <a
              href="#"
              className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
              aria-label="Reddit"
            >
              {" "}
              Cookies{" "}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
