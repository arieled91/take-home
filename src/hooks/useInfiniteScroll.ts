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

  const onNewPage = () => setCurrentPage((prev) => prev + 1);
  const { loaderRef } = useIntersectionObserver(onNewPage, fetching);

  const isMounted = useMounted();

  useEffect(() => {
    if (!pages.includes(currentPage)) {
      setFetching(true);
      fetchCallback(currentPage)
        .then((newItems) => {
          if (isMounted()) {
            setItems((prevItems) => [...prevItems, ...newItems]);
            setPages((prevPages) => [...prevPages, currentPage]);
          }
        })
        .catch((e) => console.error(e))
        .finally(() => isMounted() && setFetching(false));
    }
  }, [currentPage, fetchCallback, isMounted, pages]);

  return {
    page: currentPage,
    fetching,
    loaderRef,
    items,
  };
};

export default useInfiniteScroll;
