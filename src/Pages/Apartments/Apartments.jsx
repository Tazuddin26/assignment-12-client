import { RiSofaLine } from "react-icons/ri";
import { FaRulerCombined } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { IoPricetagsOutline } from "react-icons/io5";
import UseAuth from "../../Hook/useAuth";
import UseAxiosSecure from "../../Hook/useAxiosSecure";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import UseRole from "../../Hook/useRole";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
const Apartments = ({ apartment }) => {
  const { user, loading } = UseAuth();
  const axiosSecure = UseAxiosSecure();
  const navigate = useNavigate();
  const loginLocation = useLocation();
  const [role, isLoading] = UseRole();
  const [agreementDate, setAgreementDate] = useState(new Date());
  console.log("Current role is: ", role);
  const {
    _id,
    apartment_img,
    furnishing,
    apartment_size,
    description,
    floor_no,
    block_name,
    apartment_no,
    location,
  } = apartment;
  const { min_rent, max_rent } = apartment.rentRange;
  const handleAgreement = async () => {
    if (user && user?.email) {
      // let agreementData;
      // if (role === "member") {
      const agreementData = {
        agreementId: _id,
        userName: user?.displayName,
        userEmail: user?.email,
        floorNo: floor_no,
        blockName: block_name,
        apartmentNo: apartment_no,
        rent: { min_rent: parseInt(min_rent), max_rent: parseInt(max_rent) },
        agreementDate: agreementDate.toISOString().split("T")[0],
        status: "pending",
      };
      <DatePicker
        selected={agreementDate}
        onChange={(date) => setAgreementDate(date)}
        dateFormat="yyyy-MM-dd"
      />;
      // } else if (!role || Object.keys(role).length === 0) {
      //   agreementData = {
      //     agreementId: _id,
      //     userName: user?.displayName,
      //     userEmail: user?.email,
      //     floorNo: "none",
      //     blockName: "none",
      //     apartmentNo: "none",
      //     rent: "none",
      //     agreementDate: "none",
      //     status: "pending",
      //   };
      // }
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
    <div>
      <div className="overflow-hidden rounded-lg hover:shadow-lg bg-green-50 scale-95 duration-700  transition-all">
        <img
          className="object-cover object-center w-full h-48"
          src={apartment_img}
          alt="avatar"
        />
        <div className="flex items-center px-6 py-4 bg-green-900">
          <RiSofaLine size={28} className="text-gray-800 dark:text-white" />
          <h1 className="mx-3 text-lg font-semibold text-white">
            {furnishing}
          </h1>
        </div>
        <div className="px-6">
          <p className=" text-gray-700 mt-2 text-xl">{description}</p>
          <div className="flex items-center mt-4 text-gray-700 ">
            <FaRulerCombined size={20} />
            <h1 className="px-2 text-base">
              Apartment Size : {apartment_size}{" "}
            </h1>
          </div>
          <div className="flex items-center mt-4 text-gray-700">
            <CiLocationOn size={24} />
            <h1 className="px-2 text-sm">{location}</h1>
          </div>
          <div className="flex items-center mt-4 text-gray-700 ">
            <IoPricetagsOutline size={24} />
            <h1 className="px-2 text-base">
              Rent : ${min_rent} - ${max_rent}
            </h1>
          </div>
          <div className="flex justify-end mr-2 my-3">
            <button
              onClick={handleAgreement}
              className="px-6 py-3 border rounded-lg transition-colors duration-500 hover:bg-green-500  bg-green-700 "
            >
              Agreement
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apartments;
