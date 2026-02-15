// src/features/cart/components/CartItem.jsx
import { useCart } from "../../hooks/useCart";

const CartItem = ({ item }) => {
  const { removeFromCart, addToCart } = useCart();

  return (
    <div style={styles.container}>
      <div>
        <strong>{item.name}</strong> - ${item.price.toFixed(2)}
      </div>
      <div style={styles.actions}>
        <button onClick={() => removeFromCart(item.id)}>- Remove</button>
        <span>Qty: {item.quantity}</span>
        <button onClick={() => addToCart(item)}>+ Add</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    padding: "0.8rem",
    borderBottom: "1px solid #ddd"
  },
  actions: {
    display: "flex",
    gap: "0.5rem",
    alignItems: "center"
  }
};

export default CartItem;
