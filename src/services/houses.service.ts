import axios from "axios";
import { HousesResponse } from "@/model/house";
import endpoints from "@/helpers/endpoints";
import axiosRetry from "axios-retry";

axiosRetry(axios, { retryDelay: axiosRetry.exponentialDelay });

export const fetchHouses = async (page: number, size = 24) => {
  const response = await axios.get<HousesResponse>(endpoints.houses, {
    params: { page, per_page: size },
  });
  return response.data.houses;
};
