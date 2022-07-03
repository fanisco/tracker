import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { Event } from '../../models';
import { transformResponse } from './EventsService.helpers';

const eventsApi = createApi({
  reducerPath: 'eventsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'api/',
  }),
  endpoints: (build) => ({
    getAll: build.query<Event[], void>({
      query: () => ({
        url: '/trackings',
      }),
      transformResponse,
    }),
  }),
});

export const { useGetAllQuery } = eventsApi;
export default eventsApi;
