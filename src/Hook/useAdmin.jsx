import { useQuery } from "@tanstack/react-query";
import UseAuth from "./useAuth";
import UseAxiosSecure from "./useAxiosSecure";

const UseAdmin = () => {
  const { user, loading } = UseAuth();
  const axiosSecure = UseAxiosSecure();
  const { data: isAdmin, isLoading: isAdminLoading } = useQuery({
    queryKey: [user?.email, "role"],
    enabled: !!user?.email,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user?.email}`);
      console.log("user Check Response:", res.data);
      return res.data?.admin;
    },
  });

  // return { isAdmin: data?.admin, isMember: data?.member, isLoading };
  return [isAdmin, isAdminLoading];
};

export default UseAdmin;
