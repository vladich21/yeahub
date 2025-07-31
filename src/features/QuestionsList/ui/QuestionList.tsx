import { QuestionCard } from "@entities/Questions/ui";
import styles from "./styles.module.scss";
import { QuestionData } from "../../../entities/Questions/model/types";
import { Pagination } from "../../../widgets/Pagination";

interface Props {
  questions: QuestionData[];
  total: number;
  limit: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const QuestionsList = ({
  questions,
  total,
  limit,
  currentPage,
  onPageChange,
}: Props) => {
  if (!questions.length) return <div>No questions found</div>;

  return (
    <>
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
          onChange={onPageChange}
        />
      </section>
    </>
  );
};
