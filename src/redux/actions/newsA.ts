import { createAsyncThunk } from "@reduxjs/toolkit";
import { NewsApi } from "../../API/NewsApi";
import { IFetchNewsOptions } from "../../API/types/news";

export const fetchNews = createAsyncThunk(
   'news/fetchNews',
   async (options: IFetchNewsOptions, thunk) => {
      try {
         const res = await NewsApi.fetchNews(options)
         return res.value;
      } catch (err: any) {
         return thunk.rejectWithValue(err.message)
      }
   }
)