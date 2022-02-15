import React, { render, screen } from "@testing-library/react";
import App from "../components/App";

describe("App", () => {
  const { asFragment } = render(<App />);

  it("renders correctly", () => {
    expect(asFragment()).toMatchSnapshot();
  });

  test("It renders logo", () => {
    render(<App />);
    const nasaLogo = screen.getByAltText("nasaLogo");

    expect(nasaLogo).toBeInTheDocument();
    expect(nasaLogo).toHaveClass("nasa-logo");
  });
});
