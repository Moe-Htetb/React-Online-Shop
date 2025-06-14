import ProductCard from "./ProductCard";
import Container from "./Container";
import useProductStore from "../store/useProductStore";
import useCategoryStore from "../store/useCategoryStore";

const ProductSection = () => {
  const { products } = useProductStore();
  const { Categories } = useCategoryStore();
  const currentCategory = Categories.find((el) => el.isActive === true);

  return (
    <div className="mt-5 mx-3 ">
      <Container>
        <p className="mb-3 text-gray-500 text-sm">Available Products</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 ">
          {products
            .filter(
              (el) =>
                el.category === currentCategory.name ||
                currentCategory.name === "all"
            )
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </Container>
    </div>
  );
};

export default ProductSection;
