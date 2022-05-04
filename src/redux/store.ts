import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { coinDetailsR } from './slices/coinDetailsSlice'
import { coinsAndStatsR } from './slices/coinsAndStatsSlice'
import { cryptocurrenciesR } from './slices/cryptocurrenciesSlice'
import { newsR } from './slices/newsSlice'

const rootReducer = combineReducers({
   coinsAndStats: coinsAndStatsR,
   cryptocurrencies: cryptocurrenciesR,
   news: newsR,
   coinDetails: coinDetailsR
})

export const store = configureStore({
   reducer: rootReducer
})

export type RootStateType = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

