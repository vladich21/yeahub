import { Routes, Route } from "react-router-dom";
import { QuestionsPage } from "@/pages/QuestionsPage";
import NotFoundPage from "@/pages/NotFoundPage";
import { QuestionDetailsPage } from "@/pages/QuestionDetailsPage";
import { LoginPage } from "@/pages/LoginPage";
import { RegisterPage } from "@/pages/RegisterPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<QuestionsPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/details/:id" element={<QuestionDetailsPage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
};
