import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

const Checkout = () => {
  const { cartItems, totalPrice, clearCart } = useContext(CartContext);
  const [orderCompleted, setOrderCompleted] = useState(false);

  const handleCheckout = () => {
    if (cartItems.length === 0) return;
    // Aquí podrías integrar API de pago o backend
    clearCart();
    setOrderCompleted(true);
  };

  if (orderCompleted) {
    return <h3>¡Compra finalizada con éxito! Gracias por tu pedido.</h3>;
  }

  if (cartItems.length === 0) {
    return <p>El carrito está vacío</p>;
  }

  return (
    <section>
      <h2>Resumen de pedido</h2>

      {cartItems.map((item) => (
        <div key={item.id}>
          <strong>{item.title}</strong> — {item.quantity} x ${item.price} = $
          {item.quantity * item.price}
        </div>
      ))}

      <hr />
      <h3>Total: ${totalPrice}</h3>
      <button onClick={handleCheckout}>Finalizar compra</button>
    </section>
  );
};

export default Checkout;
