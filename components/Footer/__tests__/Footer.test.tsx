import { render, screen } from "@testing-library/react";
import Footer from "../Footer";
import "@testing-library/jest-dom";

describe("Footer Component", () => {
  it("should render correctly", () => {
    render(<Footer />);
  });

  it("should get text in the document", () => {
    render(<Footer />);

    expect(
      screen.getByText("Rua 60, Ed. São Marcos, Loja 02, São Paulo, Brasil")
    ).toBeInTheDocument();

    expect(screen.getByText("0800-123-4567")).toBeInTheDocument();

    expect(screen.getByText("contato@cartfake.com")).toBeInTheDocument();

    expect(screen.getByText(/Copyright/i)).toBeInTheDocument();
  });
});
