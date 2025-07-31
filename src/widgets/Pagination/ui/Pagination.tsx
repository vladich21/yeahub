import { PaginationArrow } from "../../../shared/ui/PaginationArrow/PaginationArrow";
import styles from "./styles.module.scss";

interface PaginationProps {
  currentPage: number;
  total: number;
  limit: number;
  onChange: (page: number) => void;
}
export const Pagination = ({
  currentPage,
  total,
  limit,
  onChange,
}: PaginationProps) => {
  const totalPages = Math.ceil(total / limit);
  const maxVisiblePages = 5; // Теперь показываем 5 страниц вокруг текущей
  // const shouldShowEllipsis = totalPages > maxVisiblePages + 2; // +2 для первой и последней страниц

  const getPageNumbers = () => {
    if (totalPages <= maxVisiblePages + 2) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages = [];
    pages.push(1); // Всегда добавляем первую страницу

    // Определяем диапазон страниц вокруг текущей
    let startPage = Math.max(2, currentPage - Math.floor(maxVisiblePages / 2));
    const endPage = Math.min(totalPages - 1, startPage + maxVisiblePages - 1);

    // Корректируем диапазон, если выходим за границы
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(2, endPage - maxVisiblePages + 1);
    }

    // Добавляем многоточие после первой страницы, если нужно
    if (startPage > 2) {
      pages.push("ellipsis-left");
    }

    // Добавляем страницы в диапазоне
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    // Добавляем многоточие перед последней страницей, если нужно
    if (endPage < totalPages - 1) {
      pages.push("ellipsis-right");
    }

    // Всегда добавляем последнюю страницу
    pages.push(totalPages);

    return pages;
  };

  if (totalPages <= 1) return null;

  return (
    <div className={styles.pagination}>
      <button
        onClick={() => onChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={styles.arrowButton}
        aria-label="Previous page"
      >
        <PaginationArrow direction="left" disabled={currentPage === 1} />
      </button>

      {getPageNumbers().map((page, index) => {
        if (page === "ellipsis-left" || page === "ellipsis-right") {
          return (
            <span key={`ellipsis-${index}`} className={styles.ellipsis}>
              ...
            </span>
          );
        }

        return (
          <button
            key={page}
            onClick={() => onChange(page as number)}
            className={`${styles.pageButton} ${
              page === currentPage ? styles.active : ""
            }`}
            aria-current={page === currentPage ? "page" : undefined}
          >
            {page}
          </button>
        );
      })}

      <button
        onClick={() => onChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={styles.arrowButton}
        aria-label="Next page"
      >
        <PaginationArrow
          direction="right"
          disabled={currentPage === totalPages}
        />
      </button>
    </div>
  );
};
