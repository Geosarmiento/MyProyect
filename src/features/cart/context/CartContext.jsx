import { createContext, useState, useEffect } from "react";
import { useUser } from "../../user/hooks/useUser";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { user } = useUser(); // obtenemos usuario
  const [cartItems, setCartItems] = useState([]);

  // Cargar carrito desde localStorage por usuario
  useEffect(() => {
    if (user) {
      const storedCart = localStorage.getItem(`cart_${user.id}`);
      if (storedCart) setCartItems(JSON.parse(storedCart));
      else setCartItems([]);
    } else {
      setCartItems([]);
    }
  }, [user]);

  // Guardar carrito en localStorage cuando cambia
  useEffect(() => {
    if (user) {
      localStorage.setItem(`cart_${user.id}`, JSON.stringify(cartItems));
    }
  }, [cartItems, user]);

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems(prev => prev.filter(item => item.id !== productId));
  };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
