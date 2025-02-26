import React from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";

const LocationApartment = () => {
  return (
    <section className=" ">
      <div className="container px-6 py-6 mx-auto">
        <div className="text-center">
          <div className="divider divider-accent lg:mx-36 mx-4  ">
            <h1 className=" text-3xl font-abel items-center font-semibold  md:text-3xl ">
              Our Location
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 mt-12 lg:grid-cols-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1">
            <div className="text-center ">
              <span className="inline-block p-3 text-rose-500 rounded-full bg-blue-100/80 dark:bg-green-300">
                <FaLocationDot size={28} />
              </span>

              <h2 className="mt-1 text-base font-medium ">Apartment</h2>

              <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                Gulshan,Banani Road
              </p>
            </div>

            <div className="text-center">
              <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-green-300">
                <BiSolidPhoneCall size={28} />
              </span>

              <h2 className="mt-1 text-base font-medium ">Phone</h2>
              <p className="mt-2 text-sm text-blue-500 dark:text-blue-400">
                +01310 642581
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-[400px] mb-6">
            <iframe
              width="100%"
              height="100%"
              frameborder="0"
              title="map"
              marginheight="0"
              marginwidth="0"
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=23.8103,90.4125(My%20Apartment)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationApartment;
