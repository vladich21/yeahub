// entities/Questions/ui/QuestionCard/QuestionCard.tsx
import { useNavigate } from "react-router-dom";
import type { QuestionData } from "../../model/types";
import styles from "./styles.module.scss";
import DOMPurify from "dompurify";

interface QuestionCardProps {
  question: QuestionData;
}

export const QuestionCard = ({ question }: QuestionCardProps) => {
  const navigate = useNavigate();

  const handleShowDetails = () => {
    navigate(`/questions/${question.id}`);
  };

  return (
    <article className={styles.card}>
      <h2 className={styles.questionTitle}>{question.title}</h2>
      <div className={styles.meta}>
        <span className={styles.rating}>
          Рейтинг: <strong>{question.rate}</strong>
        </span>
        <span className={styles.complexity}>
          Сложность: <strong>{question.complexity}</strong>
        </span>
      </div>

      <div
        className={styles.content}
        dangerouslySetInnerHTML={{
          __html: DOMPurify.sanitize(question.shortAnswer),
        }}
      />
      <nav className={styles.moreLink} onClick={handleShowDetails}>
        Подробнее
      </nav>
    </article>
  );
};
