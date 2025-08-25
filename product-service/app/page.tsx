import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import ProductSection from "@/components/productSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ProductSection />
    </>
  );
}
