import { createContext, useState, useEffect } from "react";




export const CartContext = createContext();
export const CartProvider = ({ children }) => {

    const [cartItems, setCartItems] = useState(() => {
    // Cargar carrito inicial desde LocalStorage
    const storedCart = localStorage.getItem("cartItems");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // Guardar en LocalStorage cada vez que cartItems cambie
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

    

 // función para agregar un producto
  const addToCart = (product) => {
    setCartItems((prev) => {
      const exist = prev.find((item) => item.id === product.id);
      if (exist) {
        // si ya existe, incrementa la cantidad
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  

  // cantidad total de productos
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // precio total del carrito
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );



  // disminuir cantidad (-1)
  const decreaseQuantity = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // eliminar producto completamente
  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // vaciar carrito
  const clearCart = () => {
    setCartItems([]);
  };





  return (
    
    <CartContext.Provider value={{ 
        cartItems, addToCart, removeFromCart, totalItems, totalPrice, decreaseQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
