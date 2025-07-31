import { lazy, Suspense } from "react";
import { QuestionsListSkeleton } from "@widgets/QuestionsList/ui/QuestionListSkeleton";
import { FiltersListSkeleton } from "../../../widgets/FiltersList/ui/FiltersListSkeleton";

import { useGetQuestionsQuery } from "@entities/Questions/api/questionsApi";
import { useQuestionsFilters } from "@features/QuestionFilters/lib/useQuestionsFilters";
import styles from "./styles.module.scss";

const QuestionsList = lazy(
  () => import("@/widgets/QuestionsList/ui/QuestionsList")
);
const FiltersList = lazy(() => import("@/widgets/FiltersList/ui/FiltersList"));

export const QuestionsPage = () => {
  const { filters, queryParams, actions } = useQuestionsFilters();

  const { data: questionsData, isError } = useGetQuestionsQuery(queryParams);

  if (isError) return <div className={styles.error}>Error loading data</div>;

  return (
    <div className={styles.page}>
      <div className={styles.contentWrapper}>
        <aside className={styles.filtersSection}>
          <Suspense fallback={<FiltersListSkeleton />}>
            <FiltersList
              specialization={{
                selectedId: filters.specialization.selectedId,
                options: filters.specialization.options,
                onSelect: filters.specialization.onSelect,
              }}
              skills={filters.skills.options}
              selectedSkillIds={filters.skills.selectedIds}
              onSkillSelect={filters.skills.onSelect}
              selectedComplexities={filters.complexity.selectedValues}
              onComplexitySelect={filters.complexity.onSelect}
              selectedRates={filters.rate.selectedValues}
              onRateSelect={filters.rate.onSelect}
            />
          </Suspense>
        </aside>

        <main className={styles.questionsSection}>
          <Suspense fallback={<QuestionsListSkeleton />}>
            <QuestionsList
              questions={questionsData?.data || []}
              total={questionsData?.total || 0}
              limit={queryParams.limit}
              currentPage={queryParams.page}
              onPageChange={actions.setPage}
            />
          </Suspense>
        </main>
      </div>
    </div>
  );
};
