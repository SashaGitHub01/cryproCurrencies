import { ICoin, IStats } from "../../API/types/coinranking";


export interface IState {
   stats: IStats | null,
   coins: ICoin[],
   isFetching: boolean,
   error: null | string
}

export interface IfetchCoinsAndStats {
   stats: IStats,
   coins: ICoin[]
}