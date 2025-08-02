export interface FiltersListProps {
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
