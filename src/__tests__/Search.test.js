import React, { render, screen } from "@testing-library/react";
import Search from "../components/Search";
import setSearchResults from "../components/App";

describe("Search", () => {
  const { asFragment } = render(<Search setSearchResults={setSearchResults} />);
  const validProps = {
    setSearchResults: jest.fn(),
  };
  it("renders correctly", () => {
    expect(asFragment()).toMatchSnapshot();
  });

  test("Submit button renders correctly", () => {
    render(<Search setSearchResults={validProps.setSearchResults} />);
    const buttonElement = screen.getByText("Search");
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("search-b");
  });
});
