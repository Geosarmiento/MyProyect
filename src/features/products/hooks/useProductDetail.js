import { useState, useEffect } from "react";
import { getProductById } from "../services/productService";

export const useProductDetail = (id) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    let isMounted = true;

    const loadProduct = async () => {
      try {
        setLoading(true);
        const data = await getProductById(id);
        if (!data) throw new Error("Product not found");

        if (isMounted) {
          setProduct(data);
          setError(null);
        }
      } catch (err) {
        if (isMounted) setError(err.message || "Error loading product");
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadProduct();

    return () => { isMounted = false; };
  }, [id]);

  return { product, loading, error };
};
