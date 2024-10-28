import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: "useApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/" }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => "user",
      providesTags: ["User"],
    }),
    sendUser: builder.mutation({
      query: (body) => ({
        url: `user/?${body}`,
        method: "PATCH",
        body,
        headers: { "content-type": "application/json" },
      }),
      invalidatesTags: [{ type: "User" }],
      transformResponse: (response) => response.data,
      transformErrorResponse: (response) => response.status,
    }),
  }),
});
export const { useGetUserQuery, useSendUserMutation } = api;
