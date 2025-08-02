import { baseApi } from "@/shared/api/baseApi";
import type { SkillsParams, SkillsResponse } from "../model/types";

export const skillApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSkills: builder.query<SkillsResponse, SkillsParams>({
      query: ({ specializations, ...params }) => ({
        url: "/skills",
        params: {
          ...params,
          ...(specializations?.length && {
            specializations: specializations.join(","),
          }),
        },
      }),
    }),
  }),
  overrideExisting: true,
});

export const { useGetSkillsQuery } = skillApi;
