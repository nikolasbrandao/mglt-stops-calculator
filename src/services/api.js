import axios from "axios";

const api = axios.create({
  baseURL: "https://swapi.dev/api/",
  responseType: "json",
});

export default api;
