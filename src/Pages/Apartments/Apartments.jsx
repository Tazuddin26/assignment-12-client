import { RiSofaLine } from "react-icons/ri";
import { FaRulerCombined } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { IoHomeOutline, IoPricetagsOutline } from "react-icons/io5";
import UseAuth from "../../Hook/useAuth";
import UseAxiosSecure from "../../Hook/useAxiosSecure";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UseRole from "../../Hook/useRole";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { motion } from "framer-motion";

const Apartments = ({ apartment }) => {
  const { user, loading } = UseAuth();
  const axiosSecure = UseAxiosSecure();
  const navigate = useNavigate();
  const loginLocation = useLocation();
  const [role, isLoading] = UseRole();
  const [agreementDate, setAgreementDate] = useState(new Date());
  const [isStatus, setIsStatus] = useState(apartment.status);

  const {
    _id,
    apartment_img,
    furnishing,
    apartment_size,
    description,
    floor_no,
    block_name,
    apartment_no,
    status,
  } = apartment;
  const { min_rent, max_rent } = apartment.rentRange;
  const handleAgreement = async (id) => {
    setIsStatus("Occupied");
    console.log(id);
    const res = await axiosSecure.patch(`/apartments/${id}`);
    console.log("agreement data modifiy", res.data.modifiedCount);
    if (res.data.success) {
      setIsStatus(apartment.status);
    }
    if (user && user?.email) {
      const agreementData = {
        agreementId: _id,
        userName: user?.displayName,
        userEmail: user?.email,
        floorNo: floor_no || "none",
        blockName: block_name || "none",
        apartmentNo: apartment_no || "none",
        rent:
          { min_rent: parseInt(min_rent), max_rent: parseInt(max_rent) } || 0,
        agreementDate: agreementDate.toISOString().split("T")[0],
        status: "pending",
      };

      <DatePicker
        selected={agreementDate}
        onChange={(date) => setAgreementDate(date)}
        dateFormat="yyyy-MM-dd"
      />;
      const res = await axiosSecure.post("/agreement", agreementData);
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } else {
      Swal.fire({
        title: "Please Login First!",
        text: "Are You Login! For Agreement!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: loginLocation } });
        }
      });
    }
  };
  return (
    // <div>
    //   <div className="overflow-hidden rounded-lg hover:border-b-green-800 hover:border-l-green-800 hover:border-r-green-800 border hover:shadow-lg bg-green-50 scale-95 duration-700  transition-all">
    //     <img
    //       className="object-cover object-center w-full h-44"
    //       src={apartment_img}
    //       alt="avatar"
    //     />
    //     <div className="flex items-center px-6 py-1 bg-green-900">
    //       <RiSofaLine size={28} className="text-gray-800 dark:text-white" />
    //       <h1 className="mx-3 text-lg font-semibold text-white">
    //         {furnishing}
    //       </h1>
    //     </div>
    //     <div className="px-6 font-abel">
    //       <p className=" text-gray-700 mt-2 text-xl">{description}</p>
    //       <div className="flex items-center mt-2 text-gray-700 ">
    //         <FaRulerCombined size={20} />
    //         <h1 className="px-2 text-base">{apartment_size} </h1>
    //       </div>
    //       <div className="flex items-center text-gray-700">
    //         <div className="flex items-center mt-4 text-gray-700">
    //           <IoHomeOutline size={24} />
    //           <h1 className="px-2 text-sm">{apartment_no}</h1>
    //         </div>
    //         <div className="flex items-center mt-4 text-gray-700 ">
    //           <IoPricetagsOutline size={24} />
    //           <h1 className="px-2 text-base">
    //             ${min_rent} - ${max_rent}
    //           </h1>
    //         </div>
    //       </div>
    //       {/* <div className="flex items-center mt-4 text-gray-700 ">
    //         <GrStatusInfo size={24} />
    //         <h1 className="px-2 text-xl">
    //           Status:{" "}
    //           <span className="bg-indigo-100 py-1 px-5 rounded-full">
    //             {status}
    //           </span>
    //         </h1>
    //       </div> */}

    //       <div className="flex justify-end mr-2 my-3">
    //         <button
    //           onClick={() => handleAgreement(_id)}
    //           className="px-6 py-3 border rounded-lg transition-colors duration-500 bg-green-600 hover:bg-green-500"
    //         >
    //           {/* {isStatus === "Occupied" ? `${status}` : "Agreement"} */}
    //           Agreement
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <motion.div
      whileHover={{
        scale: 1.03,
        rotate: 1,
        boxShadow: "0px 10px 20px rgba(0, 128, 0, 0.2)",
      }}
      transition={{ type: "spring", stiffness: 300 }}
      className="overflow-hidden cursor-pointer rounded-lg border bg-green-50 scale-95 transition-all duration-700"
    >
      <img
        className="object-cover object-center w-full h-44"
        src={apartment_img}
        alt="avatar"
      />
      <div className="flex items-center px-6 py-1 bg-green-900">
        <RiSofaLine size={28} className="text-gray-800 dark:text-white" />
        <h1 className="mx-3 text-lg font-semibold text-white">{furnishing}</h1>
      </div>
      <div className="px-6 font-abel">
        <p className=" text-gray-700 mt-2 text-xl">{description}</p>
        <div className="flex items-center mt-2 text-gray-700 ">
          <FaRulerCombined size={20} />
          <h1 className="px-2 text-base">{apartment_size}</h1>
        </div>
        <div className="flex items-center text-gray-700">
          <div className="flex items-center mt-4 text-gray-700">
            <IoHomeOutline size={24} />
            <h1 className="px-2 text-sm">{apartment_no}</h1>
          </div>
          <div className="flex items-center mt-4 text-gray-700 ">
            <IoPricetagsOutline size={24} />
            <h1 className="px-2 text-base">
              ${min_rent} - ${max_rent}
            </h1>
          </div>
        </div>
        <div className="flex justify-end mr-2 my-3">
          <button
            onClick={() => handleAgreement(_id)}
            className="px-6 py-3 border rounded-lg dark:text-white transition-colors duration-500 bg-green-600 hover:bg-green-500"
          >
            Agreement
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Apartments;
