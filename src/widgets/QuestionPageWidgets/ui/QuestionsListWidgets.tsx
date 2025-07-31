import styles from "./styles.module.scss";
import { QuestionData } from "../../../entities/Questions/model/types";
import { QuestionsList } from "../../../features/QuestionsList";

interface QuestionsListWidgetProps {
  questions: QuestionData[];
  total: number; // Добавьте это
  limit: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const QuestionsListWidget = ({
  questions,
  total,
  limit,
  currentPage,
  onPageChange,
}: QuestionsListWidgetProps) => {
  return (
    <>
      <div className={styles.widget}>
        <QuestionsList
          questions={questions}
          total={total}
          limit={limit}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      </div>
    </>
  );
};
