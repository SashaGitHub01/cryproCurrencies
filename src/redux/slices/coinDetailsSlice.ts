import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICoinDetails, IHistory } from "../../API/types/coinranking";
import { fetchCoinDetails, fetchCoinHistory } from "../actions/coinDetailsA";
import { IState } from "../types/coinDetails";

const initialState: IState = {
   coin: null,
   isFetching: false,
   error: null,
   history: []
}

const coinDetailsSlice = createSlice({
   name: 'coin',
   reducers: {},
   initialState,
   extraReducers: {
      [fetchCoinDetails.fulfilled.type]: (state, action: PayloadAction<ICoinDetails>) => {
         state.coin = action.payload;
         state.isFetching = false;
         state.error = null;
      },

      [fetchCoinDetails.rejected.type]: (state, action: PayloadAction<string>) => {
         state.error = action.payload;
         state.isFetching = false;
      },

      [fetchCoinDetails.pending.type]: (state) => {
         state.isFetching = true;
      },

      [fetchCoinHistory.fulfilled.type]: (state, action: PayloadAction<{ history: IHistory[], change: number }>) => {
         state.history = action.payload.history.reverse()
      }
   }
})

export const coinDetailsR = coinDetailsSlice.reducer