import classNames from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'
import { ICoin } from '../../API/types/coinranking'
import { formatNums } from '../../utils/formatNums'
import './CryptoCard.scss'

interface CryptoCardProps extends ICoin {

}

const CryptoCard: React.FC<CryptoCardProps> = ({ uuid, name, color, iconUrl, rank, symbol, price, change }) => {
   return (
      <Link
         className="crypto-card"
         to={`/crypto/${uuid}`}
         style={{ backgroundImage: `linear-gradient(to top, ${color}, rgb(255, 255, 255, 0.2))` }}
      >
         <div className="crypto-card__content">
            <div className="crypto-card__head">
               <h3 className="crypto-card__name">
                  {rank}. {name}
               </h3>
               <div className="crypto-card__img">
                  <img src={iconUrl} alt={name} />
               </div>
            </div>
            <div className="crypto-card__body">
               <div className="crypto-card__stat crypto-card-st">
                  <div className="crypto-card-st__name">
                     Symbol:
                  </div>
                  <div className="crypto-card-st__val">
                     {symbol}
                  </div>
               </div>
               <div className="crypto-card__stat crypto-card-st">
                  <div className="crypto-card-st__name">
                     Price:
                  </div>
                  <div className="crypto-card-st__val">
                     {price ? formatNums(price, 3) : '-'}
                  </div>
               </div>
               <div className="crypto-card__stat crypto-card-st">
                  <div className="crypto-card-st__name">
                     Change:
                  </div>
                  <div
                     className={`crypto-card-st__val ${change >= 0
                        ? 'crypto-card-st__val--positive'
                        : change < 0
                           ? 'crypto-card-st__val--negative' : ''}`}
                  >
                     {change ? `${change}%` : '-'}
                  </div>
               </div>
            </div>
         </div>
      </Link>
   )
}

export default CryptoCard