import axios from "axios";

const API = axios.create({
  baseURL:
    process.env.REACT_APP_BASEURL || "https://bitblood-backend-1.onrender.com/api/v1",
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")} `;
  }
  return req;
});

export default API;
