import React from "react";
import Rating from "./Rating";
import { Link, useNavigate } from "react-router-dom";
// import carts from "../data/Carts";
import useCardStore from "../store/useCardStore";

const ProductCard = ({ product }) => {
  const { carts, addCard } = useCardStore();

  const navigate = useNavigate();

  const handleCart = () => {
    navigate(`/ProductDetail/${product.id}`);
  };
  const handleAdded = (e) => {
    e.stopPropagation();
  };
  const handleAddToCart = (e) => {
    e.stopPropagation();
    const newCard = {
      id: Date.now(),
      productId: product.id,
      quantity: 1,
    };
    addCard(newCard);
  };
  return (
    <div
      className="border border-black  p-5 flex flex-col items-start gap-3  "
      onClick={handleCart}
    >
      <img src={product.image} alt="" className="h-40" />

      <p className="font-bold line-clamp-2">{product.title}</p>
      <div className="flex items-center gap-2 mt-auto">
        <Rating rate={product.rating.rate} />
      </div>
      <div className="flex justify-between items-end w-full">
        <p>{product.price}</p>
        {carts.find((cart) => cart.productId == product.id) ? (
          <button
            className="text-sm border border-black bg-black text-white px-5 py-2"
            onClick={handleAdded}
          >
            Added
          </button>
        ) : (
          <button
            className="text-sm border border-black px-5 py-2"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
