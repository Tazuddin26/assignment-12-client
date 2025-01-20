import React, { useState } from "react";
import UseAgreement from "../../Hook/useAgreement";
import UseAuth from "../../Hook/useAuth";
import { useForm } from "react-hook-form";
import { GrCycle } from "react-icons/gr";
import UseAxiosSecure from "../../Hook/useAxiosSecure";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";

const MakePayment = () => {
  const [agreement, refetch] = UseAgreement();
  const { user, loading } = UseAuth();
  const axiosSecure = UseAxiosSecure();
  const [agreements] = agreement || [];
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [paymentDate, setPaymentDate] = useState(new Date());
  const {
    agreementId,
    userName,
    userEmail,
    floorNo,
    blockName,
    apartmentNo,
    rent,
    status,
  } = agreements || {};

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const discountRent = rent?.max_rent - rent?.max_rent * (discount / 100);
    const paymentsDate = paymentDate.toISOString().split("T")[0];
    const formData = { ...data, discountRent, discount, paymentsDate };
   
    <DatePicker
      selected={paymentDate}
      onChange={(date) => setPaymentDate(date)}
      dateFormat="yyyy-MM-dd"
    />;
    axiosSecure.post("/payments", formData).then((res) => {
      if (res.data.insertedId) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Payment successfully.",
          showConfirmButton: false,
          timer: 1500,
        });
        // navigate("/");
      }
    });
  };
  const handleCouponApply = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosSecure.post("/couponCode", { couponCode: coupon });
      if (res.data && res.data.discount) {
        setDiscount(res.data.discount);
        Swal.fire({
          icon: "success",
          title: "Coupon Applied!",
          text: `You got ${res.data.discount}% discount.`,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Invalid Coupon",
          text: "This coupon code is not valid.",
        });
      }
    } catch (error) {
      alert(error.message);
    }
  };
  if (!agreement || agreement.length === 0) {
    return <div>Loading agreement data...</div>;
  }
  return (
    <div className="w-full">
      <section className="lg:max-w-4xl p-6 lg:mx-auto bg-white rounded-md shadow-md dark:bg-gray-800 mt-2">
        <h2 className="text-2xl font-tauri font-semibold text-gray-700 capitalize dark:text-white">
          Apartment Rent Payment Process
        </h2>
        <hr className="mt-4 dark:border-gray-600" />
        <form onSubmit={handleSubmit(onSubmit)} className="w-full">
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                for="username"
              >
                Member Name
              </label>
              <input
                {...register("memberName", { required: true })}
                defaultValue={userName}
                readOnly
                id="memberName"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                for="emailAddress"
              >
                Member Email
              </label>
              <input
                {...register("email", { required: true })}
                defaultValue={userEmail}
                readOnly
                id="emailAddress"
                type="email"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                for="password"
              >
                Floor Number
              </label>
              <input
                {...register("floorNo", { required: true })}
                defaultValue={floorNo}
                readOnly
                id="floorNo"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                for="passwordConfirmation"
              >
                Block Name
              </label>
              <input
                {...register("blockName", { required: true })}
                defaultValue={blockName}
                readOnly
                id="blockName"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                for="passwordConfirmation"
              >
                Apartment No
              </label>
              <input
                {...register("apartmentNo", { required: true })}
                defaultValue={apartmentNo}
                readOnly
                id="apartmentNo"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                className="text-gray-700 dark:text-gray-200"
                for="passwordConfirmation"
              >
                Rent Amount
              </label>
              <input
                {...register("rent", { required: true })}
                defaultValue={
                  rent?.max_rent - rent?.max_rent * (discount / 100)
                }
                readOnly
                id="rent"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              />
            </div>
            <div className="">
              <label className="text-gray-700 dark:text-gray-200 flex">
                Payment Month
              </label>
              <select
                defaultValue="rentMonth"
                {...register("rentMonth", { required: true })}
                className="select select-bordered w-full max-w-xl mt-2 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
              >
                <option disabled value="rentMonth">
                  Select Month
                </option>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label
                className="text-gray-700 dark:text-gray-200 "
                for="passwordConfirmation"
              >
                Coupon
              </label>
              <div className="mt-2 flex overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
                <input
                  onChange={(e) => setCoupon(e.target.value)}
                  value={coupon}
                  className="px-8 py-2 text-gray-300 placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent"
                  type="text"
                  name="coupon"
                  placeholder="Type Coupon Code"
                />
                <button
                  onClick={handleCouponApply}
                  type="button"
                  className="lg:px-8 lg:py-3 px-3 text-md lg:ml-8 font-abel tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-amber-600 rounded-md hover:bg-amber-500 focus:bg-gray-600 focus:outline-none"
                >
                  Get Code
                </button>
              </div>
            </div>
          </div>
          <div className=" mt-8 flex lg:justify-end justify-center">
            <button
              type="submit"
              className="flex justify-center  items-center text-xl px-6 py-2 space-x-4 font-medium font-abel tracking-wide  capitalize transition-colors duration-300 transform bg-green-600 rounded-lg hover:bg-green-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
            >
              <GrCycle size={28} className="text-white " />
              <span className="mx-1">Payment</span>
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default MakePayment;
