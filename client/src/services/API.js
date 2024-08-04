import axios from "axios";

const API = axios.create({ baseURL: "https://bitblood-1.onrender.com"});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")} `;
  }
  return req;
});

export default API;
