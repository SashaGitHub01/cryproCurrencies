import { createAsyncThunk } from "@reduxjs/toolkit";
import { CoinrankingApi } from "../../API/CoinrankingApi";
import { IFetchCoinDetails } from "../../API/types/coinranking";

export const fetchCoinDetails = createAsyncThunk(
   'coin/fetchDetails',
   async (options:IFetchCoinDetails, thunk) => {
      try {
         const res = await CoinrankingApi.fetchCoin(options)
         return res;
      }catch(err:any) {
         return thunk.rejectWithValue(err.message)
      }
   }
)