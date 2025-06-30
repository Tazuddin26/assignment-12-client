import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import UseAxiosPublic from "../../Hook/useAxiosPublic";
import { GiCheckMark } from "react-icons/gi";
import { FaBath, FaBed, FaParking } from "react-icons/fa";
import { GiSofa } from "react-icons/gi";
import { MdApartment, MdSpaceDashboard } from "react-icons/md";
import UseAxiosSecure from "../../Hook/useAxiosSecure";
import { toast } from "react-toastify";

const ApartmentDetails = () => {
  const { id } = useParams();
  const axiosPublic = UseAxiosPublic();
  const axiosSecure = UseAxiosSecure();

  const {
    data: apartment = {},
    refetch,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["apartment", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/apartment/${id}`);
      console.log("apartment details", res.data);
      return res.data;
    },
    enabled: !!id,
  });

  const handleAgreement = async (id) => {
    // setIsStatus("Occupied");
    console.log("agreement id", id);
    const res = await axiosSecure.patch(`/apartments/${id}`);
    console.log("agreement data modifiy", res.data.modifiedCount);
    if (res.data.modifiedCount) {
      // setIsStatus(apartment.status);
      toast.success("congratulations for Rent an Apartment!");
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

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading apartment details</div>;
  return (
    <div className="mt-24 ">
      <header className=" bg-white/10 sha rounded-md">
        <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl font-semibold tracking-wide  lg:text-4xl">
                {apartment.description}
              </h1>
              {/* <p className="mt-4 text-gray-600 dark:text-gray-300">
                We work with the best remunated glasses dealers in US to find
                your new glasses.
              </p> */}
              <div className="grid gap-6 mt-8 sm:grid-cols-2">
                <div className="flex items-center -px-3">
                  <GiCheckMark />

                  <span className="mx-3 flex items-center gap-2">
                    <FaBed size={20} />
                    {apartment.bedRoom_no} BedRoom
                  </span>
                </div>

                <div className="flex items-center -px-3 ">
                  <GiCheckMark />

                  <span className="mx-3 flex items-center gap-2">
                    <FaBath size={20} />
                    {apartment.bathRoom_no} BathRoom
                  </span>
                </div>

                <div className="flex items-center  -px-3 ">
                  <GiCheckMark />

                  <span className="mx-3 flex items-center gap-2">
                    <GiSofa size={20} />
                    {apartment.furnishing}
                  </span>
                </div>

                <div className="flex items-center -px-3 ">
                  <GiCheckMark />

                  <span className="mx-3 flex items-center gap-2">
                    <MdSpaceDashboard size={20} /> {apartment.varanda_no}
                    Varenda
                  </span>
                </div>

                <div className="flex items-center  -px-3 ">
                  <GiCheckMark />

                  <span className="mx-3 flex items-center gap-2">
                    <MdApartment size={20} />
                    {apartment.apartment_no} Apartment
                  </span>
                </div>

                <div className="flex items-center -px-3 ">
                  <GiCheckMark />

                  <span className="mx-3 flex items-center gap-2">
                    <FaParking size={20} />
                    {apartment.parking_space} Parking
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-12 flex items-center gap-4">
              <p className="px-6 py-2 border rounded-xl  ">
                {apartment.status ? `${apartment.status}` : "Available "}
              </p>
              <button
                onClick={() => handleAgreement(id)}
                className="px-5 py-2 btn btn-success"
              >
                agreement
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
            <img
              className="object-cover w-full h-full max-w-2xl rounded-md"
              src={apartment.apartment_img}
              alt="glasses photo"
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default ApartmentDetails;
