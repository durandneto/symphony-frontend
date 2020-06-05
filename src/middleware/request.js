import axios from "axios"

const axiosInstance = axios.create({
    baseURL: 'http://localhost:2706',
  });

  export default axiosInstance