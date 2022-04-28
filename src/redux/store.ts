import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { coinsAndStatsR } from './slices/coinsAndStatsSlice'

const rootReducer = combineReducers({
   coinsAndStats: coinsAndStatsR
})

export const store = configureStore({
   reducer: rootReducer
})

export type RootStateType = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

