import { MdVerified } from "react-icons/md";
import UseAxiosSecure from "../../../Hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
const Coupon = () => {
  const axiosSecure = UseAxiosSecure();
  const { data: coupons = [], refetch } = useQuery({
    queryKey: ["coupon"],
    queryFn: async () => {
      const res = await axiosSecure.get("/get-all-coupons");
      return res.data;
    },
  });
  console.log(coupons);
 
  return (
    coupons?
    <div>
      {coupons.map((coupon) => (
        <div key={coupon._id} className="mt-6 space-y-8 xl:mt-12">
          <div className="items-center justify-between max-w-2xl bg-yellow-200 px-8 py-4 mx-auto border-2 border-dashed  cursor-pointer rounded-xl dark:border-purple-700">
            <div className="items-center">
              <div className=" flex justify-between items-center mx-1 my-1 space-y-1">
                <MdVerified size={44} className="text-green-600 text-end" />
                <h2 className="text-2xl px-1 py-1 bg-rose-400 font-abel border rounded-full text-end  sm:text-2xl dark:text-gray-700">
                  For Apartment
                </h2>
                <p className="border px-4 text-gray-200 rounded-full bg-gray-800 text-center flex justify-center items-center">
                  {coupon?.apartmentNo}
                </p>
              </div>

              <p className="text-center text-xl font-tauri">
                Get Coupon Code{" "}
                <span className="border px-1 py-2 rounded-md bg-sky-400">
                  {coupon?.code}
                </span>
              </p>
              <h2 className="text-2xl text-center font-semibold text-gray-500 sm:text-3xl dark:text-pink-700">
                {coupon?.discount} % Off
                <span className="text-sm font-medium text-gray-600">
                  ValidTill:{coupon?.validDate}
                </span>
              </h2>
              <p>{coupon.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>:''
  );
};

export default Coupon;
