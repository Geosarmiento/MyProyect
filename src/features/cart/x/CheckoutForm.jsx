import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

const CheckoutForm = () => {
  const { cartItems, totalPrice, clearCart } = useContext(CartContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const [errors, setErrors] = useState({});
  const [orderCompleted, setOrderCompleted] = useState(false);

  if (cartItems.length === 0 && !orderCompleted) {
    return <p>El carrito está vacío</p>;
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Nombre requerido";
    if (!formData.email) newErrors.email = "Email requerido";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email inválido";
    if (!formData.address) newErrors.address = "Dirección requerida";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Aquí iría integración con backend o pasarela de pago
    clearCart();
    setOrderCompleted(true);
  };

  if (orderCompleted) {
    return <h3>¡Compra completada con éxito! Gracias {formData.name}.</h3>;
  }

  return (
    <div>
      <h2>Resumen de pedido</h2>
      {cartItems.map((item) => (
        <div key={item.id}>
          <strong>{item.title}</strong> — {item.quantity} x ${item.price} = $
          {item.quantity * item.price}
        </div>
      ))}

      <h3>Total: ${totalPrice}</h3>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <span style={{ color: "red" }}>{errors.email}</span>
          )}
        </div>

        <div>
          <label>Dirección:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          {errors.address && (
            <span style={{ color: "red" }}>{errors.address}</span>
          )}
        </div>

        <button type="submit">Finalizar compra</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
