import { useCart } from "../../features/cart/hooks/useCart";
import CartItem from "../../features/cart/componests/cartItem/cartItem";
import { useUser } from "../../features/user/hooks/useUser";

const CartPage = () => {
  const { cartItems, clearCart } = useCart();
  const { user } = useUser();

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    if (!user) {
      alert("Debes iniciar sesión para hacer checkout");
      return;
    }
    // Simulación de proceso de compra
    alert(`Gracias por tu compra, ${user.name}!\nTotal: $${totalPrice.toFixed(2)}`);
    clearCart(); // Vacía carrito después de checkout
  };

  if (cartItems.length === 0) {
    return (
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <h2>Tu carrito está vacío 😢</h2>
        <a href="/shop">Ir a la tienda</a>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "800px", margin: "2rem auto" }}>
      <h2>Mi Carrito</h2>
      {cartItems.map(item => (
        <CartItem key={item.id} item={item} />
      ))}

      <div style={styles.summary}>
        <strong>Total: ${totalPrice.toFixed(2)}</strong>
        <button style={styles.button} onClick={clearCart}>Vaciar carrito</button>
        <button style={styles.buttonPrimary} onClick={handleCheckout}>Checkout</button>
      </div>
    </div>
  );
};

const styles = {
  summary: {
    marginTop: "1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  button: {
    padding: "0.5rem 1rem",
    cursor: "pointer",
    marginRight: "0.5rem"
  },
  buttonPrimary: {
    padding: "0.5rem 1rem",
    cursor: "pointer",
    backgroundColor: "#8B5CF6",
    color: "#fff",
    border: "none",
    borderRadius: "4px"
  }
};

export default CartPage;
