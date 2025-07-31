// pages/QuestionDetailsPage.tsx
import { useGetQuestionByIdQuery } from "@entities/Questions/api/questionsApi";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./styles.module.scss";
import DOMPurify from "dompurify";
import { useState } from "react";
import { ArrowIcon } from "../../../shared/ui/icons/ArrowIcon";
import { ArrowDown } from "../../../shared/ui/icons/ArrowDown";

const QuestionDetailsPage = () => {
  const [open, setOpen] = useState(false);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const {
    data: question,
    isLoading,
    isError,
  } = useGetQuestionByIdQuery(id || "");

  if (isLoading)
    return <div className={styles.loading}>Загрузка вопроса...</div>;
  if (isError)
    return <div className={styles.error}>Ошибка загрузки вопроса</div>;
  if (!question) return <div>Вопрос не найден</div>;

  return (
    <div className={styles.page}>
      <article className={styles.questionContainer}>
        <div className={styles.containerBack}>
          <ArrowIcon />
          <button className={styles.backButton} onClick={() => navigate(-1)}>
            Назад
          </button>
        </div>
        <section className={styles.sectionHeader}>
          <h1 className={styles.title}>{question.title}</h1>
          <p className={styles.description}>{question.description}</p>
        </section>

        <section className={styles.sectionShort}>
          <h2 className={styles.title}>Короткий ответ</h2>
          <div
            className={styles.answerContent}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(question.shortAnswer),
            }}
          />
        </section>

        <section className={styles.sectionLong}>
          <h2 className={styles.title}> Развернутый ответ</h2>
          <div
            className={`${styles.answerContent} ${
              open ? styles.open : styles.collapsed
            }`}
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(question.longAnswer),
            }}
          />
          <div className={styles.containerDown}>
            <button
              className={styles.buttonToggle}
              onClick={() => setOpen(!open)}
            >
              {open ? "Свернуть" : "Раскрыть"}
              <ArrowDown
                className={`${styles.arrowDown} ${open ? styles.expanded : ""}`}
              />
            </button>
          </div>
        </section>
      </article>
      <aside className={styles.asideInfo}>
        <section className={styles.levelItem}>
          <h3 className={styles.titleAside}>Уровень</h3>
          <div className={styles.meta}>
            <span className={styles.rating}>
              Рейтинг: <strong>{question.rate}</strong>
            </span>
            <span className={styles.complexity}>
              Сложность: <strong>{question.complexity}</strong>
            </span>
          </div>
        </section>
        <section className={styles.skillsItem}>
          <h3>Навыки </h3>
          <div className={styles.skillList}>
            {question.questionSkills?.map((skill) => (
              <div key={skill.id} className={styles.skillTag}>
                <span>{skill.title}</span>
              </div>
            ))}
          </div>
        </section>
        <section className={styles.keywordsSection}>
          <h3 className={styles.subtitle}>Ключевые слова</h3>
          <div className={styles.keywordsList}>
            {question.keywords?.map((keyword, index) => (
              <span key={index} className={styles.keyword}>
                #{keyword}
              </span>
            ))}
          </div>
        </section>
      </aside>
    </div>
  );
};

export default QuestionDetailsPage;
