import styles from "../../styles/styles.module.scss";
import { ratingRanges } from "@entities/Filters/helpers/constants";

interface RatingFilterProps {
  selectedValues: string[];
  onSelect: (values: string) => void;
}

export const RatingFilter = ({
  selectedValues,
  onSelect,
}: RatingFilterProps) => {
  return (
    <div className={styles.filterGroup}>
      <h3 className={styles.filterTitle}>Рейтинг</h3>
      <div className={styles.filterButtons}>
        {ratingRanges.map((range) => {
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
    </div>
  );
};
