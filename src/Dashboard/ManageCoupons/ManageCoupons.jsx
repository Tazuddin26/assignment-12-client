import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../Hook/useAxiosSecure";
import { useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const ManageCoupons = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const axiosSecure = UseAxiosSecure();
  const [createDate, setCreateDate] = useState(new Date());
  const { code, discount, apartmentNo, validDate, description, _id } =
    useLoaderData();
  const {
    data: coupons = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["coupons"],
    queryFn: async () => {
      const res = await axiosSecure.get("/get-all-coupons");
      console.log("all agreement data", res.data);
      return res.data;
    },
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const createCouponDate = createDate.toISOString().split("T")[0];
    <DatePicker
      selected={createDate}
      onChange={(date) => setCreateDate(date)}
      dateFormat="yyyy-MM-dd"
    />;
    const formData = { ...data, createCouponDate };
    axiosSecure.post("/createCoupon", formData).then((res) => {
      console.log("create coupon", res.data);
      if (res.data.insertedId) {
        refetch();
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Coupon Create successfully.",
          showConfirmButton: false,
          timer: 1500,
        });
        // navigate("/");
      }
    });
  };

  const handleDeleteCoupon = (id) => {
    // console.log('coupon id',id);
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
        axiosSecure.delete(`/deleteCoupon/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your Coupon has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  const handleUpateCoupon = async (data) => {
    console.log("update", data._id);
    const updateCoupon = {
      code: data.code,
      discount: data.discount,
      apartmentNo: data.apartmentNo,
      validDate: data.validDate,
      description: data.description,
    };
    console.log("data", updateCoupon);
    const couponRes = await axiosSecure.patch(
      `/updateCoupon/${_id}`,
      updateCoupon
    );
    console.log(couponRes.id);
    if (couponRes.data.modifiedCount > 0) {
      // reset();
      //Show success PopUp
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `${data.name} is Updated to the Coupon`,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <section className="container px-4 mx-auto">
        <div className="flex items-center gap-x-3 bg-green-500 py-2 w-80 justify-center rounded-md">
          <h2 className="text-3xl font-tauri text-center font-medium text-gray-800 ">
            Coupon List
          </h2>
          <span className="px-3 py-1 text-sm font-tauri text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-pink-600">
            {coupons.length} coupons
          </span>
        </div>

        <div className="flex flex-col mt-6">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 px-4  text-lg font-normal font-abel text-gray-500 dark:text-green-600"
                      >
                        <div className="flex items-center gap-x-3">
                          <span className="ml-4">Coupon Code</span>
                        </div>
                      </th>

                      <th
                        scope="col"
                        className="px-12 py-3.5 text-xl font-normal font-abel text-gray-500 dark:text-green-600"
                      >
                        <button className="flex items-center gap-x-2">
                          <span>Discount %</span>
                        </button>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-lg font-normal font-abel text-gray-500 dark:text-green-600"
                      >
                        <span> Apartment No</span>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-lg font-normal font-abel text-gray-500 dark:text-green-600"
                      >
                        <span>Valid Date</span>
                      </th>
                      <th
                        scope="col"
                        className=" px-4 py-3.5 text-lg  font-normal font-abel text-gray-500 dark:text-green-600"
                      >
                        <span className="">Creation Date</span>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-lg font-normal font-abel text-gray-500 dark:text-green-600"
                      >
                        <span>Coupon Description</span>
                      </th>

                      <th
                        scope="col"
                        className="px-4 py-3.5 text-lg font-normal font-abel text-gray-500 dark:text-green-600"
                      >
                        <span>Action</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                    {coupons.map((coupon, index) => (
                      <tr key={coupon._id}>
                        <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                          <div className="inline-flex items-center gap-x-3">
                            <div className="flex items-center gap-x-2">
                              <td className="dark:text-white ">{index + 1}</td>
                              <div>
                                <h2 className="font-medium text-gray-800 dark:text-white ">
                                  {coupon.code}
                                </h2>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-12 py-4 text-sm font-medium text-left rtl:text-right text-gray-700 whitespace-nowrap">
                          <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                            {/* <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span> */}

                            <h2 className="text-sm font-normal text-emerald-500">
                              {coupon.discount} %
                            </h2>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {coupon.apartmentNo}
                        </td>
                        <td className="px-4 py-4 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-300 whitespace-nowrap">
                          {coupon.validDate}
                        </td>
                        <td className="px-4 py-4 text-sm whitespace-nowrap text-left rtl:text-right">
                          <div className="flex items-center gap-x-2 ">
                            <p className=" text-gray-500 dark:text-gray-300">
                              {coupon.createCouponDate}
                            </p>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 text-left rtl:text-right ">
                          <p className=" text-gray-500 dark:text-gray-300 w-52">
                            {coupon.description}
                          </p>
                        </td>
                        <td class="px-4 py-4 text-sm whitespace-nowrap">
                          <div class="flex items-center gap-x-6">
                            <button
                              onClick={() => handleDeleteCoupon(coupon._id)}
                              class="text-gray-500 transition-colors duration-200 dark:hover:text-red-500 dark:text-gray-300 hover:text-red-500 focus:outline-none"
                            >
                              <FaTrashAlt size={16} />
                            </button>

                            {/* <button class="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none">
                                <FaEdit size={20} />
                              </button> */}
                            <button
                              onClick={() => {
                                setOpen(true);
                              }}
                              className="text-gray-500 transition-colors duration-200 dark:hover:text-yellow-500 dark:text-gray-300 hover:text-yellow-500 focus:outline-none"
                            >
                              <FaEdit size={20} />
                            </button>
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
      {/* Modal Section */}
      <div className="relative flex justify-center mt-4">
        <button
          onClick={() => setIsOpen(true)}
          className="px-6 py-2 mx-auto tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-700 rounded-md hover:bg-green-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
        >
          Add Coupon
        </button>
        {isOpen && (
          <div
            //   x-show={}
            x-transition:enter="transition duration-300 ease-out"
            x-transition:enter-start="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
            x-transition:enter-end="translate-y-0 opacity-100 sm:scale-100"
            x-transition:leave="transition duration-150 ease-in"
            x-transition:leave-start="translate-y-0 opacity-100 sm:scale-100"
            x-transition:leave-end="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
            className="fixed inset-0 z-10 mt-8 overflow-y-auto lg:ml-44 "
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
              <span
                className="hidden sm:inline-block sm:h-screen sm:align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>

              <div className="relative inline-block px-4 pt-8 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900   sm:my-8 sm:w-full sm:max-w-2xl sm:p-6 sm:align-middle">
                <h3
                  className="text-2xl font-tauri leading-6 text-gray-800 capitalize dark:text-green-500"
                  id="modal-title"
                >
                  Create A Coupone Code
                </h3>
                <hr className="my-8 border-green-700" />
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="mt-4 space-y-4"
                >
                  <label className="text-xl font-abel text-gray-700 dark:text-gray-200">
                    Coupon Code
                  </label>

                  <label className="block mt-2">
                    <input
                      type="text"
                      name="code"
                      {...register("code", { required: true })}
                      placeholder="Ex@: APARTMENT10"
                      required
                      className="block w-full px-4 py-4 text-md uppercase placeholder-gray-400/70 dark:placeholder-gray-500  text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                    />
                  </label>
                  <label className="text-xl font-abel text-gray-700 dark:text-gray-200">
                    Discount Percentage
                  </label>
                  <label className="block mt-4 ">
                    <input
                      type="number"
                      name="discount"
                      {...register("discount", { required: true })}
                      placeholder="Ex@: 20"
                      required
                      className="block w-full px-4 py-3 text-md text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                    />
                  </label>
                  <label className="text-xl font-abel text-gray-700 dark:text-gray-200">
                    Apartment No
                  </label>
                  <label className="block mt-4 ">
                    <input
                      type="text"
                      name="apartmentNo"
                      {...register("apartmentNo", { required: true })}
                      placeholder="Ex@: A-105"
                      required
                      className="block w-full uppercase px-4 py-3 text-md text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                    />
                  </label>
                  <label className="text-xl font-abel text-gray-700 dark:text-gray-200">
                    Valid Date
                  </label>
                  <label className="block mt-4 ">
                    <input
                      type="date"
                      name="validDate"
                      {...register("validDate", { required: true })}
                      placeholder="yyyy/mm/dd"
                      required
                      className="block w-full uppercase placeholder-gray-400/70 dark:placeholder-gray-500 px-4 py-3 text-md text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                    />
                  </label>

                  <div>
                    <label className="block text-xl font-abel text-gray-500 dark:text-gray-300">
                      Coupon Description
                    </label>

                    <textarea
                      name="description"
                      {...register("description", { required: true })}
                      placeholder="What is About Coupon"
                      className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                    ></textarea>
                  </div>

                  <div className="mt-4 sm:flex sm:items-center sm:-mx-2">
                    <button
                      type="button"
                      onClick={() => setIsOpen(false)}
                      className="w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-rose-600 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      className="w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-700 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-green-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Edit Coupon */}
      <div className="relative flex justify-center mt-4">
        {open && (
          <div
            //   x-show={}
            x-transition:enter="transition duration-300 ease-out"
            x-transition:enter-start="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
            x-transition:enter-end="translate-y-0 opacity-100 sm:scale-100"
            x-transition:leave="transition duration-150 ease-in"
            x-transition:leave-start="translate-y-0 opacity-100 sm:scale-100"
            x-transition:leave-end="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
            className="fixed inset-0 z-10 mt-8 overflow-y-auto lg:ml-44 "
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
              <span
                className="hidden sm:inline-block sm:h-screen sm:align-middle"
                aria-hidden="true"
              >
                &#8203;
              </span>

              <div className="relative inline-block px-4 pt-8 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900   sm:my-8 sm:w-full sm:max-w-2xl sm:p-6 sm:align-middle">
                <h3
                  className="text-2xl font-tauri leading-6 text-gray-800 capitalize dark:text-green-500"
                  id="modal-title"
                >
                  Update A Coupone Code
                </h3>
                <hr className="my-8 border-green-700" />
                <form
                  onSubmit={handleSubmit(handleUpateCoupon)}
                  className="mt-4 space-y-4"
                >
                  <label className="text-xl font-abel text-gray-700 dark:text-gray-200">
                    Coupon Code
                  </label>

                  <label className="block mt-2">
                    <input
                      type="text"
                      name="code"
                      {...register("code", { required: true })}
                      defaultValue={code}
                      placeholder="Ex@: APARTMENT10"
                      required
                      className="block w-full px-4 py-4 text-md uppercase placeholder-gray-400/70 dark:placeholder-gray-500  text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                    />
                  </label>
                  <label className="text-xl font-abel text-gray-700 dark:text-gray-200">
                    Discount Percentage
                  </label>
                  <label className="block mt-4 ">
                    <input
                      type="number"
                      name="discount"
                      defaultValue={discount}
                      {...register("discount", { required: true })}
                      placeholder="Ex@: 20"
                      required
                      className="block w-full px-4 py-3 text-md text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                    />
                  </label>
                  <label className="text-xl font-abel text-gray-700 dark:text-gray-200">
                    Apartment No
                  </label>
                  <label className="block mt-4 ">
                    <input
                      type="text"
                      name="apartmentNo"
                      defaultValue={apartmentNo}
                      {...register("apartmentNo", { required: true })}
                      placeholder="Ex@: A-105"
                      required
                      className="block w-full uppercase px-4 py-3 text-md text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                    />
                  </label>
                  <label className="text-xl font-abel text-gray-700 dark:text-gray-200">
                    Valid Date
                  </label>
                  <label className="block mt-4 ">
                    <input
                      type="date"
                      name="validDate"
                      defaultValue={validDate}
                      {...register("validDate", { required: true })}
                      placeholder="yyyy/mm/dd"
                      required
                      className="block w-full uppercase placeholder-gray-400/70 dark:placeholder-gray-500 px-4 py-3 text-md text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                    />
                  </label>

                  <div>
                    <label className="block text-xl font-abel text-gray-500 dark:text-gray-300">
                      Coupon Description
                    </label>

                    <textarea
                      name="description"
                      defaultValue={description}
                      {...register("description", { required: true })}
                      placeholder="What is About Coupon"
                      className="block  mt-2 w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border border-gray-200 bg-white px-4 h-32 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                    ></textarea>
                  </div>

                  <div className="mt-4 sm:flex sm:items-center sm:-mx-2">
                    <button
                      type="button"
                      onClick={() => setOpen(false)}
                      className="w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-rose-600 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                    >
                      Cancel
                    </button>

                    <button
                      type="submit"
                      className="w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-700 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-green-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageCoupons;
