import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/", // Replace with your Django API URL
});

export const hello = () => {
  return api.get("");
};

export const submit_interest = (data) => {
  return api.post("", data);
};
