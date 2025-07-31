import styles from "./styles.module.scss";
export const PaginationButton = ({
  page,
  isActive,
  onClick,
}: {
  page: number;
  isActive: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className={`${styles.pageButton} ${isActive ? styles.active : ""}`}
    aria-current={isActive ? "page" : undefined}
  >
    {page}
  </button>
);
