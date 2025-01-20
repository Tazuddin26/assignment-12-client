import { useQuery } from "@tanstack/react-query";
import UseAuth from "./useAuth";
import UseAxiosSecure from "./useAxiosSecure";

const UseAdmin = () => {
  const { user, loading } = UseAuth();
  const axiosSecure = UseAxiosSecure();
  const { data, isLoading, error } = useQuery({
    queryKey: [user?.email, "role"],
    enabled: !loading && !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user?.email}`);
      console.log("user Check Response:", res.data);
      return res.data;
    },
  });
  if (error) {
    console.log("Error featching roles:", error);
  }
  return { isAdmin: data?.admin, isMember: data?.member, isLoading };
};

export default UseAdmin;
