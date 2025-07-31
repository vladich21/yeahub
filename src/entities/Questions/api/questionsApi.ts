import { baseApi } from "@/shared/api/baseApi";
import {
  QuestionData,
  QuestionResponse,
  QuestionsListParams,
} from "../model/types";

export const questionsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getQuestions: builder.query<QuestionResponse, QuestionsListParams>({
      query: (params) => {
        const queryParams: Record<string, unknown> = {
          page: params.page || 1,
          limit: params.limit || 10,

          skillFilterMode: params.skillFilterMode || "ANY",
        };

        if (params.skills)
          queryParams.skills = params.skills.replace(/\s/g, "");
        if (params.specialization)
          queryParams.specialization = params.specialization;
        if (params.rate) queryParams.rate = params.rate.replace(/\s/g, "");
        if (params.complexity)
          queryParams.complexity = params.complexity.replace(/\s/g, "");
        if (params.keywords)
          queryParams.keywords = params.keywords.replace(/\s/g, "");
        if (params.title) queryParams.title = params.title;
        if (params.titleOrDescription)
          queryParams.titleOrDescription = params.titleOrDescription;

        return {
          url: "questions/public-questions",
          params: queryParams,
        };
      },
    }),
    getQuestionById: builder.query<QuestionData, string>({
      query: (id) => ({
        url: `questions/public-questions/${id}`,
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetQuestionsQuery, useGetQuestionByIdQuery } = questionsApi;
