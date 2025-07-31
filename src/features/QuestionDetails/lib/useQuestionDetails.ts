import { useState } from "react";
import { useGetQuestionByIdQuery } from "../../../entities/Questions/api/questionsApi";
import { useNavigate } from "react-router-dom";

export const useQuestionDetails = (id: string) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const { data, isLoading, isError } = useGetQuestionByIdQuery(id);

  const toggleExpand = () => setIsExpanded(!isExpanded);
  const goBack = () => navigate(-1);

  return {
    question: data,
    isLoading,
    isError,
    isExpanded,
    toggleExpand,
    goBack,
  };
};
