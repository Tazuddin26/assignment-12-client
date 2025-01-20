import { useQuery } from "@tanstack/react-query";
import UseAuth from "./useAuth";
import UseAxiosPublic from "./useAxiosPublic";

const UseAnnouncement = () => {
  const { user, loading } = UseAuth();
  const axiosPublic = UseAxiosPublic();
  const { refetch, data: announcements = [] } = useQuery({
    queryKey: ["announcements"],
    queryFn: async () => {
      const res = await axiosPublic.get("/announcements");
      return res.data;
    },
  });
  return [announcements, refetch];
};

export default UseAnnouncement;
