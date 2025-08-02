import { useQuestionDetails } from "@features/QuestionDetails/lib/useQuestionDetails";
import QuestionHeader from "@features/QuestionDetails/ui/QuestionHeader";
import QuestionContent from "@features/QuestionDetails/ui/QuestionContent";
import QuestionSidebar from "@features/QuestionDetails/ui/QiestionSidebar";
import styles from "./styles.module.scss";

interface QuestionDetailsWidgetProps {
  id: string;
}

const QuestionDetailsWidget = ({ id }: QuestionDetailsWidgetProps) => {
  const { question, isError, isExpanded, toggleExpand, goBack } =
    useQuestionDetails(id);

  if (isError) return <div>Ошибка загрузки</div>;
  if (!question) return <div>Вопрос не найден</div>;

  return (
    <div className={styles.page}>
      <article className={styles.questionContainer}>
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
      </article>
      <QuestionSidebar
        rate={question.rate}
        complexity={question.complexity}
        skills={question.questionSkills || []}
        keywords={question.keywords || []}
      />
    </div>
  );
};

export default QuestionDetailsWidget;
