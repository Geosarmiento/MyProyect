import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home.jsx";
import Shop from "../pages/shop/Shop.jsx";
import CartPage from "../pages/cartPage/cartPage.jsx";
import ProductDetails from "../features/products/pages/ProductDetail.jsx";
import Error404 from "../pages/error/Error404.jsx";

export const RoutesApp = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/shop" element={<Shop />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/shop/:id" element={<ProductDetails />} />
    <Route path="*" element={<Error404 />} />
  </Routes>
);
