import React from "react";
import UseAuth from "../../Hook/useAuth";
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../Hook/useAxiosSecure";
import { MdEventAvailable, MdMeetingRoom, MdOutlinePayments } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaUsersGear } from "react-icons/fa6";
import { GrAnnounce } from "react-icons/gr";
import { RiCoupon3Line } from "react-icons/ri";

const AdminProfile = () => {
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();
  const { data: stats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });
  return (
    <div className="">
      {/* <h1></h1>
      {user?.displayName ? user?.displayName : "Admin is Come Back"} */}
      <section className="p-8 my-6  dark:text-gray-100">
        <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
          <div className="flex p-2 py-10 space-x-4 rounded-lg md:space-x-6 shadow-md scale-105 duration-700 transition dark:bg-green-200 dark:text-gray-800">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
              <p>
                <MdEventAvailable size={40} className="text-white" />
              </p>
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leading-none">
                {stats?.availablePercentage}
              </p>
              <p className="uppercase text-2xl font-abel">Available</p>
            </div>
          </div>
          <div className="flex p-2 py-10 space-x-4 rounded-lg md:space-x-6 shadow-md dark:bg-pink-200 dark:text-gray-800">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
              <p>
                <MdEventAvailable size={40} className="text-white" />
              </p>
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leading-none">
                {stats?.agreementPercentage}
              </p>
              <p className="uppercase text-2xl font-abel">UnAvailable</p>
            </div>
          </div>
          <div className="flex p-2 py-10 space-x-4 rounded-lg md:space-x-6 shadow-md dark:bg-teal-200 dark:text-gray-800">
            <div className="flex justify-center p-2  align-middle rounded-lg sm:p-4 dark:bg-violet-600">
              <p>
                <MdMeetingRoom size={40} className="text-white" />
              </p>
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leading-none">
                {stats?.totalApartments}
              </p>
              <p className="uppercase text-2xl font-abel">Apartments</p>
            </div>
          </div>
          <div className="flex p-2 py-10 space-x-4 rounded-lg md:space-x-6 shadow-md dark:bg-amber-200 dark:text-gray-800">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
              <FaUsers size={40} className="text-white" />
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-tauri font-semibold leading-none">
                {stats?.users}
              </p>
              <p className="uppercase text-2xl font-abel">Users</p>
            </div>
          </div>
          <div className="flex p-2 space-x-4 py-10 rounded-lg md:space-x-6 shadow-md dark:bg-indigo-200 dark:text-gray-800">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
              <FaUsersGear size={40} className="text-white" />
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leading-none">
                {stats?.members}
              </p>
              <p className="uppercase text-2xl font-abel">Members</p>
            </div>
          </div>
          <div className="flex p-2 space-x-4  py-10 rounded-lg md:space-x-6 shadow-md dark:bg-orange-200 dark:text-gray-800">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
              <GrAnnounce  size={40} className="text-white" />
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leading-none">
                {stats?.announcements}
              </p>
              <p className="uppercase text-2xl font-abel">Announce</p>
            </div>
          </div>
          <div className="flex p-2 space-x-4  py-10 rounded-lg md:space-x-6 shadow-md dark:bg-fuchsia-200 dark:text-gray-800">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
              <RiCoupon3Line size={40} className="text-white" />
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leading-none">
                {stats?.coupons}
              </p>
              <p className="uppercase text-2xl font-abel">Coupons</p>
            </div>
          </div>
          <div className="flex p-2 space-x-4  py-10 rounded-lg md:space-x-6 shadow-md dark:bg-emerald-200 dark:text-gray-800">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
              <MdOutlinePayments  size={40} className="text-white" />
            </div>
            <div className="flex flex-col justify-center align-middle">
              <p className="text-3xl font-semibold leading-none">
                {stats?.payments}
              </p>
              <p className="uppercase text-2xl font-abel">Payments</p>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full max-w-lg lg:ml-8 px-8 py-4 mt-16 bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div className="flex justify-center -mt-16 ">
          <img
            className="object-cover w-24 h-24 border-2 border-teal-500 rounded-full shadow-md shadow-green-800 dark:border-blue-500"
            alt="Testimonial avatar"
            src={user?.photoURL}
          />
        </div>

        <h2 className=" text-3xl font-abel font-semibold text-center my-10  text-gray-800 dark:text-green-500 md:mt-0">
          Owner
        </h2>
        <h3 className="text-sky-500 text-center font-abel text-2xl">
          {user.displayName}
        </h3>
        <p className="text-gray-500 text-center font-abel ">{user.email}</p>

        <p className="mt-2 text-md font-tauri text-gray-600 dark:text-gray-200">
          The building impresses every person because it is a “mini natural
          environment ” with its indoor transportation facilities, facilities
          for the live environment, gymnasium, swimming pool, and Wi-Fi internet
          system. Besides, the interior of the building is so spacious one could
          literally get lost in it while looking at its elegant interior and
          decoration. All in all, it is a building worth living.!!
        </p>

        <div className="flex justify-end mt-4">
          <a className="text-xl font-abel font-medium text-sky-500 "></a>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
