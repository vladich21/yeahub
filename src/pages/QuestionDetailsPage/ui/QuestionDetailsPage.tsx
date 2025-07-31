import { lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import styles from "./styles.module.scss";
import { useQuestionDetails } from "@features/QuestionDetails/lib/useQuestionDetails";

const QuestionHeader = lazy(
  () => import("@/features/QuestionDetails/ui/QuestionHeader")
);
const QuestionContent = lazy(
  () => import("@/features/QuestionDetails/ui/QuestionContent")
);
const QuestionSidebar = lazy(
  () => import("@/features/QuestionDetails/ui/QiestionSidebar")
);

const QuestionDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { question, isLoading, isError, isExpanded, toggleExpand, goBack } =
    useQuestionDetails(id || "");

  if (isLoading) return <div>Загрузка...</div>;
  if (isError) return <div>Ошибка загрузки</div>;
  if (!question) return <div>Вопрос не найден</div>;

  return (
    <div className={styles.page}>
      <article className={styles.questionContainer}>
        <Suspense fallback={<p>Загрузка...</p>}>
          <QuestionHeader
            title={question.title}
            description={question.description}
            onBack={goBack}
          />

          <QuestionContent
            shortAnswer={question.shortAnswer}
            longAnswer={question.longAnswer}
            isExpanded={isExpanded}
            onToggle={toggleExpand}
          />
        </Suspense>
      </article>

      <Suspense fallback={null}>
        <QuestionSidebar
          rate={question.rate}
          complexity={question.complexity}
          skills={question.questionSkills || []}
          keywords={question.keywords || []}
        />
      </Suspense>
    </div>
  );
};

export default QuestionDetailsPage;
