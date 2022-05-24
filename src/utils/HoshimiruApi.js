import { create } from "axios";

const HoshimiruApi = () => {
  const axios = create({
    baseURL: "https://livlog.xyz/hoshimiru/constellation",
    withCredentials: false,
  });

  const stars = {}

  stars.getByBaseData = async (lat,lng,date,hour,min) => {
    try {
      const result = await axios({
        method: "get",
        url: "",
        params: {
            lat:lat,
            lng:lng,
            date:date,
            hour:hour,
            min:min,
          }
      });
      return result.data;
    } catch (error) {
      console.log(error.response.data);
      return {};
    }
  };

  return {
    stars,
  };
}

export default HoshimiruApi;