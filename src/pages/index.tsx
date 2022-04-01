import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import Layout from "../components/layout/Layout";
import { PageWithLayout } from "@/model/app";
import Houses from "../components/houses/Houses";
import { fetchHouses } from "@/services/houses.service";

const Page: PageWithLayout = () => {
  const {
    loaderRef,
    items: houses,
    fetching,
    hasMore,
  } = useInfiniteScroll(fetchHouses);

  return (
    <div>
      <Houses houses={houses} loading={fetching} hasMore={hasMore} />
      <div ref={loaderRef} />
    </div>
  );
};

Page.getLayout = (page) => <Layout>{page}</Layout>;

export default Page;
