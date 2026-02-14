import "./app.scss"
import Header from "../shared/components/Header/Header.jsx";
import Footer from "../shared/components/Footer/Footer.jsx"

import { CartProvider } from "./context/CartContext.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ProductDetail from "./componentes/Products/PorductDetail/ProductDetail.jsx";
import Home from "./Pages/Home.jsx";
import Shop from "./Pages/Shop.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx"
import Error404 from "./Pages/Error404.jsx"


function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <div>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Shop" element={<Shop />} />
              <Route path="/About" element={<About />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/shop/:id" element={<ProductDetail />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
            
            <Footer />
          </div>
        </BrowserRouter>
      </CartProvider>
    </>
  )
}

export default App
