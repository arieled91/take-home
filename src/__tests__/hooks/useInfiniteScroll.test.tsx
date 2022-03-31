import { renderHook, act } from "@testing-library/react-hooks";
import useInfiniteScroll from "@/hooks/useInfiniteScroll";
import * as useIntersectionObserver from "@/hooks/useIntersectionObserver";
import * as useMounted from "@/hooks/useMounted";
import { RefObject } from "react";
import { mockHouses } from "@/__tests__/__mocks__/houses";
import { waitFor } from "@testing-library/dom";

afterEach(() => {
  jest.clearAllMocks();
});

describe("useInfiniteScroll hook", () => {
  it("fetches on mount", () => {
    const fetchMock = jest.fn().mockResolvedValue([]);

    jest.spyOn(useIntersectionObserver, "default").mockImplementation(() => ({
      loaderRef: { current: {} } as RefObject<HTMLDivElement>,
    }));

    const { result, unmount } = renderHook(() =>
      useInfiniteScroll(fetchMock, 1)
    );

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(result.current.page).toBe(1);

    unmount();
  });

  it("adds page", async () => {
    const fetchMock = jest.fn().mockResolvedValue(mockHouses);

    const intersectionObserver = jest
      .spyOn(useIntersectionObserver, "default")
      .mockImplementation(() => ({
        loaderRef: { current: {} } as RefObject<HTMLDivElement>,
      }));

    const { result } = renderHook(() => useInfiniteScroll(fetchMock, 1));

    await act(async () => {
      // wait for first fetch to finish
      await waitFor(() => expect(result.current.items.length).toBe(4));

      // simulate scroll callback
      const [onLoad] = intersectionObserver.mock.calls[0];
      onLoad();

      // wait for second fetch to finish
      await waitFor(() => expect(result.current.items.length).toBe(8));
    });

    expect(result.current.page).toBe(2);
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });

  it("handles fetch error", () => {
    console.error = jest.fn();
    const fetchMock = jest.fn().mockRejectedValue(null);

    jest.spyOn(useIntersectionObserver, "default").mockImplementation(() => ({
      loaderRef: { current: {} } as RefObject<HTMLDivElement>,
    }));

    const { result, unmount } = renderHook(() =>
      useInfiniteScroll(fetchMock, 1)
    );

    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(result.current.page).toBe(1);

    unmount();
  });
});
