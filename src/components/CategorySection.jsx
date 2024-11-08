import React from "react";
import CategoryButton from "./CategoryButton";
import Container from "./Container";

const CategorySection = () => {
  const title = "Product Categories";
  const Categories = ["home ", "about", "men's clothing", "women's clothing"];

  return (
    <section>
      <Container>
        <p className="mb-3 text-gray-500 text-sm">{title}</p>
        <div className="flex overflow-scroll category-group-button">
          <CategoryButton CategoryName="all" current={true} />
          {Categories.map((cate, index) => (
            <CategoryButton key={index} CategoryName={cate} current={false} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CategorySection;
