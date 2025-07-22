import { baseApi } from "@shared/api/baseApi";
import {
  QuestionData,
  QuestionResponse,
  QuestionsListParams,
} from "../model/types";

export const questionsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getQuestions: builder.query<QuestionResponse, QuestionsListParams>({
      query: (params) => {
        const { page, rate, skills, specialization, complexity, keywords } =
          params || {};
        return {
          url: "questions/public-questions",
          params: { page, rate, skills, complexity, keywords, specialization },
        };
      },
    }),
    getQuestionById: builder.query<QuestionData, string>({
      query: (id) => ({
        url: `questions/public-questions/${id}`,
      }),
    }),
  }),
});

export const { useGetQuestionsQuery, useGetQuestionByIdQuery } = questionsApi;
