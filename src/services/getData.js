import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const getData = createApi({
  reducerPath: 'getData',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api-sidouxie.herokuapp.com',
  }),
  endpoints: (builder) => ({
    getPostes: builder.query({
      query: () => '/postes?_sort=createdAt:DESC',
    }),
  }),
})

export const { useGetPostesQuery } = getData
