import { useQuery } from "@tanstack/react-query";
import UseAuth from "./useAuth";
import UseAxiosSecure from "./useAxiosSecure";

const UseMember = () => {
  const { user, loading } = UseAuth();
  const axiosSecure = UseAxiosSecure();
  const { data: isMember, isPending: isMemberLoading } = useQuery({
    queryKey: [user?.email, "isMember"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user.email}`);
      return res.data?.member;
    },
  });
  return [isMember, isMemberLoading];
};

export default UseMember;
