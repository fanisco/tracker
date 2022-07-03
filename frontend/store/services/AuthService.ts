import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setToken } from '../features/authSlice';

// import { LoginInput } from '../../pages/login.page';
// import { RegisterInput } from '../../pages/register.page';
// import { IUser } from './types';
// import { userApi } from './userApi';

const authAPI = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/api/auth/',
  }),
  endpoints: (builder) => ({
    // registerUser: builder.mutation<IUser, RegisterInput>({
    //   query(data) {
    //     return {
    //       url: 'register',
    //       method: 'POST',
    //       body: data,
    //     };
    //   },
    //   transformResponse: (result: { data: { user: IUser } }) =>
    //     result.data.user,
    // }),
    login: builder.mutation<
      { token: string },
      { email: string; password: string }
    >({
      query(data) {
        return {
          url: '/login',
          method: 'POST',
          body: data,
          credentials: 'include',
        };
      },
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setToken(data.token));
        } catch (error) {}
      },
    }),
    // logoutUser: builder.mutation<void, void>({
    //   query() {
    //     return {
    //       url: 'logout',
    //       credentials: 'include',
    //     };
    //   },
    // }),
  }),
});

export const {
  // useLoginUserMutation,
  // useRegisterUserMutation,
  useLoginMutation,
} = authAPI;
export default authAPI;
