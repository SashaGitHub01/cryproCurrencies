import { ICoin, IStats } from "../../API/types/coinranking";


export interface IState {
   coins: ICoin[],
   isFetching: boolean,
   error: null | string,
   total: number
}

export interface IFetchCryptocurrencies {
   coins: ICoin[],
   stats: IStats
}