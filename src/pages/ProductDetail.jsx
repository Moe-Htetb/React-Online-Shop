import React from "react";
import { useParams } from "react-router-dom";

import Container from "../components/Container";
import Rating from "../components/Rating";
import BreadCrumb from "../components/BreadCrumb";
import useCardStore from "../store/useCardStore";
import useProductStore from "../store/useProductStore";

function ProductDetail() {
  const { products } = useProductStore();
  const { productSlug } = useParams();
  const CurrentProduct = products.find(
    (product) => product.slug == productSlug
  );

  const { carts, addCard } = useCardStore();

  const isInCart = carts.find((el) => el.productId === CurrentProduct.id);

  const handleAddToCart = () => {
    const newCard = {
      id: Date.now(),
      productId: CurrentProduct.id,
      quantity: 1,
    };
    addCard(newCard);
  };

  return (
    <>
      <Container>
        <BreadCrumb CurrentPageTitle="Product Detail" />
        <div className="border border-black p-5 mt-5 mx-3 md:mx-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="col-span-1">
              <img
                src={CurrentProduct.image}
                alt=""
                className="w-3/4 block mx-auto"
              />
            </div>
            <div className="col-span-1 flex flex-col gap-7 items-start justify-center">
              <h2 className="text-3xl font-bold">{CurrentProduct.title}</h2>
              <p className="text-gray-700 bg-gray-200 px-5 py-1  inline-block">
                {CurrentProduct.category}
              </p>
              <p>{CurrentProduct.description}</p>
              <Rating rate={CurrentProduct.rating.rate} />
              <div className="flex justify-between items-center w-full">
                <p>Price: ${CurrentProduct.price}</p>
              </div>

              {isInCart ? (
                <button
                  className="text-sm border border-black bg-black text-white px-5 py-2"
                  disabled
                >
                  Added
                </button>
              ) : (
                <button
                  onClick={handleAddToCart}
                  className="text-sm border border-black px-5 py-2"
                >
                  Add to Cart
                </button>
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default ProductDetail;
