import { Product } from "entities/product/model/product";
import { useEffect, useState } from "react";
import ProductList from "widgets/product-list";
import axios from "axios";

const ShopPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get<Product[]>("https://fakestoreapi.com/products")
      .then(({ data }) => setProducts(data));
  }, []);

  return (
    <div>
      <ProductList products={products} />
    </div>
  );
};

export default ShopPage;
