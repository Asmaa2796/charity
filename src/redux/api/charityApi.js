import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery(
    {baseUrl:"https://672842bd270bd0b97554d239.mockapi.io/api/charity/"}
  ),
  endpoints: (builder) => ({
    getServices: builder.query({
      query: () => "services",
    }),
    getAbout: builder.query({
      query: () => "about",
    }),
  }),
});
export const { useGetServicesQuery, useGetAboutQuery } = api;