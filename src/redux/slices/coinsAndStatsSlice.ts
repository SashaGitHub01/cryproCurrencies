import { createSlice, PayloadAction, } from '@reduxjs/toolkit'
import { fetchCoinsAndStats } from '../actions/coinsAndStatsA'
import { IfetchCoinsAndStats, IState } from '../types/coinsAndStats'

const initialState: IState = {
   stats: null,
   coins: [],
   isFetching: false,
   error: null
}

const coinsAndStatsSlice = createSlice({
   name: 'coinsAndStats',
   initialState,
   reducers: {},
   extraReducers: {
      [fetchCoinsAndStats.pending.type]: (state, action) => {
         state.isFetching = true
      },

      [fetchCoinsAndStats.rejected.type]: (state, action: PayloadAction<string>) => {
         state.isFetching = false;
         state.error = action.payload
      },

      [fetchCoinsAndStats.fulfilled.type]: (state, action: PayloadAction<IfetchCoinsAndStats>) => {
         state.isFetching = false
         state.coins = action.payload.coins
         state.stats = action.payload.stats
         state.error = null
      },
   }
})

export const coinsAndStatsR = coinsAndStatsSlice.reducer