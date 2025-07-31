import styles from "./styles.module.scss";
const QuestionSidebar = ({
  rate,
  complexity,
  skills,
  keywords,
}: {
  rate: number;
  complexity: number;
  skills: Array<{ id: number; title: string }>;
  keywords: string[];
}) => (
  <aside className={styles.asideInfo}>
    <div className={styles.levelItem}>
      <h3>Уровень</h3>
      <div className={styles.meta}>
        <span>
          Рейтинг: <strong>{rate}</strong>
        </span>
        <span>
          Сложность: <strong>{complexity}</strong>
        </span>
      </div>
    </div>

    <div className={styles.skillsItem}>
      <h3>Навыки</h3>
      <div className={styles.skillList}>
        {skills.map((skill) => (
          <span key={skill.id} className={styles.skillTag}>
            {skill.title}
          </span>
        ))}
      </div>
    </div>

    <div className={styles.keywordsSection}>
      <h3>Ключевые слова</h3>
      <div className={styles.keywordsList}>
        {keywords.map((word, i) => (
          <span key={i} className={styles.keyword}>
            #{word}
          </span>
        ))}
      </div>
    </div>
  </aside>
);

export default QuestionSidebar;
