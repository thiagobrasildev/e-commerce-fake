import { fireEvent, screen, render } from "@testing-library/react";
import MenuItem from "../MenuItem";

describe("MenuItem Component", () => {
  it("should render correctly", () => {
    render(<MenuItem title="test" />);
  });

  it("should to go link pathname correct", () => {
    render(<MenuItem title="test" />);

    const linkName = screen.getByText("test");

    fireEvent.click(linkName);

    expect(window.location.pathname).toBe("/");
  });
});
