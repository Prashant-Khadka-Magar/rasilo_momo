import { apiSlice } from "@/redux/apiSlice";
import { PRODUCTS_URL } from "@/redux/constants";

export const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    productByCategory: builder.query({
      query: ({ categoryId, page = 1, limit = 10 }) => ({
        url: `${PRODUCTS_URL}/by-category`,
        params: { categoryId, page, limit },
      }),
      providesTags: ["Product"],
    }),
    getAllCategories: builder.query({
      query: () => ({
        url: `${PRODUCTS_URL}/categories`,
      }),
    }),
  }),
});

export const { useProductByCategoryQuery, useGetAllCategoriesQuery } = productApi;
