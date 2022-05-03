import React, { useEffect } from 'react'
import { INewsItem } from '../../API/types/news'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { fetchCoinsAndStats } from '../../redux/actions/coinsAndStatsA'
import NewsItem from '../NewsItem'
import NewsSelect from '../NewsSelect'
import './NewsList.scss'

interface NewsListProps {
   news: INewsItem[],
   select?: boolean,
}

const NewsList: React.FC<NewsListProps> = ({ news, select }) => {
   const dispatch = useAppDispatch()

   useEffect(() => {
      if (select) dispatch(fetchCoinsAndStats(20))
   }, [select])

   return (
      <>
         {select &&
            <NewsSelect />}
         <div className="news-list">
            {news.map((item) => <NewsItem key={item.url} {...item} />)}
         </div>
      </>
   )
}

export default NewsList