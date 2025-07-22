// entities/Questions/ui/QuestionCard/QuestionCard.tsx
import type { QuestionData } from "../../model/types";
import styles from "./styles.module.scss";
import { MarkdownRenderer } from "@shared/ui/MarkdownRenderer/MarkdownRenderer";

interface QuestionCardProps {
  question: QuestionData;
}

export const QuestionCard = ({ question }: QuestionCardProps) => (
  <article className={styles.card}>
    <h2 className={styles.questionTitle}>{question.title}</h2>

    <div className={styles.content}>
      <MarkdownRenderer content={question.shortAnswer} />
    </div>

    <div className={styles.meta}>
      <span className={styles.complexity}>
        Сложность: {question.complexity}
      </span>
      <span className={styles.rating}>Рейтинг: {question.rate}</span>
    </div>

    <button className={styles.moreButton}>Подробнее</button>
  </article>
);
