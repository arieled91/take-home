import { render } from "@testing-library/react";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

describe("useIntersectionObserver hook", () => {
  it("observes", () => {
    const onLoad = jest.fn();
    const observe = jest.fn();
    const unobserve = jest.fn();

    window.IntersectionObserver = jest.fn().mockReturnValue({
      observe,
      unobserve,
    });

    const TestComponent = () => {
      const { loaderRef } = useIntersectionObserver(onLoad, false);
      return <div ref={loaderRef}>hello world</div>;
    };

    const { unmount } = render(<TestComponent />);
    unmount();

    expect(observe).toHaveBeenCalledTimes(1);
    expect(unobserve).toHaveBeenCalledTimes(1);
  });

  it("runs callback", () => {
    jest.useFakeTimers();
    const onLoad = jest.fn();
    const observe = jest.fn();
    const unobserve = jest.fn();

    const intersectionObserver = (window.IntersectionObserver = jest
      .fn()
      .mockReturnValue({
        observe,
        unobserve,
      }));

    const TestComponent = () => {
      const { loaderRef } = useIntersectionObserver(onLoad, false);
      return <div ref={loaderRef}>hello world</div>;
    };

    render(<TestComponent />);

    const [callback] = intersectionObserver.mock.calls[0];
    callback([{ isIntersecting: true }]);
    jest.runOnlyPendingTimers();

    expect(onLoad).toHaveBeenCalledTimes(1);
  });
});
