import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { BaseQueryFn } from "@reduxjs/toolkit/query";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
});

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: baseQuery as BaseQueryFn,
  endpoints: () => ({}),
});
