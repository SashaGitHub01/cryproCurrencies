import React from 'react'
import { INewsItem } from '../../API/types/news'
import { timeAgo } from '../../utils/timeAgo'
import './NewsItem.scss'

const defImg = 'https://gagadget.com/media/post_big/shutterstock_1434643079.jpg'

const NewsItem: React.FC<INewsItem> = ({ description, name, provider, url, datePublished, image, category }) => {
   const img = image?.thumbnail?.contentUrl || defImg
   return (
      <div className='news-item'>
         <div className="news-item__head">
            <div className="news-item__img">
               <img src={img} alt={name} />
            </div>
            <div className="news-item__title">
               <a className="news-item__name" href={url} target="_blank">
                  {name}
               </a>
            </div>
         </div>
         <div className="news-item__body">
            <div className="news-item__descr">
               {description}
            </div>
         </div>
         <div className="news-item__foot">
            <div className="news-item__creator">
               By {provider[0]?.name} -
            </div>
            <div className="news-item__time">
               {datePublished
                  && timeAgo(datePublished)}
            </div>
         </div>
      </div>
   )
}

export default NewsItem