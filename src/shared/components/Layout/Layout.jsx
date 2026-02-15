import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main style={{ padding: "2rem" }}>
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
