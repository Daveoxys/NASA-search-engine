import React, { render } from "@testing-library/react";
import Search from "../components/Search";

describe("Search", () => {
  const { asFragment } = render(<Search />);

  it("renders corrctly", () => {
    expect(asFragment()).toMatchSnapshot();
  });
});
