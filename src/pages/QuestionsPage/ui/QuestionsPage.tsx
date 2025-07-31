import { FiltersList } from "../../../widgets/FiltersList";
import { QuestionsListWidget } from "../../../widgets/QuestionPageWidgets";
import { useGetSpecializationsQuery } from "../../../entities/Spezializations/api/specializationsApi";
import { useGetQuestionsQuery } from "../../../entities/Questions/api/questionsApi";
import { useGetSkillsQuery } from "../../../entities/Skills/api/skillsApi";
import styles from "./styles.module.scss";
import { useQueryParams } from "../../../shared/lib/hooks/useQueryParams";

export const QuestionsPage = () => {
  const {
    page = "1",
    specialization,
    skills = "",
    rate = "",
    title = "",
    toggleRate,
    setPage,
    setSpecialization,
    toggleSkill,
    complexity = "",
    toggleComplexity,
  } = useQueryParams();

  const selectedSpecId = specialization ? Number(specialization) : undefined;
  const selectedSkillIds = skills.split(",").filter(Boolean).map(Number);
  const selectedComplexities = complexity?.split(",").filter(Boolean);
  const selectedRates = rate.split(",").filter(Boolean);
  // Загрузка данных
  const { data: specData } = useGetSpecializationsQuery({});
  const { data: skillsData } = useGetSkillsQuery({
    specializations: selectedSpecId ? [selectedSpecId] : undefined,
  });

  // Формируем параметры запроса
  const queryParams = {
    ...(title && { title: title.trim() }),
    ...(selectedSpecId && { specialization: selectedSpecId }),
    ...(skills && { skills }), // Передаем строку "1,2,3"
    skillFilterMode: "ANY" as const, // Фильтрация по любому из навыков
    ...(complexity && { complexity: complexity.replace(/\s/g, "") }),
    ...(rate && { rate: rate.replace(/\s/g, "") }),
    page: Number(page || 1),
    limit: 10,
  };

  const {
    data: questionsData,
    isLoading,
    isError,
  } = useGetQuestionsQuery(queryParams);

  if (isLoading) return <div className={styles.loading}>Loading...</div>;
  if (isError) return <div className={styles.error}>Error loading data</div>;

  return (
    <div className={styles.page}>
      <div className={styles.contentWrapper}>
        <aside className={styles.filtersSection}>
          <FiltersList
            specialization={{
              selectedId: selectedSpecId,
              options: specData?.data || [],
              onSelect: (id) => setSpecialization(String(id)),
            }}
            skills={skillsData?.data || []}
            selectedSkillIds={selectedSkillIds}
            onSkillSelect={toggleSkill}
            selectedComplexities={selectedComplexities}
            onComplexitySelect={toggleComplexity}
            selectedRates={selectedRates}
            onRateSelect={toggleRate}
          />
        </aside>

        <main className={styles.questionsSection}>
          <QuestionsListWidget
            questions={questionsData?.data || []}
            total={questionsData?.total || 0}
            limit={10}
            currentPage={Number(page || 1)}
            onPageChange={(page) => setPage(String(page))}
          />
        </main>
      </div>
    </div>
  );
};

// import { QuestionsPageLayout } from "@/widgets/QuestionsPageLayout";
// import { QuestionsFiltersContainer } from "@/features/QuestionsFiltering/ui/QuestionsFiltersContainer";
// import { useQuestionsFilters } from "@/features/QuestionsFiltering/lib/useQuestionsFilters";
// import { useQuestionsPagination } from "@/features/QuestionsPagination/lib/useQuestionsPagination";
// import { QuestionsList } from "../../../features/QuestionsList";

// export const QuestionsPage = () => {
//   const { filters, filtersData } = useQuestionsFilters();
//   const { questions, pagination } = useQuestionsPagination(filters);

//   return (
//     <QuestionsPageLayout
//       filters={
//         <QuestionsFiltersContainer
//           filters={filters}
//           filtersData={filtersData}
//         />
//       }
//       content={
//         <QuestionsList
//           questions={questions.data}
//           pagination={pagination}
//           isLoading={questions.isLoading}
//           isError={questions.isError}
//         />
//       }
//     />
//   );
// };
