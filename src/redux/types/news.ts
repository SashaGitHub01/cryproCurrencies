import { INewsItem } from "../../API/types/news";


export interface IState {
   news: INewsItem[],
   isFetching: boolean,
   error: string | null
}