// features/products/pages/ProductDetail.jsx

import { useParams } from "react-router-dom";
import { useProductDetail } from "../hooks/useProductDetail";
import { useCart } from "../../cart/hooks/useCart";

const ProductDetail = () => {
  const { id } = useParams();
  const { product, loading, error } = useProductDetail(id);
  const { addToCart, cartItems } = useCart();

  const inCart = product ? cartItems.some(item => item.id === product.id) : false;

  if (loading) {
    // Skeleton loading
    return (
      <div className="product-detail skeleton">
        <div className="image"></div>
        <div className="info">
          <div className="line title"></div>
          <div className="line description"></div>
          <div className="line price"></div>
          <div className="line button"></div>
        </div>
      </div>
    );
  }

  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div className="product-detail">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <h2>${product.price}</h2>
        <button 
          onClick={() => addToCart(product)} 
          disabled={inCart}
        >
          {inCart ? "In Cart" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
