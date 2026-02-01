

import "./App.scss"

import Header from "./componentes/header/Header.jsx";
import Main from "../src/main/Main.jsx";
import Footer from "./componentes/footer/Footer.jsx"

import { CartProvider } from "./context/CartContext.jsx";


function App() {


  return (
    <>
      <CartProvider>
        <div>

          <Header />
          <Main />
          <Footer />
        </div>

      </CartProvider>
    </>

  )
}

export default App
