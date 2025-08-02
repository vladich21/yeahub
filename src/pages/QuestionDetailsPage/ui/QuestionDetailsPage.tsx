import { lazy, Suspense } from "react";
import { useParams } from "react-router-dom";
import { QuestionDetailsSkeleton } from "@widgets/QuestionDetails/QuestionDetailsSkeleton";
const QuestionDetailsWidget = lazy(
  () => import("@widgets/QuestionDetails/QuestionDetailsWidgets")
);

const QuestionDetailsPage = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <Suspense fallback={<QuestionDetailsSkeleton />}>
      {id && <QuestionDetailsWidget id={id} />}
    </Suspense>
  );
};

export default QuestionDetailsPage;
