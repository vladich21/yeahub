import { useQueryParams } from "@/shared/lib/hooks/useQueryParams";
import { useGetSkillsQuery } from "@/entities/Skills/api/skillsApi";
import { useGetSpecializationsQuery } from "../../../entities/Spezializations/api/specializationsApi";
import { UseQuestionsFiltersResult } from "../model/types";

export const useQuestionsFilters = (): UseQuestionsFiltersResult => {
  const {
    specialization,
    skills = "",
    complexity = "",
    rate = "",
    title = "",
    setSpecialization,
    toggleSkill,
    toggleComplexity,
    toggleRate,
    page = "1",
    setPage,
  } = useQueryParams();

  const { data: specData } = useGetSpecializationsQuery({});
  const { data: skillsData } = useGetSkillsQuery({
    specializations: specialization ? [Number(specialization)] : undefined,
  });

  return {
    filters: {
      specialization: {
        options: specData?.data || [],
        selectedId: Number(specialization) || undefined,
        onSelect: (id) => setSpecialization(String(id)),
      },
      skills: {
        options: skillsData?.data || [],
        selectedIds: skills ? skills.split(",").map(Number) : [],
        onSelect: toggleSkill,
      },
      complexity: {
        selectedValues: complexity.split(",").filter(Boolean),
        onSelect: toggleComplexity,
      },
      rate: {
        selectedValues: rate.split(",").filter(Boolean),
        onSelect: toggleRate,
      },
      title,
    },
    queryParams: {
      title: title.trim(),
      specialization: specialization ? Number(specialization) : undefined,
      skills: skills || undefined,
      skillFilterMode: "ANY",
      complexity: complexity || undefined,
      rate: rate || undefined,
      page: Number(page || 1),
      limit: 10,
    },
    actions: {
      setPage,
    },
  };
};
