import {
  SkillsFilter,
  SpecializationsFilter,
  ComplexityFilter,
  RatingFilter,
} from "@entities/Filters";
import { SearchQuestion } from "@features/SearchQuestion/ui/SearchQuestion";
import styles from "./styles.module.scss";
import { FiltersListProps } from "./model/types";

const FiltersList = ({
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
export default FiltersList;
