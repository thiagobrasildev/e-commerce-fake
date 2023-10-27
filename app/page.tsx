import { Hero, NewProducts, Newsletter, ProductsSale, Services } from "@/components";

export default function Home() {
  return (
    <main className="flex flex-col w-full items-center">
      <Hero />
      <Services />
      <NewProducts />
      <ProductsSale />
      <Newsletter />
    </main>
  );
}
