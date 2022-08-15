import axios from "axios";

export const dataReq = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/users",
});

