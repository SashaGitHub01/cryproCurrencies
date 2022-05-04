import { ICoinDetails, IHistory } from "../../API/types/coinranking";


export interface IState {
   coin: null | ICoinDetails,
   isFetching: boolean,
   error: null | string,
   history: IHistory[]
}