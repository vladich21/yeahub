import {
  SkillsFilter,
  SpecializationsFilter,
  ComplexityFilter,
  RatingFilter,
} from "../../../entities/Filters";
import { SearchQuestion } from "../../../features/SearchQuestion/ui/SearchQuestion";
import styles from "./styles.module.scss";

interface FiltersListProps {
  specialization: {
    selectedId?: number;
    options: Array<{ id: number; title: string }>;
    onSelect: (id: number) => void;
  };
  skills: Array<{ id: number; title: string }>;
  selectedSkillIds: number[];
  onSkillSelect: (id: number) => void;
  selectedComplexities: string[];
  onComplexitySelect: (values: string) => void;
  selectedRates: string[];
  onRateSelect: (value: string) => void;
}

export const FiltersList = ({
  specialization,
  skills,
  selectedSkillIds,
  onSkillSelect,
  selectedComplexities,
  onComplexitySelect,
  selectedRates,
  onRateSelect,
}: FiltersListProps) => {
  return (
    <aside className={styles.FilterSection}>
      <SearchQuestion />
      <SpecializationsFilter
        specializations={specialization.options}
        selectedId={specialization.selectedId}
        onSelect={specialization.onSelect}
        limit={5}
      />
      <SkillsFilter
        skills={skills}
        limit={7}
        selectedIds={selectedSkillIds}
        onSelect={onSkillSelect}
      />
      <ComplexityFilter
        selectedValues={selectedComplexities}
        onSelect={onComplexitySelect}
      />
      <RatingFilter selectedValues={selectedRates} onSelect={onRateSelect} />
    </aside>
  );
};
