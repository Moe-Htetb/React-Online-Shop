import React from "react";
import useCategoryStore from "../store/useCategoryStore";

const CategoryButton = ({ Category: { id, name, isActive } }) => {
  const { activeCategory } = useCategoryStore();

  const onClickHandler = () => {
    activeCategory(id);
  };

  return (
    <button
      onClick={onClickHandler}
      className={`border-black border px-4 py-2 mx-1 whitespace-nowrap 
        ${isActive ? "bg-black text-white" : "bg-white text-black"}`}
    >
      {name}
    </button>
  );
};

export default CategoryButton;
