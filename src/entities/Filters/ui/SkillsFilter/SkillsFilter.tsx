import { memo, useState } from "react";
import styles from "../../styles/styles.module.scss";

interface SkillsFilterProps {
  skills: Array<{ id: number; title: string }>;
  selectedIds: number[];
  onSelect: (id: number) => void;
  limit?: number;
}

export const SkillsFilter = memo(
  ({ skills, selectedIds, onSelect, limit = 8 }: SkillsFilterProps) => {
    const [showAll, setShowAll] = useState(false);
    const visibleSkills = showAll ? skills : skills.slice(0, limit);
    const hasMore = skills.length > limit;
    console.log("Рендер SkillsFilter");

    return (
      <div className={styles.filterGroup}>
        <h3 className={styles.filterTitle}>Навыки</h3>
        <div className={styles.filterButtons}>
          {visibleSkills.map((skill) => (
            <button
              key={skill.id}
              className={`${styles.filterButton} ${
                selectedIds.includes(skill.id) ? styles.active : ""
              }`}
              onClick={() => onSelect(skill.id)}
            >
              {skill.title}
            </button>
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
      </div>
    );
  },
  (prev, next) =>
    prev.skills === next.skills &&
    prev.selectedIds.join() === next.selectedIds.join() &&
    prev.onSelect === next.onSelect
);
