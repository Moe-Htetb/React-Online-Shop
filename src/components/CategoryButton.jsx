import React from "react";

const CategoryButton = ({ CategoryName, current }) => {
  return (
    <button
      className={`border-black border px-4 py-2 mx-1 text-nowrap 
         ${current && "bg-black text-white "}   `}
    >
      {CategoryName}
    </button>
  );
};

export default CategoryButton;
