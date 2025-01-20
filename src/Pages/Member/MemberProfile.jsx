import React from "react";
import UseAuth from "../../Hook/useAuth";
import UseAgreement from "../../Hook/useAgreement";
import UseAxiosSecure from "../../Hook/useAxiosSecure";
import UseRole from "../../Hook/useRole";
import { useQuery } from "@tanstack/react-query";
import { MdVerified } from "react-icons/md";

const MemberProfile = () => {
  const [agreement, refetch] = UseAgreement();
  const { user, loading } = UseAuth();
  const [role, isLoading] = UseRole();
  const axiosSecure = UseAxiosSecure();
  console.log(role);

  if (!user || !user.email) {
    return <p className="text-red-600 text-center mt-28">{loading}</p>;
  }
  return (
    <div className="w-full ">
      <div className="lg:max-w-4xl mx-auto h-[450px] px-8 py-4 mt-8 bg-white rounded-lg shadow-lg shadow-green-900 dark:bg-gray-800">
        <div className="flex justify-center -mt-16 md:justify-end">
          <img
            className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400"
            alt="Testimonial avatar"
            src={user?.photoURL}
          />
        </div>

        <div className="flex justify-center items-center ">
          <div>
            {/* <BiBuildingHouse size={38} className="text-gray-900 " />
            <p className="font-abel text-2xl text-gray-900">Dream Rent</p> */}
            <h1 className="text-3xl text-white font-tauri">Member Profile</h1>
          </div>
        </div>
        <div className="border-b w-full border-gray-700 my-4 "></div>
        <div>
          <div className="flex mt-4  justify-evenly">
            <div className="mt-6 font-abel text-2xl font-bold text-white">
              <p className="mt-2  font-semibold  md:mt-0">
                User Name : {user?.displayName}
              </p>
              <p className="mt-2   ">User Email : {user?.email}</p>
            </div>
            {agreement.map((agreeData) => (
              <div
                key={agreeData._id}
                className="text-lg space-y-3 font-medium  text-blue-600 dark:text-blue-300"
                tabIndex="0"
              >
                <div className="space-y-3 w-full ">
                  <p className="font-tauri text-2xl text-green-500">
                    Rented Apartment Info:
                  </p>
                  <p>Block Name: {agreeData.blockName}</p>
                  <p>Floor Number: {agreeData.floorNo}</p>
                  <p>Apartment No: {agreeData.apartmentNo}</p>

                  <p className="font-tauri">
                    Agreement Accept date :{" "}
                    <span className="font-abel text-green-500">
                      {" "}
                      {agreeData.agreementDate}
                    </span>
                  </p>
                </div>
                <div className="flex justify-end items-center ">
                  {" "}
                  {role === "member" ? (
                    <MdVerified size={36} className="text-green-500" />
                  ) : (
                    <p className=" bg-rose-600 px-4 py-1  font-tauri rounded-xl text-center">
                      {agreeData.status}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberProfile;
