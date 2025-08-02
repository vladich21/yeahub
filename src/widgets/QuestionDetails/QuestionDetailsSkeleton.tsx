import styles from "./styles.module.scss";

export const QuestionDetailsSkeleton = () => {
  return (
    <div className={styles.pageSkeleton}>
      <article className={styles.questionContainerSkeleton}>
        <div className={styles.contentSkeleton} />
        <div className={styles.contentSkeleton} />
        <div className={styles.contentSkeleton} />
      </article>
      <div className={styles.sidebarSkeleton}></div>
    </div>
  );
};
