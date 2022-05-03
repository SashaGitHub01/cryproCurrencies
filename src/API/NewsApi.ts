import { newsApi } from "./index"
import { IFetchNewsOptions, INewsItem, INewsRes } from "./types/news"


export class NewsApi {
   static fetchNews = async (opts: IFetchNewsOptions): Promise<INewsRes> => {
      const path = `/search?${opts?.search ? `q=${opts.search}&` : 'q=Cryptocurrency'}${opts?.offset ? `offset=${opts.offset}` : ''}&count=${opts?.limit ? opts.limit : 15}&safeSearch=Off&textFormat=Raw&cc=us&freshness=day&sortBy=date`
      const res = await newsApi.get<INewsRes>(path)

      return res.data;
   }
}