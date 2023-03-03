import { Product } from "../model/product";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="border rounded p-4 flex flex-col justify-between">
      <div className="flex items-center justify-center flex-1">
        <img src={product.image} alt="product" />
      </div>

      <div>
        <h1 className="font-bold">{product.title}</h1>
        <p>{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
