// FiltersListSkeleton.tsx
import styles from "./styles.module.scss";

export const FiltersListSkeleton = () => (
  <div className={styles.FilterSection}>
    <div className={styles.filtersSkeleton}>
      <div className={styles.skeletonFilter} />
      <div className={styles.skeletonFilter} />
      <div className={styles.skeletonFilter} />
      <div className={styles.skeletonFilter} />
      <div className={styles.skeletonFilter} />
    </div>
  </div>
);
