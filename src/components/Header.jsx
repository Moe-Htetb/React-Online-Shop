import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";
import useCardStore from "../store/useCardStore";

const Header = () => {
  const { carts } = useCardStore();
  return (
    <header className="px-5 mt-3 ">
      <Container>
        <div className="flex justify-between items-center">
          <Link to={"/"} className="text-3xl font-bold ">
            Online Shop
          </Link>
          <Link
            to="/MyCard"
            className="relative px-4 py-3  border border-black"
          >
            My Cart
            <span className="absolute -top-2 -right-3 px-2 py-1 bg-red-500 text-white">
              {carts.length}
            </span>
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
