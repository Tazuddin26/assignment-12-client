import React from "react";
import UseAuth from "../../Hook/useAuth";
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../Hook/useAxiosSecure";
import { MdEventAvailable, MdMeetingRoom, MdOutlinePayments } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaUsersGear } from "react-icons/fa6";
import { GrAnnounce } from "react-icons/gr";
import { RiCoupon3Line } from "react-icons/ri";
import StatisticsBarChart from "./StatisticsBarChart";
// import StatisticsChart from "./StatisticsChart";
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
      <section className="px-3 dark:text-gray-100 w-full">
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
    <div className="">
    {/* <StatisticsChart/> */}
    <StatisticsBarChart/>
    </div>
    </div>
  );
};

export default AdminProfile;
