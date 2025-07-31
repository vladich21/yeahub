import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./layouts";
import { QuestionsPage } from "../pages/QuestionsPage";
// import { QuestionDetailsPage } from "@/pages/QuestionDetailsPage";
import NotFoundPage from "../pages/NotFoundPage";
import { RegisterPage } from "../pages/RegisterPage";
import { LoginPage } from "../pages/LoginPage";
import { lazy, Suspense } from "react";
import { ErrorBoundary } from "../shared/ui/ErrorBoundary";

const QuestionDetailsPage = lazy(
  () => import("@/pages/QuestionDetailsPage/ui/QuestionDetailsPage")
);

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <QuestionsPage />,
      },
      {
        path: "/questions/:id",
        element: (
          <ErrorBoundary>
            <Suspense fallback={<p>Loading...</p>}>
              <QuestionDetailsPage />
            </Suspense>
          </ErrorBoundary>
        ),
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
