import axios from "axios";
import axiosRetry from "axios-retry";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import { HousesResponse } from "@/model/house";
import endpoints from "../helpers/endpoints";
import Layout from "../components/Layout";
import { PageWithLayout } from "@/model/app";
import Houses from "../components/Houses";

axiosRetry(axios, { retryDelay: axiosRetry.exponentialDelay });

const fetchHouses = async (page: number) => {
  const response = await axios.get<HousesResponse>(endpoints.houses, {
    params: { page, per_page: 24 },
  });
  return response.data.houses;
};

const Page: PageWithLayout = () => {
  const { loaderRef, items: houses, fetching } = useInfiniteScroll(fetchHouses);

  return (
    <div>
      <Houses houses={houses} loading={fetching} />
      <div ref={loaderRef} />
    </div>
  );
};

Page.getLayout = (page) => <Layout>{page}</Layout>;

export default Page;
