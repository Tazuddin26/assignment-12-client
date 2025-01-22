import UseAxiosSecure from "./useAxiosSecure";
import UseAuth from "./useAuth";
import { useQuery } from "@tanstack/react-query";

const UseAllAgreements = () => {
  const axiosSecure = UseAxiosSecure();
  const { refetch, data: agreements = [] } = useQuery({
    queryKey: ["agreements"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allAgreements");
      // console.log("agreement data", res.data);
      return res.data;
    },
  });
  return [agreements, refetch];
};

export default UseAllAgreements;
