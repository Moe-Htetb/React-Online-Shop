import React from "react";

function Card({ cart }) {
  return (
    <div className=" border border-black p-5 grid grid-cols-1 md:grid-cols-6 mx-2 lg:mx-0">
      <div className=" col-span-1">
        <img src={cart.product.image} className=" h-16" alt="" />
      </div>
      <div className=" col-span-3">
        <p className=" mb-2">{cart.product.title}</p>
        <p className=" text-gray-500">Price ({cart.product.price})</p>
      </div>
      <div className=" col-span-1 ">
        <p className=" mb-2">Quantity</p>
        <div className=" flex gap-3">
          <button className=" bg-black text-white px-2 py-0.5">-</button>
          {cart.quantity}
          <button className=" bg-black text-white px-2 py-0.5">+</button>
        </div>
      </div>
      <div className="col-span-1">
        <p className=" mt-5 text-end font-2xl font-bold ">{cart.cost}</p>
      </div>
    </div>
  );
}

export default Card;
