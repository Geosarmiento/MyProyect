import { useEffect, useState } from "react";
import { getProducts } from "../services/productService";

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const loadProducts = async () => {
      try {
        setLoading(true);
        const data = await getProducts();
        if (isMounted) {
          setProducts(data);
          setError(null);
        }
      } catch (err) {
        if (isMounted) setError(err.message || "Error loading products");
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadProducts();

    return () => { isMounted = false; };
  }, []);

  return { products, loading, error };
};
