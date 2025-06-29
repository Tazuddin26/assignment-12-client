import axios from "axios";
import { useNavigate } from "react-router-dom";
import UseAuth from "./useAuth";

const axiosSecure = axios.create({
  // baseURL: "https://assignment-12-server-gamma-six.vercel.app",
  baseURL: "http://localhost:5500",
});
const UseAxiosSecure = () => {
  const navigate = useNavigate();
  const { signOutUser } = UseAuth();
  // Interceptors request
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  // interceptors response 401 and 403 status
  axiosSecure.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const status = error.response.status;
      if (status === 401 || status === 403) {
        await signOutUser();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );
  return axiosSecure;
};

export default UseAxiosSecure;
