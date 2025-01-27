import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../Hook/useAxiosSecure";
// import UseAuth from "../../Hook/useAuth";
import { FaEdit, FaTrash, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";
import { useState } from "react";

const ManageMember = () => {
  // const [users, setUsers] = useState([]);
  const axiosSecure = UseAxiosSecure();
  const {
    data: users = [],
    refetch,
    isPending,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  //   make Role Handler
  const handleMakeMember = (user) => {
    axiosSecure
      .patch(`/users/member/${user._id}`)
      .then((res) => {
        console.log("user role data", res.data.memberResult);
        if (
          // res.data.memberResult.insertedId &&
          res.data.userResult.modifiedCount > 0
        ) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} You are Member Now!`,
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: `${res.data.message}`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log("user to member error", error);
      });
  };

  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Memeber is Deleted.",
              icon: "success",
            });
            // axiosSecure
            //   .patch(`/apartments/${user._id}`, { status: "Available" })
            //   .then((res) => {
            //     if (res.data.modifiedCount > 0) {
            //       refetch();
            //       Swal.fire({
            //         title: "Success!",
            //         text: "Apartment data is Updated.",
            //         icon: "success",
            //       });
            //     }
            //   });
          }
        });
      }
    });
  };

  return (
    <div>
      <section className="container lg:px-4 mx-auto">
        <div className="flex items-center justify-center lg:justify-start gap-x-3">
          <span className="px-3 py-2 font-tauri text-2xl lg:rounded-md dark:bg-green-600 text-gray-900">
            Team Members : {users.length} Users
          </span>
        </div>

        <div className="flex flex-col lg:mt-6 mt-2">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 ">
                  <thead className="bg-gray-50 dark:bg-gray-800 font-tauri">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4 text-xl font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <div className="flex items-center gap-x-3">
                          <input
                            type="checkbox"
                            className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                          />
                          <span className="text-lg">Member Name</span>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="px-12 py-3.5 text-lg font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <button className="flex items-center gap-x-2">
                          <span>Status</span>
                        </button>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-lg font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        <button className="flex items-center gap-x-2">
                          <span>Role</span>
                        </button>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-lg font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      >
                        Email address
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                      ></th>

                      <th scope="col" className="relative py-3.5 px-4 text-lg">
                        <span className=" text-gray-400">Status</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y font-abel divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {users.map((manageUser) => (
                      <tr key={manageUser._id}>
                        <td className="px-4 py-4 text-md font-medium text-gray-700 whitespace-nowrap">
                          <div className="inline-flex items-center gap-x-3">
                            <input
                              type="checkbox"
                              className="text-blue-500 border-gray-300 rounded dark:bg-gray-900 dark:ring-offset-gray-900 dark:border-gray-700"
                            />

                            <div className="flex items-center gap-x-2">
                              <img src="" alt="" />
                              <div>
                                <h2 className="font-medium text-gray-800 dark:text-white ">
                                  {manageUser.name}
                                </h2>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-12 py-4 text-md font-medium text-gray-700 whitespace-nowrap">
                          <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>

                            <h2 className="text-md font-tauri text-emerald-500">
                              {manageUser.role === "member" ||
                              manageUser.role === "admin" ? (
                                <span className="text-amber-600">Active</span>
                              ) : (
                                <span className="text-pink-600 font-bold">
                                  inActive
                                </span>
                              )}
                            </h2>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-xl text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {manageUser.role === "member" ||
                          manageUser.role === "admin" ? (
                            manageUser.role === "member" ? (
                              <span className=" rounded-full bg-emerald-100/60 text-emerald-500 dark:bg-gray-800 px-4 py-1 text">
                                {" "}
                                Member
                              </span>
                            ) : (
                              <span className=" rounded-full bg-emerald-100/60 text-pink-500 dark:bg-gray-800 px-4 py-1 text">
                                {" "}
                                Admin
                              </span>
                            )
                          ) : (
                            <button
                              onClick={() => handleMakeMember(manageUser)}
                              className=""
                            >
                              <span className="flex items-center gap-1 rounded-full bg-emerald-100/60 hover:bg-green-500 dark:bg-gray-800 px-4 py-1">
                                {" "}
                                <FaUser size={16} /> User
                              </span>
                            </button>
                          )}
                        </td>
                        <td className="px-4 py-4 text-md text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {manageUser.email}
                        </td>
                        <td className=" text-sm whitespace-nowrap"></td>
                        <td className="px-4 py-4 text-md whitespace-nowrap">
                          <div className="flex items-center gap-x-6">
                            <button
                              onClick={() => handleDeleteUser(manageUser)}
                              className="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none"
                            >
                              <FaTrash size={16} />
                            </button>

                            {/* <button className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                              <FaEdit size={20} />
                            </button> */}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ManageMember;
