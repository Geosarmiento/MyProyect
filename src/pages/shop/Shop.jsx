import { useProducts, ProductList } from "../../features/products";
import { useProductFilters } from "../../features/products/hooks/useProductFilters";
import { usePagination } from "../../shared/hooks/usePagination"

const Shop = () => {
  const { products, loading, error } = useProducts();
  const { filteredProducts, search, setSearch, category, setCategory } = useProductFilters(products);
  const { currentItems, currentPage, totalPages, goNext, goPrev } = usePagination(filteredProducts, 6);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products: {error}</p>;

  return (
    <div className="shop-page">
      <h1>Shop</h1>

      {/* Filtros y búsqueda */}
      <div className="shop-controls">
        <input 
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search products..."
        />
        <select value={category} onChange={e => setCategory(e.target.value)}>
          <option value="all">All</option>
          <option value="clothing">Clothing</option>
          <option value="accessories">Accessories</option>
        </select>
      </div>

      {/* Lista de productos */}
      <ProductList products={currentItems} loading={loading} />

      {/* Paginación */}
      <div className="pagination">
        <button onClick={goPrev} disabled={currentPage === 1}>Prev</button>
        <span>{currentPage} / {totalPages}</span>
        <button onClick={goNext} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
};

export default Shop;
