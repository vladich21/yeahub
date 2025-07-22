import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./layouts";
import { QuestionsPage } from "../pages/QuestionsPage";
import { QuestionDetailsPage } from "@/pages/QuestionDetailsPage";
import NotFoundPage from "../pages/NotFoundPage";
import { RegisterPage } from "../pages/RegisterPage";
import { LoginPage } from "../pages/LoginPage";

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
        element: <QuestionDetailsPage />,
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
