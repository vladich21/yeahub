// pages/QuestionDetailsPage.tsx
import { useGetQuestionByIdQuery } from "@entities/Questions/api/questionsApi";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./styles.module.scss";

export const QuestionDetailsPage = () => {
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
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        Назад
      </button>
      <div className={styles.page}>
        <h2>{question.title}</h2>
        <p>{question.description}</p>
        <div>
          Короткий ответ
          {question.shortAnswer}
        </div>
        <div>
          Рзавернутый ответ
          {question.longAnswer}
        </div>
      </div>
    </div>
  );
};
