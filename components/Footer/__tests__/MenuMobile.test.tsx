import { render, screen, fireEvent } from "@testing-library/react";
import MenuMobile from "../MenuMobile";

describe("MenuMobile Component", () => {
  it("should render correctly", () => {
    render(<MenuMobile title="teste">teste</MenuMobile>);
  });

  it("should menu initial closed and expanded after click", () => {
    render(
      <MenuMobile title="Exemplo de Título">
        <div data-testid="content">Conteúdo do menu</div>
      </MenuMobile>
    );

    const contentElement = screen.queryByTestId("content");
    expect(contentElement).not.toBeInTheDocument();

    const toggleButton = screen.getByText("Exemplo de Título");
    fireEvent.click(toggleButton);

    const expandedContentElement = screen.queryByTestId("content");
    expect(expandedContentElement).toBeInTheDocument();
  });
});
