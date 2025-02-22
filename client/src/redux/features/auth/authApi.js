import { apiSlice } from "@/redux/apiSlice";
import { USERS_URL } from "@/redux/constants";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (userData) => ({
        url: `${USERS_URL}/register`,
        method: "POST",
        body: userData,
      }),
    }),
    verifyUser: builder.mutation({
      query: (otpData) => ({
        url: `${USERS_URL}/verifyOTP`,
        method: "POST",
        body: otpData,
      }),
    }),
    loginUser: builder.mutation({
      query: (userData) => ({
        url: `${USERS_URL}/login`,
        method: "POST",
        body: userData,
      }),
    }),
    logoutUser: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: "POST",
      }),
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useVerifyUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation
} = authApi;
