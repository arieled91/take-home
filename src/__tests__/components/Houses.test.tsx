import { render, screen } from "@testing-library/react";
import Houses from "@/components/Houses";
import { mockHouses } from "@/__tests__/__mocks__/houses";
import { currency } from "@/helpers/formatter";

describe("Houses", () => {
  it("displays houses data", () => {
    jest
      .spyOn(currency, "format")
      .mockImplementation((value: number | bigint) => value.toString());

    render(<Houses houses={mockHouses} />);
    mockHouses.forEach((house) => {
      expect(
        screen.getByText(house.address, { exact: false })
      ).toBeInTheDocument();
      expect(
        screen.getByText(house.homeowner, { exact: false })
      ).toBeInTheDocument();
      expect(screen.getByText(house.price)).toBeInTheDocument();
    });
  });

  it("displays skeletons when loading", () => {
    render(<Houses houses={[]} loading={true} />);
    expect(screen.getAllByTestId("skeleton")).toHaveLength(4);
  });
});
