import React from "react";
import useProductStore from "../store/useProductStore";
import useCardStore from "../store/useCardStore";

function Card({ cart: { id, productId, quantity } }) {
  const { products } = useProductStore();
  const { increaseQuantity, decreaseQuantity, removeProductCart } =
    useCardStore();

  const CurrentProduct = products.find((el) => el.id === productId);
  const cost = CurrentProduct.price * quantity;

  const onIncreaseQuantity = () => {
    increaseQuantity(id);
  };
  const onDecreaseQuantity = () => {
    if (quantity > 1) {
      decreaseQuantity(id);
    } else {
      confirm("Are you want to unorder this product");
      removeProductCart(id);
    }
  };
  return (
    <div className=" border border-black p-5 grid grid-cols-1 md:grid-cols-6 mx-2 lg:mx-0">
      <div className=" col-span-1">
        <img src={CurrentProduct.image} className=" h-16 mb-2" alt="" />
      </div>
      <div className=" col-span-3">
        <p className=" mb-2 font-semibold text-xl">{CurrentProduct.title}</p>
        <p className=" text-gray-500 mb-2 text-xl">
          Price ({CurrentProduct.price})
        </p>
      </div>
      <div className=" col-span-1 ">
        <p className=" mb-3 sm:text-xl">Quantity</p>
        <div className=" flex gap-3">
          <button
            onClick={onDecreaseQuantity}
            className=" bg-black text-white px-2 py-0.5 sm:py-1 sm:px-3 "
          >
            -
          </button>
          {parseInt(quantity)}
          <button
            onClick={onIncreaseQuantity}
            className=" bg-black text-white px-2 py-0.5 sm:py-1 sm:px-3"
          >
            +
          </button>
        </div>
      </div>
      <div className="col-span-1">
        <p className=" mt-5 text-end font-2xl font-bold ">{cost}</p>
      </div>
    </div>
  );
}

export default Card;
