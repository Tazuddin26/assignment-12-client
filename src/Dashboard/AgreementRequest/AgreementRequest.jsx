import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../Hook/useAuth";
import UseAxiosSecure from "../../Hook/useAxiosSecure";
import { RiCheckDoubleFill } from "react-icons/ri";
import { GrDocumentUpdate } from "react-icons/gr";
import { VscGitPullRequestGoToChanges } from "react-icons/vsc";
import { LuDelete } from "react-icons/lu";
import Swal from "sweetalert2";
import { useState } from "react";

const AgreementRequest = () => {
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();

  const { data: agreements = [], refetch } = useQuery({
    queryKey: ["agreements"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allAgreements");
      console.log("all agreement data", res.data);
      return res.data;
    },
  });
  const [removeFromUi, setRemoveFromUi] = useState([agreements]);
  const handleRequestAccept = (id, user) => {
    axiosSecure.patch(`/agreements/${id}`, { action: "accept" }).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user} is an Member Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
        handleRemoveCard(id);
      }
    });
  };

  const handleRequestReject = (id, user) => {
    console.log("user is", user, id);
    axiosSecure.patch(`/agreements/${id}`, { action: "reject" }).then((res) => {
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user} is an Rejected Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
        handleRemoveCard(id);
      }
    });
  };

  const handleRemoveCard = (id) => {
    axiosSecure.delete(`/requestCard/${id}`).then((res) => {
      console.log("delete", res.data);
      if (res.data.deletedCount > 0) {
        refetch();
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  //   const handleRemoveCard = (id) => {
  //     Swal.fire({
  //       title: "Are you sure?",
  //       text: "You won't be able to revert this!",
  //       icon: "warning",
  //       showCancelButton: true,
  //       confirmButtonColor: "#3085d6",
  //       cancelButtonColor: "#d33",
  //       confirmButtonText: "Yes, remove it!",
  //     }).then((result) => {
  //       if (result.isConfirmed) {
  //         refetch();
  //         const agreementUpdate = removeFromUi.filter(
  //           (agreement) => agreement._id !== id
  //         );
  //         setRemoveFromUi(agreementUpdate);
  //         Swal.fire("Deleted!", "The card has been removed.", "success");
  //       }
  //     });
  //   };

  return (
    <div>
      <div className="w-80 mb-7">
        <p className="text-2xl font-tauri font-semibold bg-green-600 py-3 rounded-md text-center">
          {" "}
          Requested Agreement List{" "}
        </p>
      </div>

      <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {agreements.map((agreement) => (
          <div
            key={agreement._id}
            className="w-full max-w-md px-8 py-4 font-abel bg-white rounded-lg shadow-lg dark:bg-gray-800"
          >
            <div className="flex justify-center -mt-10 ml-8 md:justify-end">
              <img
                className="object-cover w-12 h-12 border-2 border-blue-500 rounded-full dark:border-blue-400"
                alt="Testimonial avatar"
                src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
              />
            </div>

            <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-green-500 md:mt-0">
              {agreement.userEmail}
            </h2>
            <div className="flex justify-between ">
              <p className="mt-2 text-md text-gray-600 dark:text-gray-200">
                Apartment No : {agreement.apartmentNo}
              </p>
              <p className="mt-2 text-md text-gray-600 dark:text-gray-200">
                Block Name : {agreement.blockName}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="mt-2 text-md text-gray-600 dark:text-gray-200">
                Floor No : {agreement.floorNo}
              </p>
              <p className="mt-2 text-md text-gray-600 dark:text-gray-200">
                Rent :{" "}
                <span className="text-green-500">
                  $ {agreement.rent.max_rent}
                </span>
              </p>
            </div>

            <p className="mt-2 text-md text-gray-600 dark:text-gray-200">
              Request Date :{" "}
              <span className="text-green-500">{agreement.agreementDate}</span>
            </p>
            <div className="flex justify-between mt-4">
              <p className="text-md text-gray-600 dark:text-gray-200">
                Status:{" "}
                <span className="gap-1 text-center font-tauri items-center text-pink-600 rounded-full bg-emerald-100/60 hover:bg-green-500 dark:bg-gray-600 px-4 py-1">
                  {agreement.status}
                </span>
              </p>
              <a
                href="#"
                className="text-lg font-medium text-blue-600 dark:text-blue-300"
                tabindex="0"
                role="link"
              >
                {agreement.userName}
              </a>
            </div>
            <div className="flex justify-between mt-4    my-5">
              <button
                onClick={() => {
                  handleRequestAccept(agreement._id, agreement.userName);
                  handleRemoveCard(agreement._id);
                }}
                type="submit"
                className="flex gap-2 px-6 py-2.5 shadow-md leading-5 text-white transition-colors duration-300 transform bg-green-700 rounded-md hover:bg-green-600 focus:outline-none focus:bg-gray-600"
              >
                <GrDocumentUpdate size={20} className="text-amber-500" />
                Accept
              </button>
              <button
                onClick={() => {
                  handleRequestReject(agreement._id, agreement.userName);
                  handleRemoveCard(agreement._id);
                }}
                type="submit"
                className="flex gap-2 px-6 py-2.5 shadow-md leading-5 text-white transition-colors duration-300 transform bg-pink-700 rounded-md hover:bg-rose-600 focus:outline-none focus:bg-gray-600"
              >
                <LuDelete size={22} className="text-amber-400" />
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgreementRequest;
