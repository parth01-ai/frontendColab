import axios from "axios";

const base_url = "http://localhost:4000/api/";

const getBuses = async () => {
  const response = await axios.get(`${base_url}trip`);
  if (response.data) {
    return response.data;
  }
};
export const busService = {
  getBuses,
};
