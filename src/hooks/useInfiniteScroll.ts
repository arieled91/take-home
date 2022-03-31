import { useEffect, useState } from "react";
import useIntersectionObserver from "./useIntersectionObserver";
import useMounted from "./useMounted";

const useInfiniteScroll = <Item>(
  fetchCallback: (page: number) => Promise<Item[]>,
  firstPage = 1
) => {
  const [currentPage, setCurrentPage] = useState(firstPage);
  const [pages, setPages] = useState<number[]>([]);
  const [fetching, setFetching] = useState(true);
  const [items, setItems] = useState<Item[]>([]);
  const [hasMore, setHasMore] = useState(true);

  const onNewPage = () => setCurrentPage((prev) => prev + 1);
  const { loaderRef } = useIntersectionObserver(onNewPage, fetching);

  const isMounted = useMounted();

  useEffect(() => {
    const addItems = (newItems: Item[]) => {
      if (isMounted()) {
        if (newItems.length > 0) {
          setItems((prevItems) => [...prevItems, ...newItems]);
          setPages((prevPages) => [...prevPages, currentPage]);
          setHasMore(true);
        } else {
          setHasMore(false);
        }
      }
    };

    if (!pages.includes(currentPage) && hasMore) {
      setFetching(true);
      fetchCallback(currentPage)
        .then(addItems)
        .catch((e) => console.error(e))
        .finally(() => isMounted() && setFetching(false));
    }
  }, [currentPage, fetchCallback, hasMore, isMounted, pages]);

  return {
    page: currentPage,
    fetching,
    loaderRef,
    items,
    hasMore,
  };
};

export default useInfiniteScroll;
