import { useProducts } from "../hooks/useProducts";
import ProductList from "../../products/components/productList";

const ProductsPage = () => {
  const { products, loading, error } = useProducts();

  if (error) return <p>Error loading products: {error}</p>;

  return (
    <div>
      <h1>Products</h1>
      <ProductList products={products} loading={loading} />
    </div>
  );
};

export default ProductsPage;
