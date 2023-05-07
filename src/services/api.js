import axios from "axios";

const getData = (endpoint, params) => {
  const options = {
    method: "GET",
    url: `${import.meta.env.VITE_API_URL}${endpoint}`,
    params: params,
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_API_KEY,
      "X-RapidAPI-Host": import.meta.env.VITE_API_HOST,
    },
  };

  return axios.request(options);
};

export default getData;
