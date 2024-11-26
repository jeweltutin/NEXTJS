import { createApi } from "@reduxjs/toolkit/query";
import {fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = "http://localhost:8800/api";

const BASEURL = fetchBaseQuery({ baseUrl: API_URL });

export const apiSlice = createApi({
    BASEURL,
    tagTypes: [],
    endpoints: (builder) => ({}),
  });