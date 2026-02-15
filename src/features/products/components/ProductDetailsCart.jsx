// src/features/products/components/ProductDetailsCard.jsx
import { useState } from "react";
import { useCart } from "../../cart/hooks/useCart";

const ProductDetailsCard = ({ product }) => {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  return (
    <div style={styles.container}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <div style={styles.info}>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p style={{ fontWeight: "bold" }}>${product.price.toFixed(2)}</p>

        <div style={styles.actions}>
          <input
            type="number"
            min={1}
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            style={styles.input}
          />
          <button style={styles.button} onClick={handleAdd}>
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: { display: "flex", gap: "2rem", margin: "2rem 0" },
  image: { width: "300px", height: "300px", objectFit: "cover", borderRadius: "8px" },
  info: { flex: 1 },
  actions: { display: "flex", gap: "1rem", marginTop: "1rem", alignItems: "center" },
  input: { width: "60px", padding: "0.3rem" },
  button: { padding: "0.5rem 1rem", backgroundColor: "#8B5CF6", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }
};

export default ProductDetailsCard;
