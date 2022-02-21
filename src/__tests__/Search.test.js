import React, { render, screen } from "@testing-library/react";
import Search from "../components/Search";

describe("Search", () => {
  const validProps = {
    setSearchResults: jest.fn(),
  };
  const { asFragment } = render(
    <Search setSearchResults={validProps.setSearchResults} />
  );

  it("renders correctly", () => {
    expect(asFragment()).toMatchSnapshot();
  });

  test("Submit button renders correctly", () => {
    render(<Search setSearchResults={validProps.setSearchResults} />);
    const buttonElement = screen.getByText("Search");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("search-button");
  });
});
