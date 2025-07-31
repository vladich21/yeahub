// import { useQueryParams } from "@/shared/lib/hooks/useQueryParams";

// import { useGetSkillsQuery } from "@/entities/Skills/api/skillsApi";
// import { useGetSpecializationsQuery } from "../../../entities/Spezializations/api/specializationsApi";

// export const useQuestionsFilters = () => {
//   const queryParams = useQueryParams();

//   // Получаем данные для фильтров
//   const { data: specData } = useGetSpecializationsQuery({});
//   const { data: skillsData } = useGetSkillsQuery({
//     specializations: queryParams.specialization
//       ? [Number(queryParams.specialization)]
//       : undefined,
//   });

//   return {
//     filters: {
//       specialization: queryParams.specialization,
//       skills: queryParams.skills,
//       complexity: queryParams.complexity,
//       rate: queryParams.rate,
//       title: queryParams.title,
//     },
//     filtersData: {
//       specializations: specData?.data || [],
//       skills: skillsData?.data || [],
//     },
//     actions: {
//       setSpecialization: queryParams.setSpecialization,
//       toggleSkill: queryParams.toggleSkill,
//       toggleComplexity: queryParams.toggleComplexity,
//       toggleRate: queryParams.toggleRate,
//     },
//   };
// };

// features/QuestionsFiltering/lib/useQuestionsFilters.ts
import { useQueryParams } from "@/shared/lib/hooks/useQueryParams";
import { useGetSkillsQuery } from "@/entities/Skills/api/skillsApi";
import { useGetSpecializationsQuery } from "../../../entities/Spezializations/api/specializationsApi";

interface UseQuestionsFiltersResult {
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
        selectedId: specialization ? Number(specialization) : undefined,
        onSelect: (id) => setSpecialization(String(id)),
      },
      skills: {
        options: skillsData?.data || [],
        selectedIds: skills.split(",").filter(Boolean).map(Number),
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
      ...(title && { title: title.trim() }),
      ...(specialization && { specialization: Number(specialization) }),
      ...(skills && { skills }), // Передаем строку "1,2,3"
      skillFilterMode: "ANY" as const, // Фильтрация по любому из навыков
      ...(complexity && { complexity: complexity.replace(/\s/g, "") }),
      ...(rate && { rate: rate.replace(/\s/g, "") }),
      page: Number(page || 1),
      limit: 10,
    },
    actions: {
      setPage,
    },
  };
};
