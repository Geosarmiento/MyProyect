// features/products/hooks/useProductFilters.js
import { useState, useMemo } from "react";

export const useProductFilters = (products) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (category !== "all") {
      filtered = filtered.filter(p => p.category === category);
    }

    if (search) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    return filtered;
  }, [products, category, search]);

  return { filteredProducts, search, setSearch, category, setCategory };
};
