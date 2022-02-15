import { render, screen } from "@testing-library/react";
import SearchResults from "../components/searchResults";

describe("SearchResults", () => {
  const validProps = ["moon", "earth", "stars"];
  test("It renders images", () => {
    const { asFragment } = render(<SearchResults results={validProps} />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("It renders the correct amount of images if the search exists", () => {
    render(<SearchResults results={validProps} />);
    const images = screen.getAllByAltText("spaceImage");

    expect(images.length).toEqual(3);
    expect(images[0]).toBeInTheDocument();
    expect(images[0]).toHaveClass("search-results__image");
  });
});
