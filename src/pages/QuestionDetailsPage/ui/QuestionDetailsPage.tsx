import { lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import { QuestionDetailsSkeleton } from "@widgets/QuestionDetails/QuestionDetailsSkeleton";
const QuestionDetailsWidget = lazy(
  () => import("@widgets/QuestionDetails/QuestionDetailsWidgets")
);

const QuestionDetailsPage = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) {
    return <div>Неверный ID вопроса</div>;
  }

  return (
    <Suspense fallback={<QuestionDetailsSkeleton />}>
      {id && <QuestionDetailsWidget id={id} />}
    </Suspense>
  );
};

export default QuestionDetailsPage;
