import React, { useEffect } from 'react'
import Loader from '../../components/Loader'
import NewsList from '../../components/NewsLists'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useCustomSearchParams } from '../../hooks/useCustomSearchParams'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { fetchNews } from '../../redux/actions/newsA'
import './News.scss'

const News = () => {
   const dispatch = useAppDispatch()
   const [params] = useCustomSearchParams()
   const { news, isFetching } = useTypedSelector(state => state.news)

   useEffect(() => {
      if (params.category) {
         dispatch(fetchNews({ search: params.category }))
      } else {
         dispatch(fetchNews({}))
      }
   }, [params.category])

   return (
      <div className="news">
         <div className="news__head">
            <h2 className="news__title">
               Latest News
            </h2>
         </div>
         <div className="news__content">
            {isFetching
               ? <Loader />
               : news.length > 0
                  ? <NewsList news={news} select />
                  : <div className='news__nodata'>
                     No data
                  </div>}
         </div>
      </div>
   )
}

export default News