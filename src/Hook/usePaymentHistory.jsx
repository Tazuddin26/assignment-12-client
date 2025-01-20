import { useQuery } from "@tanstack/react-query";
import UseAuth from "./useAuth";
import UseAxiosSecure from "./useAxiosSecure";

const UsePaymentHistory = () => {
  const { user } = UseAuth();
  const axiosSecure = UseAxiosSecure();
  const { data: payments = [], refetch } = useQuery({
    queryKey: ["paymentHistory", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/?email=${user?.email}`);
      console.log("payment", res.data);
      return res.data;
    },
  });

  return [payments, refetch];
};

export default UsePaymentHistory;
