import { createAsyncThunk } from '@reduxjs/toolkit'
import { CoinrankingApi } from '../../API/CoinrankingApi'

export const fetchCoinsAndStats = createAsyncThunk(
   'coinsAndStats/fetchCoinsStats',
   async (limit: number, thunk) => {
      try {
         const res = await CoinrankingApi.fetchStatsAndCoins(limit)
         return res
      } catch (err: any) {
         return thunk.rejectWithValue(err.message)
      }
   }
)