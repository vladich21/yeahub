import { memo, useState } from "react";
import styles from "../../styles/styles.module.scss";
import { complexityRanges } from "@entities/Filters/helpers/constants";

interface ComplexityFilterProps {
  selectedValues: string[];
  onSelect: (values: string) => void;
}

export const ComplexityFilter = memo(
  ({ selectedValues, onSelect }: ComplexityFilterProps) => {
    const [showAll, setShowAll] = useState(false);
    const visibleRanges = showAll
      ? complexityRanges
      : complexityRanges.slice(0, 4);
    const hasMore = complexityRanges.length > 4;
    return (
      <div className={styles.filterGroup}>
        <h3 className={styles.filterTitle}>Уровень сложности</h3>
        <div className={styles.filterButtons}>
          {visibleRanges.map((range) => {
            const isActive = range.values
              .split(",")
              .some((val) => selectedValues.includes(val));

            return (
              <button
                key={range.label}
                className={`${styles.filterButton} ${
                  isActive ? styles.active : ""
                }`}
                onClick={() => onSelect(range.values)}
              >
                {range.label}
              </button>
            );
          })}
        </div>
        {hasMore && (
          <button
            className={styles.showAllButton}
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Скрыть" : "Показать все"}
          </button>
        )}
      </div>
    );
  }
);
