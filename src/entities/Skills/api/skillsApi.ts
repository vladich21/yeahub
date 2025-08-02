import { baseApi } from "@/shared/api/baseApi";
import type { SkillsParams, SkillsResponse } from "../model/types";

export const skillApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSkills: builder.query<SkillsResponse, SkillsParams>({
      query: (params: SkillsParams) => {
        const { specializations, ...rest } = params;
        return {
          url: "/skills",
          params: {
            ...rest,
            ...(specializations && {
              specializations: specializations.join(","),
            }),
          },
        };
      },
    }),
  }),
  overrideExisting: true,
});

export const { useGetSkillsQuery } = skillApi;
