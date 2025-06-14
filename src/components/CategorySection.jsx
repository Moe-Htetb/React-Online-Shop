import React from "react";
import CategoryButton from "./CategoryButton";
import Container from "./Container";
import useCategoryStore from "../store/useCategoryStore";

const CategorySection = () => {
  const title = "Product Categories";
  const { Categories } = useCategoryStore();

  return (
    <section>
      <Container>
        <p className="mb-3 text-gray-500 text-sm">{title}</p>
        <div className="flex overflow-scroll category-group-button">
          {Categories.map((categorie) => (
            <CategoryButton key={categorie.id} Category={categorie} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CategorySection;
