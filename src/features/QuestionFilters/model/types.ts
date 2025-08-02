export interface UseQuestionsFiltersResult {
  filters: {
    specialization: {
      options: Array<{ id: number; title: string }>;
      selectedId?: number;
      onSelect: (id: number) => void;
    };
    skills: {
      options: Array<{ id: number; title: string }>;
      selectedIds: number[];
      onSelect: (id: number) => void;
    };
    complexity: {
      selectedValues: string[];
      onSelect: (value: string) => void;
    };
    rate: {
      selectedValues: string[];
      onSelect: (value: string) => void;
    };
    title: string;
  };
  queryParams: {
    title?: string;
    specialization?: number;
    skills?: string;
    complexity?: string;
    rate?: string;
    page: number;
    limit: number;
    skillFilterMode: "ANY" | "ALL";
  };
  actions: {
    setPage: (value: string) => void;
  };
}
