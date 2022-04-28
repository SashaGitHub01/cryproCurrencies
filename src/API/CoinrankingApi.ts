import { coinrankingApi } from './index'
import { ICoin, ICoinrankRes, IStats } from './types/coinranking'

export class CoinrankingApi {
   static fetchStatsAndCoins = async (limit: number = 10): Promise<{ stats: IStats, coins: ICoin[] }> => {
      const { data } = await coinrankingApi.get<ICoinrankRes<{ stats: IStats, coins: ICoin[] }>>(`/coins?limit=${limit}`)

      return data.data
   }
}