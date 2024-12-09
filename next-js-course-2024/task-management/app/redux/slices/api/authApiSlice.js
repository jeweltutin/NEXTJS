import { apiSlice } from "../apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        Login: builder.mutation({
            query: (data) => ({
                url: "/user/login", // Relative to baseUrl
                method: "POST",
                body: data,
                credentials: "include", // Ensure cookies are sent
            }),
        }),
    }),
});

export const { useLoginMutation } = authApiSlice;
