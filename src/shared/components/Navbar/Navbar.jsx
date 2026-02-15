import { Link } from "react-router-dom";
import { useCart } from "../../../features/cart/hooks/useCart";
import { useUser } from "../../../features/user/hooks/useUser";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { cartItems } = useCart();
  const { user, login, logout } = useUser();

  const [animatedCount, setAnimatedCount] = useState(0);

  // Animación simple al cambiar el carrito
  useEffect(() => {
    setAnimatedCount(cartItems.reduce((acc, item) => acc + item.quantity, 0));
  }, [cartItems]);

  return (
    <nav style={styles.nav}>
      <div style={styles.logo}>
        <Link to="/">MyStore</Link>
      </div>

      <div style={styles.links}>
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
      </div>

      <div style={styles.actions}>
        <Link to="/cart">
          Cart (<span style={{ transition: "all 0.3s", fontWeight: "bold" }}>{animatedCount}</span>)
        </Link>

        {user ? (
          <>
            <span style={{ marginLeft: "1rem" }}>Hola, {user.name}</span>
            <button style={styles.button} onClick={logout}>Logout</button>
          </>
        ) : (
          <button style={styles.button} onClick={() => login({ name: "Juan", id: 1 })}>
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem 2rem",
    borderBottom: "1px solid #ddd",
    alignItems: "center",
    backgroundColor: "#fff"
  },
  logo: { fontWeight: "bold", fontSize: "1.5rem" },
  links: { display: "flex", gap: "1rem" },
  actions: { display: "flex", alignItems: "center", gap: "1rem" },
  button: { padding: "0.3rem 0.8rem", cursor: "pointer" }
};

export default Navbar;
