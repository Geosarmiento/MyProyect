import { useState, useEffect } from "react";

export const usePagination = (data, itemsPerPage = 6) => {
    
  const [currentPage, setCurrentPage] = useState(1);

  // Resetear página cuando cambian los datos
  useEffect(() => {
    setCurrentPage(1);
  }, [data]);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = data.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const nextPage = () => {
    setCurrentPage(prev =>
      Math.min(prev + 1, totalPages)
    );
  };

  const prevPage = () => {
    setCurrentPage(prev =>
      Math.max(prev - 1, 1)
    );
  };

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return {
    currentPage,
    totalPages,
    currentItems,
    nextPage,
    prevPage,
    goToPage
  };
};
