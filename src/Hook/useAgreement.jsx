import { useQuery } from "@tanstack/react-query";
import UseAuth from "./useAuth";
import UseAxiosSecure from "./useAxiosSecure";

const UseAgreement = () => {
  const axiosSecure = UseAxiosSecure();
  const { user } = UseAuth();
  const { refetch, data: agreement = [] } = useQuery({
    queryKey: ["agreement", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/agreements/?email=${user?.email}`);
      // console.log("agreement data", res.data);
      return res.data;
    },
  });
  return [agreement, refetch];
};

export default UseAgreement;
