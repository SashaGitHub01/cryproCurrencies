
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