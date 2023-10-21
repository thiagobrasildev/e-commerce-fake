import { Hero, NewProducts, Newsletter, ProductsSale, Services } from "@/components";
import CartModal from "@/components/ui/CartModal";

export default function Home() {
  return (
    <main className="flex flex-col w-full items-center">
      <CartModal />
      <Hero />
      <Services />
      <NewProducts />
      <ProductsSale />
      <Newsletter />
    </main>
  );
}
