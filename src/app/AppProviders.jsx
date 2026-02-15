
import { CartProvider } from "../features/cart/context/CartContext";
import { UserProvider } from "../features/user/context/userContext.jsx";



export const AppProviders = ({ children }) => {
  return (
    <UserProvider>
    <CartProvider>
      
        {children}
      
    </CartProvider>
    </UserProvider>
  );
};
