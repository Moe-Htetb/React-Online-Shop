import React from "react";

import Card from "./Card";
import { Link } from "react-router-dom";

import useCardStore from "../store/useCardStore";
import useProductStore from "../store/useProductStore";
import emptyCartImg from "../assets/empty-cart copy.svg";

function CardSection() {
  const { carts } = useCardStore();
  const { products } = useProductStore();

  const total = carts.reduce((pv, cv) => {
    const cost =
      cv.quantity * products.find((el) => el.id === cv.productId).price;
    // console.log(cost);
    return pv + cost;
  }, 0);

  const tax = total * 0.05;

  const netTotal = total + tax;

  return (
    <div className=" h-[600px] flex  flex-col">
      <div className="flex flex-col gap-5  ">
        {carts.length === 0 ? (
          <img
            src={emptyCartImg}
            className=" w-[200px]  block mx-auto mt-32"
            alt="empty"
          />
        ) : (
          carts.map((cart) => <Card key={cart.id} cart={cart} />)
        )}
      </div>
      <div className="border-black mt-auto md:border-t w-full border-none">
        <div className="flex justify-end  items-center gap-5 md:gap-32 p-5 ">
          <div>
            <p className="text-gray-500">Total($)</p>
            <p className="text-2xl font-bold">{total.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-gray-500">TaxO(10%)</p>
            <p className="text-2xl font-bold">{tax.toFixed(2)}</p>
          </div>
          <div>
            <p className="text-gray-500"> Net Total($)</p>
            <p className="text-3xl font-bold">{netTotal.toFixed(2)}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-end  ">
        <button className="text-center border border-black px-7 py-2 mt-2 w-fit mr-2 ">
          Order Now
        </button>
      </div>
    </div>
  );
}

export default CardSection;
