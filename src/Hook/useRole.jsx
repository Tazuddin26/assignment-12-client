import { useQuery } from "@tanstack/react-query";
import UseAuth from "./useAuth";
import UseAxiosSecure from "./useAxiosSecure";

const UseRole = () => {
  const axiosSecure = UseAxiosSecure();
  const { user, loading } = UseAuth();
  console.log(user, "useAdmin user");

  const { data: role, isLoading } = useQuery({
    queryKey: ["role", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const { data } = await axiosSecure(`/users/role/${user?.email}`);
      return data?.role || null;
    },
  });
  // console.log(role, "useAdmin");
  return [role, isLoading];
};

export default UseRole;
