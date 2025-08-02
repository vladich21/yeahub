import { useNavigate } from "react-router-dom";
import type { QuestionData } from "../../model/types";
import styles from "./styles.module.scss";
import DOMPurify from "dompurify";
import React, { useState } from "react";

interface QuestionCardProps {
  question: QuestionData;
}

export const QuestionCard = ({ question }: QuestionCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const handleShowDetails = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/questions/${question.id}`);
  };
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <article className={styles.card} onClick={toggleExpand}>
      <div className={styles.header}>
        <h2 className={styles.questionTitle}>
          {question.title}
          <span
            className={`${styles.arrow} ${isExpanded ? styles.expanded : ""}`}
          >
            ▼
          </span>
        </h2>
      </div>

      <div
        className={`${styles.contentWrapper} ${
          isExpanded ? styles.expanded : ""
        }`}
      >
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
      </div>
    </article>
  );
};
