import { ICoinDetails } from "../../API/types/coinranking";


export interface IState {
   coin: null | ICoinDetails,
   isFetching: boolean,
   error: null | string
}