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
      <button className={styles.backButton} onClick={onBack}>
        Назад
      </button>
    </div>
    <h1 className={styles.title}>{title}</h1>
    {description && <p className={styles.description}>{description}</p>}
  </section>
);

export default QuestionHeader;
