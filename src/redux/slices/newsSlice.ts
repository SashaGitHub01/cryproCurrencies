import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INewsItem } from "../../API/types/news";
import { fetchNews } from "../actions/newsA";
import { IState } from "../types/news";

const initialState: IState = {
   news: [],
   isFetching: false,
   error: null
}

const newsSlice = createSlice({
   name: 'news',
   initialState,
   reducers: {},
   extraReducers: {
      [fetchNews.fulfilled.type]: (state, action: PayloadAction<INewsItem[]>) => {
         state.news = action.payload;
         state.isFetching = false;
         state.error = null
      },

      [fetchNews.rejected.type]: (state, action: PayloadAction<string>) => {
         state.isFetching = false;
         state.error = action.payload
      },

      [fetchNews.pending.type]: (state) => {
         state.isFetching = true;
      },
   }
})

export const newsR = newsSlice.reducer