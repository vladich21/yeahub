import { ButtonFilter } from "@/shared/ui/ButtonFilter/ButtonFilter";
import styles from "./styles.module.scss";
import { useState } from "react";

interface SpecializationsFilterProps {
  specializations: Array<{ id: number; title: string }>;
  selectedId?: number;
  onSelect: (id: number) => void;
  limit?: number;
}

export const SpecializationsFilter = ({
  specializations,
  selectedId,
  onSelect,
  limit = 5,
}: SpecializationsFilterProps) => {
  const [showAll, setShowAll] = useState(false);

  const visibleSpecializations = showAll
    ? specializations
    : specializations.slice(0, limit);

  const hasMore = specializations.length > limit;
  return (
    <section className={styles.filterGroup}>
      <h2 className={styles.filterTitle}>Специализации</h2>
      <div className={styles.filterButtons}>
        {visibleSpecializations.map((spec) => (
          <ButtonFilter
            key={spec.id}
            id={spec.id}
            className={` ${styles.filterButton} ${
              selectedId === spec.id ? styles.active : ""
            }`}
            onClick={() => onSelect(spec.id)}
          >
            {spec.title}
          </ButtonFilter>
        ))}
      </div>
      {hasMore && (
        <button
          className={styles.showAllButton}
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Скрыть" : "Показать все"}
        </button>
      )}
    </section>
  );
};
