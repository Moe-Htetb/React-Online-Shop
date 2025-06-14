import React from "react";
import CategorySection from "./components/CategorySection";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductSection from "./components/ProductSection";

export default function App() {
  // console.log(Footer);

  return (
    <div className="px-10">
      <Header />
      <CategorySection />
      <ProductSection />
      <Footer />
    </div>
  );
}
