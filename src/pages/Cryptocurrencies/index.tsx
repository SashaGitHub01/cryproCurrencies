import React from 'react'
import { useEffect } from 'react'
import CryptocurrsList from '../../components/CryptocurrsList'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { fetchCoinsAndStats } from '../../redux/actions/coinsAndStatsA'
import './Cryptocurrencies.scss'

const Cryptocurrencies = () => {
   const limit = 100;
   const { coins, isFetching } = useTypedSelector(state => state.coinsAndStats)
   const dispatch = useAppDispatch()

   useEffect(() => {
      dispatch(fetchCoinsAndStats(limit))
   }, [])

   return (
      <div className="currensies">
         {isFetching
            ? <div className="g">Loading...</div>
            : coins
               ? <CryptocurrsList coins={coins} />
               : null}
      </div>
   )
}

export default Cryptocurrencies