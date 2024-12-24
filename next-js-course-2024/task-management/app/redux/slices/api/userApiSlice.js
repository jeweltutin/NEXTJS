import { apiSlice } from "../apiSlice";


const USER_URL = "/user";

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        updateUser: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}/profile`,
                method: "PUT",
                body: data,
                credentials: "include"
            }),
        }),
        getUserData: builder.query({
            query: () => ({
                url: '/user/profile', // Replace with your actual API endpoint to fetch user data
                method: 'GET',
                credentials: 'include', // Include credentials for session management
            }),
            // Optional: You can add more configuration here for caching, refetching, etc.
            refetchOnMountOrArgChange: true, // Ensures data is refetched when component mounts or arguments change
        }),
        getTeamList: builder.query({
            query: () => ({
                url: `${USER_URL}/get-team`,
                method: "GET",
                credentials: "include"
            }),
            refetchOnMountOrArgChange: true, // Ensures no cached data is used
        }),
        deleteUser: builder.mutation({
            query: (id) => ({
                url: `${USER_URL}/${id}`,
                method: "DELETE",
                credentials: "include"
            })
        }),

        userAction: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}/${data.id}`,
                method: "PUT",
                body: data,
                credentials: "include"
            })
        }),

        getNotification: builder.query({
            query: () => ({
                url: `${USER_URL}/notification`,
                method: "GET",
                credentials: "include"
            })
        }),

        markNotiAsRead: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}/read-noti?isReadType=${data.type}&id=${data?.id}`,
                method: "PUT",
                body: data,
                credentials: "include"
            })
        }),

        changePassword: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}/change-password`,
                method: "PUT",
                body: data,
                credentials: "include"
            })
        })
    }),
});

export const { useUpdateUserMutation, useGetUserDataQuery, useGetTeamListQuery, useDeleteUserMutation, useUserActionMutation, useGetNotificationQuery, useMarkNotiAsReadMutation, useChangePasswordMutation } = userApiSlice;