import { InputNumber } from 'antd'
import React, { useEffect } from 'react'
import ExchangeItem from '../../components/ExchangeItem'
import Loader from '../../components/Loader'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { fetchCryptocurrencies } from '../../redux/actions/cryptocurrenciesA'
import './Exchanges.scss'

const Exchanges = () => {
   const { coins, isFetching } = useTypedSelector(state => state.cryptocurrencies)
   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(fetchCryptocurrencies({ limit: 100 }))
   }, [])

   return (
      <div className="exchanges">
         <div className="exchanges__head">
            <h2 className="exchanges__title">
               Crypto Exchanges
            </h2>
         </div>
         <div className="exchanges__content">
            {isFetching
               ? <Loader />
               : <div className="exchange-table">
                  {coins.map((c) => (
                     <ExchangeItem coin={c} key={c.uuid} />
                  ))}
               </div>}
         </div>
      </div>
   )
}

export default Exchanges