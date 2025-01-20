import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "./useAxiosPublic";

const UseApartment = () => {
  const axiosPublic = UseAxiosPublic();

  const { data: apartment = [], isPending: loading, refetch } = useQuery({
    queryKey:['apartment'],
    queryFn: async()=>{
        const res = await axiosPublic.get('/apartments')
        return res.data;
    }
  });
  return [apartment, loading, refetch];
};

export default UseApartment;
