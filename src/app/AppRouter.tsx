import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./layouts";
import { QuestionsPage } from "@pages/QuestionsPage";
import NotFoundPage from "@pages/NotFoundPage";
import { RegisterPage } from "@pages/RegisterPage";
import { LoginPage } from "@pages/LoginPage";
import { ErrorBoundary } from "@shared/ui/ErrorBoundary";
import { QuestionDetailsPage } from "@pages/QuestionDetailsPage";

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
            <QuestionDetailsPage />
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
