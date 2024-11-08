import React from "react";

import Card from "./Card";
import { Link } from "react-router-dom";
import carts from "../data/Carts";

function CardSection() {
  return (
    <div className=" h-[600px] flex  flex-col">
      <div className="flex flex-col gap-5  ">
        {carts.map((cart) => (
          <Card key={cart.id} cart={cart} />
        ))}
      </div>
      <div className="border-black mt-auto md:border-t w-full border-none">
        <div className="flex justify-end  items-center gap-5 md:gap-32 p-5 ">
          <div>
            <p className="text-gray-500">Total($)</p>
            <p className="text-2xl font-bold">66.9</p>
          </div>
          <div>
            <p className="text-gray-500">TaxO(10%)</p>
            <p className="text-2xl font-bold">6.9</p>
          </div>
          <div>
            <p className="text-gray-500"> Net Total($)</p>
            <p className="text-3xl font-bold">66.9</p>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <Link className="text-center border border-black px-7 py-2 mt-2 w-fit mr-2 md:mr-0">
          Order Now
        </Link>
      </div>
    </div>
  );
}

export default CardSection;
