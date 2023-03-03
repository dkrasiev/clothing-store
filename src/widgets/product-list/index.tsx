import { Product } from "entities/product/model/product";
import ProductCard from "entities/product/ui";

const ProductList = ({ products }: { products: Product[] }) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default ProductList;
