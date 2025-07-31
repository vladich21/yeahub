// widgets/QuestionsList/ui/QuestionsListSkeleton.tsx
import styles from "./styles.module.scss";

export const QuestionsListSkeleton = () => {
  return (
    <div className={styles.questionsContainterSkeleton}>
      <div className={styles.skeletonTitle} />

      <div className={styles.list}>
        {[...Array(1)].map((_, i) => (
          <div key={i} className={styles.skeletonCard}></div>
        ))}
      </div>
    </div>
  );
};
