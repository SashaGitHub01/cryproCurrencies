import React from 'react'
import { ICoin } from '../../API/types/coinranking'
import CryptoCard from '../CryptoCard'
import './CryptocurrsList.scss'

interface CryptocurrsListProps {
   coins: ICoin[]
}

const CryptocurrsList: React.FC<CryptocurrsListProps> = ({ coins }) => {
   return (
      <div className="crypto-currs">
         {coins.map((coin) => <CryptoCard {...coin} key={coin.uuid} />)}
      </div>
   )
}

export default CryptocurrsList