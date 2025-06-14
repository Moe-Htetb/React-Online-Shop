import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/Products";
import Container from "../components/Container";
import Rating from "../components/Rating";
import BreadCrumb from "../components/BreadCrumb";

function ProductDetail() {
  const { productId } = useParams();
  // console.log(productId);

  const CurrentProduct = products.find((product) => product.id == productId);

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
                <p> Price:{CurrentProduct.price}</p>
                <button className="text-sm border border-black px-5 py-2">
                  Add to Card
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>{" "}
    </>
  );
}

export default ProductDetail;
