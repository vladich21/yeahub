import { baseApi } from "@/shared/api/baseApi";
import { SpecializationsParams, SpecializationsResponse } from "../model/types";

export const specializationsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSpecializations: builder.query<
      SpecializationsResponse,
      SpecializationsParams
    >({
      query: (params) => {
        const { page, limit } = params;
        return {
          url: "specializations",
          params: { page, limit },
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const { useGetSpecializationsQuery } = specializationsApi;
