// features/questionsList/ui/QuestionsList.tsx
import { useQuestionsList } from "../lib/hooks/useQuestionsList";
import { QuestionCard } from "@entities/Questions/ui/index";
import type { QuestionsListParams } from "@entities/Questions/model/types";
import styles from "./styles.module.scss";

interface QuestionsListProps {
  filters: QuestionsListParams;
  className?: string;
}

export const QuestionsList = ({ filters, className }: QuestionsListProps) => {
  const { questions, isLoading, isError } = useQuestionsList(filters);

  if (isLoading) return <div className={styles.loading}>Loading...</div>;
  if (isError)
    return <div className={styles.error}>Error loading questions</div>;

  return (
    <div className={`${styles.container} ${className}`}>
      <h1 className={styles.title}>Список вопросов</h1>
      <div className={styles.list}>
        {questions.map((question) => (
          <QuestionCard key={question.id} question={question} />
        ))}
      </div>
    </div>
  );
};
