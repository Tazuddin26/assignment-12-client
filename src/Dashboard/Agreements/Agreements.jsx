// import React, { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../Hook/useAuth";
import UseAxiosPublic from "../../Hook/useAxiosPublic";
import UseAxiosSecure from "../../Hook/useAxiosSecure";
// import { BiBuildingHouse } from "react-icons/bi";
// import UseAgreement from "../../Hook/useAgreement";
// import UseRole from "../../Hook/useRole";

const Agreements = () => {
  // const [agreement, refetch] = UseAgreement();
  const { user, loading } = UseAuth();
  // const [role] = UseRole();
  // const [profile, setProfile] = useState(null);
  const axiosPublic = UseAxiosPublic();
  const axiosSecure = UseAxiosSecure();
  const { data: userInfo, refetch } = useQuery({
    queryKey: ["userInfo"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/users/${user?.email}`);
      if (res.status === 404) {
        throw new Error("User not found");
      }
      return res.data;
    },
    onError: (err) => {
      console.error("Error fetching user data:", err);
    },
  });
  console.log("user data", userInfo);

  if (!user || !user.email) {
    return <p className="text-red-600 text-center mt-40">{loading}</p>;
  }
  return (
    <div className="w-full ">
      {/* {user?.displayName ? user?.displayName : "Please Login Or Register"} */}
      <div className="max-w-4xl mx-auto h-[500px] px-8 py-4 mt-8 bg-white rounded-lg shadow-lg shadow-green-900 dark:bg-gray-800">
        <div className="flex justify-center -mt-16 md:justify-end">
          <img
            className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400"
            alt="Testimonial avatar"
            src={user?.photoURL}
          />
        </div>
        <div className="flex justify-center items-center ">
          <div>
            <h1 className="text-3xl text-white font-tauri">User Profile</h1>
          </div>
        </div>
        <div className="border-b w-full border-green-700 my-4 "></div>
        <div className="flex justify-evenly mt-6 font-abel text-2xl font-bold text-white">
          <div className="">
            <p className="mt-2  font-semibold  md:mt-0">
              User Name : {user?.displayName}
            </p>
            <p className="mt-2   ">User Email : {user?.email}</p>
          </div>
          <div className="">
            <p>Mobile : {userInfo?.phone}</p>
            <p>Address : {userInfo?.address}</p>
          </div>
        </div>
        <div className="flex mt-4 ">
          <div
            className="text-lg space-y-3 font-medium text-blue-600 dark:text-blue-300"
            tabIndex="0"
          >
            {/* <p className="font-tauri text-2xl">
              Agreement Accept date : <span className="font-abel"></span>
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agreements;
