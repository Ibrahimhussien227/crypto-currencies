import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const cryptoApiHeaders = {
  "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
  "X-RapidAPI-Host": import.meta.env.VITE_CRYPTO_RAPIDAPI_HOST,
};

const baseUrl = import.meta.env.VITE_CRYPTO_API_URL;

const params = {
  referenceCurrencyUuid: import.meta.env.VITE_CRYPTO_RAPIDAPI_CURRENCY_UUID,
};

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count) => ({
        url: `/coins?limit=${count}`,
        headers: cryptoApiHeaders,
        params,
      }),
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => ({
        url: `/coin/${coinId}`,
        headers: cryptoApiHeaders,
        params,
      }),
    }),
    getCryptoHistory: builder.query({
      query: ({ coinId, timePeriod }) => ({
        url: `/coin/${coinId}/history?timePeriod=${timePeriod}`,
        headers: cryptoApiHeaders,
        params,
      }),
    }),
    // getExchanges: builder.query({
    //   query: () => ({
    //     url: `/exchanges`,
    //     headers: cryptoApiHeaders,
    //     params,
    //   }),
    // }),
  }),
});

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
  // useGetExchangesQuery,
} = cryptoApi;
