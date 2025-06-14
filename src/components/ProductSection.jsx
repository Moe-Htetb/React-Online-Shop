import React from "react";
import ProductCard from "./ProductCard";
import Container from "./Container";
import products from "../data/Products";
import useProductStore from "../store/useProductStore";

const ProductSection = () => {
  const { products } = useProductStore();
  return (
    <div className="mt-5 mx-3 ">
      <Container>
        <p className="mb-3 text-gray-500 text-sm">Available Products</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ProductSection;
