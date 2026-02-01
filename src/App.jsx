

import "./App.scss"

import Header from "./componentes/Header/Header.jsx";
import Main from "../src/main/Main.jsx";
import Footer from "./componentes/Footer/Footer.jsx"

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
