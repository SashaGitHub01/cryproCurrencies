import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { fetchCryptocurrencies, setTotal } from '../actions/cryptocurrenciesA'
import { IFetchCryptocurrencies, IState } from '../types/cryptocurrencies'

const initialState: IState = {
   coins: [],
   isFetching: false,
   error: null,
   total: 0
}

const cryptocurrenciesSlice = createSlice({
   name: 'cryptocurrencies',
   initialState,
   reducers: {},
   extraReducers: {
      [setTotal.type]: (state, action: PayloadAction<number>) => {
         state.total = action.payload
      },

      [fetchCryptocurrencies.fulfilled.type]: (state, action: PayloadAction<IFetchCryptocurrencies>) => {
         state.coins = action.payload.coins;
         state.error = null;
         state.isFetching = false;
      },

      [fetchCryptocurrencies.rejected.type]: (state, action: PayloadAction<string>) => {
         state.error = action.payload;
         state.isFetching = false;
      },

      [fetchCryptocurrencies.pending.type]: (state, action) => {
         state.isFetching = true;
      },
   }
})

export const cryptocurrenciesR = cryptocurrenciesSlice.reducer