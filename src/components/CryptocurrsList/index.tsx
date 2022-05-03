import React from 'react'
import { ICoin } from '../../API/types/coinranking'
import CryptoCard from '../CryptoCard'
import './CryptocurrsList.scss'
import { Pagination } from 'antd'
import { useCustomSearchParams } from '../../hooks/useCustomSearchParams'

interface CryptocurrsListProps {
   coins: ICoin[],
   pagination?: boolean,
   total?: number,
   limit?: number
}

const CryptocurrsList: React.FC<CryptocurrsListProps> = ({ coins, pagination, total, limit = 0 }) => {
   const [params, setParams] = useCustomSearchParams()

   const handleChangePage = (page: number) => {
      setParams({ ...params, offset: String((page * limit) - limit) })
   }

   return (
      <>
         <div className="crypto-currs">
            {coins.map((coin) => <CryptoCard {...coin} key={coin.uuid} />)}
         </div>
         {pagination &&
            <div className="crypto-currs__pagination">
               <Pagination
                  current={((+params?.offset + limit) / limit) || 1}
                  total={total}
                  pageSize={limit}
                  onChange={handleChangePage}
                  showSizeChanger={false}
                  responsive
               />
            </div>}
      </>
   )
}

export default CryptocurrsList