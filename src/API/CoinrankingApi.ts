import { coinrankingApi } from './index'
import { ICoin, ICoinDetails, ICoinrankRes, IFetchCoinDetails, IFetchCurrenciesParams, IHistory, IStats } from './types/coinranking'

export class CoinrankingApi {
   static fetchStatsAndCoins =
      async ({ limit, search, offset }: IFetchCurrenciesParams): Promise<{ stats: IStats, coins: ICoin[] }> => {
         const path = `/coins?limit=${limit}${offset ? '&offset=' + offset : ''}${search ? '&search=' + search : ''}`
         const { data } = await coinrankingApi.get<ICoinrankRes<{ stats: IStats, coins: ICoin[] }>>(path)

         return data.data
      }

   static fetchCoin = async ({ id, period }: IFetchCoinDetails): Promise<ICoinDetails> => {
      const path = `/coin/${id}?timePeriod=${period ? period : '7d'}`
      const { data } = await coinrankingApi.get<ICoinrankRes<{ coin: ICoinDetails }>>(path)

      return data.data.coin
   }

   static fetchCoinHistory = async ({ id, period }: IFetchCoinDetails): Promise<{ history: IHistory[], change: number }> => {
      const path = `/coin/${id}/history?timePeriod=${period ? period : '7d'}`
      const { data } = await coinrankingApi.get<ICoinrankRes<{ history: IHistory[], change: number }>>(path)

      return data.data
   }
}
