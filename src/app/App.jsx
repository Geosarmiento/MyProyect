import { BrowserRouter } from "react-router-dom";
import { AppProviders } from "../app/AppProviders.jsx";
import { RoutesApp } from "./RoutesApp";
import Layout from "../shared/components/Layout/Layout.jsx";
import { CartProvider } from "../features/cart/context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <AppProviders>
        <Layout>
          <RoutesApp />
        </Layout>
      </AppProviders>
    </BrowserRouter>
  );
}

export default App;
