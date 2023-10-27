import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header";
import { motion } from "framer-motion";
import { Button } from "@/components";
import { CardProvider } from "@/context/CartProvider";

describe("Header Component", () => {
  it("should render correctly", () => {
    render(
      <CardProvider>
        <Header />
      </CardProvider>
    );

    // const titleElement = screen.getByText("ShopFake");
    // const iconElement = screen.getByTestId("shopping-cart-icon");

    // expect(titleElement).toBeInTheDocument();
    // expect(iconElement).toBeInTheDocument();
  });

  //   it("Should text in document", () => {
  //     render(
  //       <CardProvider>
  //         <Header />
  //       </CardProvider>
  //     );

  //     const menuIcon = screen.getByTestId("menu-icon");
  //     const menuMobile = screen.queryByTestId("menu-mobile");

  //     expect(menuMobile).not.toBeInTheDocument();

  //     fireEvent.click(menuIcon);

  //     const expandedMenuMobile = screen.getByTestId("menu-mobile");
  //     expect(expandedMenuMobile).toBeInTheDocument();
  //   });

  //   it("Should click menu mobile correct render", () => {
  //     render(
  //       <CardProvider>
  //         <Header />
  //       </CardProvider>
  //     );
  //     const cartIcon = screen.getByTestId("shopping-cart-icon");
  //     const cartModal = screen.queryByTestId("cart-modal");

  //     expect(cartModal).not.toBeInTheDocument();

  //     fireEvent.click(cartIcon);

  //     const expandedCartModal = screen.getByTestId("cart-modal");
  //     expect(expandedCartModal).toBeInTheDocument();
  //   });
});
