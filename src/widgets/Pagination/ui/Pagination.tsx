import { PaginationArrow } from "../../../shared/ui/PaginationArrow/PaginationArrow";
import { usePagination } from "../lib/usePagination";
import { PaginationButton } from "./PaginationButton";
import { PaginationEllipsis } from "./PaginationEllipsis";

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
  const { pages, totalPages, canGoPrev, canGoNext } = usePagination({
    total,
    limit,
    currentPage,
  });

  if (totalPages <= 1) return null;

  return (
    <div className={styles.pagination}>
      <button
        onClick={() => onChange(currentPage - 1)}
        disabled={!canGoPrev}
        className={styles.arrowButton}
        aria-label="Previous page"
      >
        <PaginationArrow direction="left" disabled={!canGoPrev} />
      </button>

      {pages.map((page, index) =>
        typeof page === "string" ? (
          <PaginationEllipsis key={`${page}-${index}`} />
        ) : (
          <PaginationButton
            key={page}
            page={page}
            isActive={page === currentPage}
            onClick={() => onChange(page)}
          />
        )
      )}

      <button
        onClick={() => onChange(currentPage + 1)}
        disabled={!canGoNext}
        className={styles.arrowButton}
        aria-label="Next page"
      >
        <PaginationArrow direction="right" disabled={!canGoNext} />
      </button>
    </div>
  );
};
