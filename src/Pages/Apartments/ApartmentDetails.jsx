import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import UseAxiosPublic from "../../Hook/useAxiosPublic";
import { GiCheckMark } from "react-icons/gi";

const ApartmentDetails = () => {
  const { id } = useParams();
  const axiosPublic = UseAxiosPublic();
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

                  <span className="mx-3">Premium selection</span>
                </div>

                <div className="flex items-center -px-3 ">
                  <GiCheckMark />

                  <span className="mx-3">Insurance</span>
                </div>

                <div className="flex items-center  -px-3 ">
                  <GiCheckMark />

                  <span className="mx-3">All legal documents</span>
                </div>

                <div className="flex items-center -px-3 ">
                  <GiCheckMark />

                  <span className="mx-3">From US glasses dealers</span>
                </div>

                <div className="flex items-center  -px-3 ">
                  <GiCheckMark />

                  <span className="mx-3">Payment Security</span>
                </div>

                <div className="flex items-center -px-3 ">
                  <GiCheckMark />

                  <span className="mx-3">Fast shipping (+ Express)</span>
                </div>
              </div>
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
