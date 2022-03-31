import { render, screen } from "@testing-library/react";
import Layout from "@/components/layout/Layout";

describe("Layout", () => {
  it("displays children", () => {
    const mockContent = "this is a mock content";
    render(
      <Layout>
        <div>{mockContent}</div>
      </Layout>
    );
    expect(screen.getByText(mockContent)).toBeInTheDocument();
  });

  it("displays banner with logo", () => {
    render(<Layout>hello world</Layout>);
    expect(screen.getByRole("banner")).toHaveTextContent("next/image");
  });
});
