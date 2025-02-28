import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://assignment-12-server-gamma-six.vercel.app",
  // baseURL: "http://localhost:5500",
});
const UseAxiosPublic = () => {
  return axiosPublic;
};

export default UseAxiosPublic;
