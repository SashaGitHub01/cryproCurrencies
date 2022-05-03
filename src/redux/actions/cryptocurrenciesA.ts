import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { CoinrankingApi } from "../../API/CoinrankingApi";
import { IFetchCurrenciesParams } from "../../API/types/coinranking";

export const setTotal = createAction('cryptocurrencies/setTotal', (total: number) => ({ payload: total }))

export const fetchCryptocurrencies = createAsyncThunk(
   'cryptocurrencies/fetchCryptocurrs',
   async (params: IFetchCurrenciesParams, thunk) => {
      try {
         const res = await CoinrankingApi.fetchStatsAndCoins(params)
         thunk.dispatch(setTotal(res.stats.total))
         return res
      } catch (err: any) {
         return thunk.rejectWithValue(err.message)
      }
   }
)