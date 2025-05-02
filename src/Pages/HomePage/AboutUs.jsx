import React from "react";
import { BiSolidBuildingHouse, BiSolidSelectMultiple } from "react-icons/bi";

const AboutUs = () => {
  return (
    <div>
      <section className="  my-6">
        <h2 className="text-4xl text-center font-bold font-abel">
          About The Apartment
        </h2>
        <div className="divider divider-info lg:mx-36 mx-4  ">
          <BiSolidBuildingHouse size={68} className="text-lime-500 w-28 " />
        </div>
        <div className="container px-6  mx-auto">
          <div className="grid items-center gap-4 xl:grid-cols-5">
            <div className="max-w-2xl mx-auto my-8 space-y-6 text-center xl:col-span-2 xl:text-left">
              {/* <h2 className="text-4xl text-start font-bold font-tauri">
                About The Apartment
              </h2> */}
              {/* <div className="divider divider-secondary lg:mx mx-1 my-10">
                <BiSolidBuildingHouse
                  size={36}
                  className="text-indigo-900 w-28 "
                />
              </div> */}
              <p className=" gap-2 text-2xl font-abel ">
                Sustainability is evident in the design, incorporating wooden
                screens and green spaces for a perfect blend of light, privacy,
                and community interaction.
              </p>
              <p className="dark:text-green-700 text-2xl font-abel">
                The building echoes nature's simplicity with organically shaped
                layouts and branching patterns for natural light, utilizing
                clean architecture.
              </p>
              <p className="dark:text-pink-800 text-2xl font-abel">
                This Building fosters social interaction and eco-friendly living
                with open common spaces, encouraging residents to embrace a
                living community.
              </p>
            </div>
            <div className="lg:p-4 xl:col-span-3 ">
              <div className="grid gap-4 md:grid-cols-2 ">
                <div className="grid content-center gap-4">
                  <div className="p-6 rounded shadow-md dark:bg-teal-100">
                    <img
                      src="https://i.ibb.co.com/jTwdcv4/building.jpg"
                      alt=""
                    />
                    <div className="flex items-center mt-4 space-x-4"></div>
                  </div>
                  <div className="p-6 rounded shadow-md dark:bg-purple-100">
                    <img src="https://i.ibb.co.com/mD3Rtqd/indoor.jpg" alt="" />
                    <div className="flex items-center mt-4 space-x-4"></div>
                  </div>
                </div>
                <div className="grid content-center gap-4">
                  <div className="p-6 rounded shadow-md dark:bg-sky-100">
                    <img src="https://i.ibb.co.com/hLGLcB0/table.jpg" alt="" />
                    <div className="flex items-center mt-4 space-x-4"></div>
                  </div>
                  <div className="p-6 rounded shadow-md dark:bg-green-100">
                    <img src="https://i.ibb.co.com/dPZsD92/about.jpg" alt="" />
                    <div className="flex items-center mt-4 space-x-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
