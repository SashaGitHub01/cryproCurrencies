import axios from 'axios'

// headers: {
//    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
//    'X-RapidAPI-Key': '7e8ffc4634mshfaec826692124afp1438e6jsn275cfa1b7274'
//  }
console.log(process.env.REACT_APP_COINRANKING_URL)
export const coinrankingApi = axios.create({
   baseURL: process.env.REACT_APP_COINRANKING_URL as string,
   headers: {
      'X-RapidAPI-Host': process.env.REACT_APP_COINRANKING_HOST as string,
      'X-RapidAPI-Key': process.env.REACT_APP_API_KEY as string
   }
})

export const newsApi = axios.create({
   baseURL: process.env.REACT_APP_NEWS_URL as string,
   headers: {
      'X-RapidAPI-Host': process.env.REACT_APP_NEWS_HOST as string,
      'X-RapidAPI-Key': process.env.REACT_APP_NEWSAPI_KEY as string
   }
})