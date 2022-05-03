
export interface INewsRes {
   totalEstimatedMatches: number,
   value: INewsItem[]
}

export interface INewsItem {
   name: string,
   url: string,
   image: {
      thumbnail: {
         contentUrl: string
      }
   },
   description: string,
   provider: [
      { name: string }
   ],
   datePublished: string,
   category: string
}

export interface IFetchNewsOptions {
   search?: string,
   offset?: number,
   limit?: number
}