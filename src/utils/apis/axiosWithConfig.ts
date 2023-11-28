import axios from "axios";

let bearerToken = "";
const axiosWithConfig = axios.create();

axiosWithConfig.interceptors.request.use((axiosConfig) => {
  return axiosConfig;
});

export default axiosWithConfig;
