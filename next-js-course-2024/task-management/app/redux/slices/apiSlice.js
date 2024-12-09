/* import { createApi } from "@reduxjs/toolkit/query";
import {fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "http://localhost:8800/api";

const BASEURL = fetchBaseQuery({ baseUrl: API_URL });

export const apiSlice = createApi({
    BASEURL,
    tagTypes: [],
    endpoints: (builder) => ({}),
  }); */


import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "http://localhost:8800/api";

export const apiSlice = createApi({
    reducerPath: "api", // Required field to define the slice
    baseQuery: fetchBaseQuery({ baseUrl: API_URL }), // Use baseQuery directly
    tagTypes: [], // Optional: Add tags for caching if needed
    endpoints: (builder) => ({}), // Define endpoints here or inject later
});
