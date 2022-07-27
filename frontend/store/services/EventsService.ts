import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Event } from '../../models';
import { transformResponse } from './EventsService.helpers';

const eventsApi = createApi({
  reducerPath: 'eventsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'api/events',
  }),
  tagTypes: ['Events'],
  endpoints: (build) => ({
    getAll: build.query<Event[], void>({
      query: () => ({
        url: '/',
      }),
      transformResponse,
      providesTags: ['Events'],
    }),
    createEvent: build.mutation({
      query: (body) => ({
        url: '/',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Events'],
    }),
    deleteEvent: build.mutation({
      query: ({ id }) => ({
        url: '/',
        method: 'DELETE',
        body: { id },
      }),
      invalidatesTags: ['Events'],
    }),
  }),
});

export const {
  useGetAllQuery,
  useCreateEventMutation,
  useDeleteEventMutation,
} = eventsApi;
export default eventsApi;
