export interface UsePaginationParams {
  total: number;
  limit: number;
  currentPage: number;
  maxVisiblePages?: number;
}

export const usePagination = ({
  total,
  limit,
  currentPage,
  maxVisiblePages = 5,
}: UsePaginationParams) => {
  const totalPages = Math.ceil(total / limit);

  const getPageNumbers = () => {
    if (totalPages <= maxVisiblePages + 2) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages: (number | string)[] = [1];
    let startPage = Math.max(2, currentPage - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages - 1, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(2, endPage - maxVisiblePages + 1);
    }

    if (startPage > 2) pages.push("ellipsis-left");
    for (let i = startPage; i <= endPage; i++) pages.push(i);
    if (endPage < totalPages - 1) pages.push("ellipsis-right");
    pages.push(totalPages);

    return pages;
  };

  return {
    pages: getPageNumbers(),
    totalPages,
    canGoPrev: currentPage > 1,
    canGoNext: currentPage < totalPages,
  };
};
