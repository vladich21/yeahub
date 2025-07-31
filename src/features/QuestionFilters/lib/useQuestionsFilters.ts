import { useQueryParams } from "@/shared/lib/hooks/useQueryParams";

import { useGetSkillsQuery } from "@/entities/Skills/api/skillsApi";
import { useGetSpecializationsQuery } from "../../../entities/Spezializations/api/specializationsApi";

export const useQuestionsFilters = () => {
  const queryParams = useQueryParams();

  // Получаем данные для фильтров
  const { data: specData } = useGetSpecializationsQuery({});
  const { data: skillsData } = useGetSkillsQuery({
    specializations: queryParams.specialization
      ? [Number(queryParams.specialization)]
      : undefined,
  });

  return {
    filters: {
      specialization: queryParams.specialization,
      skills: queryParams.skills,
      complexity: queryParams.complexity,
      rate: queryParams.rate,
      title: queryParams.title,
    },
    filtersData: {
      specializations: specData?.data || [],
      skills: skillsData?.data || [],
    },
    actions: {
      setSpecialization: queryParams.setSpecialization,
      toggleSkill: queryParams.toggleSkill,
      toggleComplexity: queryParams.toggleComplexity,
      toggleRate: queryParams.toggleRate,
    },
  };
};
