import { baseApi } from "@/shared/api/baseApi";
import {
  QuestionData,
  QuestionResponse,
  QuestionsListParams,
} from "../model/types";

export const questionsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getQuestions: builder.query<QuestionResponse, QuestionsListParams>({
      query: ({
        page = 1,
        limit = 10,
        skills,
        specialization,
        rate,
        complexity,
        keywords,
        title,
        titleOrDescription,
      }) => ({
        url: "questions/public-questions",
        params: {
          page,
          limit,
          skillFilterMode: "ANY",
          ...(skills && { skills }),
          ...(specialization && { specialization }),
          ...(rate && { rate }),
          ...(complexity && { complexity }),
          ...(keywords && { keywords }),
          ...(title && { title }),
          ...(titleOrDescription && { titleOrDescription }),
        },
      }),
    }),
    getQuestionById: builder.query<QuestionData, string>({
      query: (id) => `questions/public-questions/${id}`,
    }),
  }),
  overrideExisting: false,
});

export const { useGetQuestionsQuery, useGetQuestionByIdQuery } = questionsApi;
