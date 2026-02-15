// hooks/usePagination.js
import { useState } from "react";

export const usePagination = (items, itemsPerPage = 6) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const currentItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goNext = () => setCurrentPage(p => Math.min(p + 1, totalPages));
  const goPrev = () => setCurrentPage(p => Math.max(p - 1, 1));

  return { currentItems, currentPage, totalPages, goNext, goPrev };
};
