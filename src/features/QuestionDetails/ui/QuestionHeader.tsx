import { ArrowIcon } from "@/shared/ui/icons/ArrowIcon";
import styles from "./styles.module.scss";
const QuestionHeader = ({
  title,
  description,
  onBack,
}: {
  title: string;
  description?: string;
  onBack: () => void;
}) => (
  <section className={styles.sectionHeader}>
    <div className={styles.containerBack}>
      <ArrowIcon />
      <span className={styles.backButton} onClick={onBack}>
        Назад
      </span>
    </div>
    <div className={styles.containerHeader}>
      <h1 className={styles.title}>{title}</h1>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  </section>
);

export default QuestionHeader;
