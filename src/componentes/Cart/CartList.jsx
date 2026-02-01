import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartList = () => {
  const {
    cartItems,
    totalPrice,
    addToCart,
    decreaseQuantity,
    removeFromCart,
    clearCart,
  } = useContext(CartContext);


  return (
    <section>
      

      {cartItems.map((item) => (
        <div key={item.id}>
          <strong>{item.title}</strong> — ${item.price}
          <div>
            <button onClick={() => decreaseQuantity(item.id)}>-</button>
            <span> {item.quantity} </span>
            <button onClick={() => addToCart(item)}>+</button>
            <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
          </div>
         {/* <p>Subtotal: ${item.quantity * item.price}</p>*/}
        </div>
      ))}

      <hr />
      <h4>Total: ${totalPrice}</h4>
      <button onClick={clearCart}>Vaciar carrito</button>
    </section>
  );
};

export default CartList;
