
export interface ICoinrankRes<T> {
   data: T
}

export interface IStats {
   "total": number,
   "totalCoins": number,
   "totalMarkets": number,
   "totalExchanges": number,
   "totalMarketCap": number,
   "total24hVolume": number
}

export interface ICoin {
   "uuid": string,
   "symbol": string,
   "name": string,
   "color": string,
   "iconUrl": string,
   "marketCap": number,
   "price": number,
   "listedAt": number,
   "tier": number,
   "change": number,
   "rank": number,
   "sparkline": number[],
   "lowVolume": false,
   "coinrankingUrl": number,
   "24hVolume": number,
   "btcPrice": number
}

export interface ICoinDetails extends ICoin {
   description: string,
   websiteUrl: string,
   "numberOfMarkets": number,
   "numberOfExchanges": number,
   "supply": {
      "confirmed": boolean,
      "total": number,
      "circulating": number
   },
   "allTimeHigh": {
      "price": number,
      "timestamp": number
   },

   links: [
      {
         "name": string,
         "url": string,
         "type": string
      },
   ]
}

export interface IFetchCurrenciesParams {
   search?: string,
   limit: number,
   offset?: number
}

export interface IFetchCoinDetails {
   id: string,
   period?: string
}