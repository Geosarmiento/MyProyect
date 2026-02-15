// features/products/components/ProductList.jsx
import "./productList.scss"

import {Link } from "react-router-dom"
import { useCart } from "../../cart/hooks/useCart";

const ProductList = ({ products, loading }) => {
  const { addToCart, cartItems } = useCart();

  if (loading) {
    // Skeleton loading
    return (
      <div className="product-list">
        {Array.from({ length: 6 }).map((_, idx) => (
          <div key={idx} className="product-card skeleton">
            <div className="image"></div>
            <div className="text"></div>
            <div className="text short"></div>
            <div className="button"></div>
          </div>
        ))}
      </div>
    );
  }

  if (!products || products.length === 0) return <p>No products available.</p>;

  return (
    <div className="product-list">
      {products.map((product) => {
        const inCart = cartItems.some(item => item.id === product.id);
        return (
          <div key={product.id} className="product-card"> 
            <img src={product.image} alt={product.name} width="200" />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button 
              onClick={() => addToCart(product)} 
              disabled={inCart}
            >
              
              {inCart ? "In Cart" : "Add to Cart"}
            </button>

            <Link to={`/shop/${product.id}`}>Ver</Link>

          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
