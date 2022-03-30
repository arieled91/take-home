import { render } from "@testing-library/react";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

beforeEach(() => {
  // IntersectionObserver isn't available in test environment
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

describe("useIntersectionObserver hook", () => {
  it("works", () => {
    const onNewPage = jest.fn();
    const observe = jest.fn();
    const unobserve = jest.fn();

    window.IntersectionObserver = jest.fn().mockReturnValue({
      observe,
      unobserve,
    });

    const TestComponent = () => {
      const { loaderRef } = useIntersectionObserver(onNewPage, false);
      return <div ref={loaderRef}>hello world</div>;
    };

    render(<TestComponent />);
    expect(observe).toHaveBeenCalled();
  });
});
