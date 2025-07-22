// features/questionsList/lib/hooks/useQuestionsList.ts
import { useGetQuestionsQuery } from "@entities/Questions/api/questionsApi";
import type {
  QuestionData,
  QuestionsListParams,
} from "@entities/Questions/model/types";

export const useQuestionsList = (filters: QuestionsListParams) => {
  const { data, isLoading, isError } = useGetQuestionsQuery(filters);

  return {
    questions: (data?.data as QuestionData[]) || [],
    isLoading,
    isError,
    // total: data?.total || 0,
  };
};
