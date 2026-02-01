import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "../Cart/cartList.scss"

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
    <section >


      {cartItems.map((item) => (
        <div className="cartItems" key={item.id}>

              <div>
                <img className="img" src={item.image} alt={item.name} />
              </div>

              <div>
                <strong>{item.name}</strong>
                <p>{item.description}</p>
                — ${item.price}
              </div>
              
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
