import { QuestionCard } from "@entities/Questions/ui";
import { QuestionData } from "@entities/Questions/model/types";
import { Pagination } from "@widgets/Pagination";
import styles from "./styles.module.scss";
import { memo } from "react";

interface Props {
  questions: QuestionData[];
  total: number;
  limit: number;
  currentPage: number;
  onPageChange: (page: string) => void;
}

const QuestionsList = memo(
  ({ questions, total, limit, currentPage, onPageChange }: Props) => {
    if (!questions.length) return <div>No questions found</div>;
    console.log("Рендер QuestionsList");

    return (
      <section className={styles.questionsContainter}>
        <h1 className={styles.title}>Список вопросов</h1>
        <div className={styles.list}>
          {questions.map((question) => (
            <QuestionCard key={question.id} question={question} />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          total={total}
          limit={limit}
          onChange={(page) => onPageChange(String(page))}
        />
      </section>
    );
  }
);
export default QuestionsList;
