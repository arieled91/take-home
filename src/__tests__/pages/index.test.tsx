import { render, screen } from "@testing-library/react";
import Page from "@/pages/index";

beforeEach(() => {
  // IntersectionObserver isn't available in test environment
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

describe("Home", () => {
  it("renders", () => {
    render(<Page />);

    // const heading = screen.getByRole("heading", {
    //   name: /welcome to next\.js!/i,
    // });

    // expect(heading).toBeInTheDocument();
  });
});
