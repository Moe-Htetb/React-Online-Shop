import React from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import carts from "../data/Carts";

const ProductCard = ({ product }) => {
  return (
    <Link
      to={`/ProductDetail/${product.id}`}
      className="border border-black  p-5 flex flex-col items-start gap-3  "
    >
      <img src={product.image} alt="" className="h-40" />

      <p className="font-bold line-clamp-2">{product.title}</p>
      <div className="flex items-center gap-2 mt-auto">
        <Rating rate={product.rating.rate} />
      </div>
      <div className="flex justify-between items-end w-full">
        <p>{product.price}</p>
        {carts.find((cart) => cart.product.id == product.id) ? (
          <button className="text-sm border border-black bg-black text-white px-5 py-2">
            Added
          </button>
        ) : (
          <button className="text-sm border border-black px-5 py-2">
            Add to cart
          </button>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
