import axios from "axios";

const useAxios = () => {
  const basicAxios = axios.create({
    baseURL: "https://max-coach.vercel.app/",
  });
  return [basicAxios];
};

export default useAxios;
