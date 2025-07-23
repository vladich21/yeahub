// features/questionsList/ui/QuestionsList.tsx
import { useQuestionsList } from "../lib/hooks/useQuestionsList";
import { QuestionCard } from "@entities/Questions/ui/index";
import type { QuestionsListParams } from "@entities/Questions/model/types";
import styles from "./styles.module.scss";

interface QuestionsListProps {
  filters: QuestionsListParams;
}

export const QuestionsList = ({ filters }: QuestionsListProps) => {
  const { questions, isLoading, isError } = useQuestionsList(filters);

  if (isLoading) return <div className={styles.loading}>Loading...</div>;
  if (isError)
    return <div className={styles.error}>Error loading questions</div>;
  if (!questions) return <div>Вопрос не найден</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Список вопросов</h1>
      <div className={styles.list}>
        {questions.map((question) => (
          <QuestionCard key={question.id} question={question} />
        ))}
      </div>
    </div>
  );
};
