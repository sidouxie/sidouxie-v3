import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const getData = createApi({
  reducerPath: 'getData',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-sidouxie-v2.herokuapp.com',
  }),
  endpoints: (builder) => ({
    getPostes: builder.query({
      query: () => '/api/post',
    }),
  }),
})

export const { useGetPostesQuery } = getData
