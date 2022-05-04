import millify from 'millify'
import React from 'react'
import { ICoinDetails, IHistory } from '../../API/types/coinranking'
import { formatNums } from '../../utils/formatNums'
import { formatPrice } from '../../utils/formatPrice'
import {
   BitcoinIcon,
   UsdIcon,
   InfoIcon,
   HashIcon,
   TopIcon,
   ChartIcon,
   VolIcon,
} from '../../images/icons'
import Chart from '../../components/Chart'

interface CryptoStatsProps {
   coin: ICoinDetails,
   history: IHistory[]
}

const CryptoStats: React.FC<CryptoStatsProps> = ({ coin, history }) => {

   const stats = [
      { title: 'USD Price', value: `${coin?.marketCap ? formatPrice(coin?.price) : '-'}`, Icon: <UsdIcon className='stat-i' /> },
      { title: 'BTC Price:', value: millify(coin?.btcPrice || 0, { precision: 7 }), Icon: <BitcoinIcon className='stat-i' /> },
      { title: 'Market Cap:', value: `$${coin?.marketCap ? formatNums(coin?.marketCap) : '-'}`, Icon: <UsdIcon className='stat-i' /> },
      { title: 'Rank:', value: `#${coin?.rank}`, Icon: <HashIcon className='stat-i' /> },
      { title: 'Vol (24H):', value: `$${formatNums(coin?.['24hVolume'] as number)}`, Icon: <VolIcon className='stat-i' /> },
      { title: 'Change, %:', value: coin?.change, Icon: <ChartIcon className='stat-i' /> },
   ]

   const other = [
      { title: 'Highest Price:', value: `${formatPrice(coin?.allTimeHigh.price as number)}`, Icon: <TopIcon className='stat-i' /> },
      { title: 'Number of Markets:', value: coin?.numberOfMarkets, Icon: <InfoIcon className='stat-i' /> },
      { title: 'Number of Exchanges:', value: coin?.numberOfExchanges, Icon: <InfoIcon className='stat-i' /> },
      { title: 'Circulating Supply:', value: `${coin?.symbol}${formatNums(coin?.supply?.circulating as number)}`, Icon: <InfoIcon className='stat-i' /> },
      { title: 'Total Supply:', value: `${coin?.symbol}${formatNums(coin?.supply?.total as number)}`, Icon: <InfoIcon className='stat-i' /> },
   ]

   return (
      <div className="crypto__stats cryptodet-stats">
         <div className="cryptodet-stats__lists">
            <div className="cryptodet-stats__list-cont">
               <div className="cryptodet-stats__title">
                  Primary Statistics
               </div>
               <ul className="cryptodet-stats__list">
                  {stats.map(({ Icon, title, value }) => (
                     <li className='cryptodet-stats__item crypto-st-item' key={title}>
                        <div className="crypto-st-item__cont">
                           <div className="crypto-st-item__title">
                              {Icon}
                              <span>{title}</span>
                           </div>
                           <div className="crypto-st-item__value">
                              {value}
                           </div>
                        </div>
                     </li>
                  ))}
               </ul>
            </div>
            <div className="cryptodet-stats__list-cont">
               <div className="cryptodet-stats__title">
                  Other Statistics
               </div>
               <ul className="cryptodet-stats__list">
                  {other.map((s) => (
                     <li className='cryptodet-stats__item crypto-st-item' key={s.title}>
                        <div className="crypto-st-item__cont">
                           <div className="crypto-st-item__title">
                              {s.Icon}
                              <span>{s.title}</span>
                           </div>
                           <div className="crypto-st-item__value">
                              {s.value}
                           </div>
                        </div>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
         <div className="cryptodet-stats__chart">
            {history.length > 0
               && <Chart history={history} />}
         </div>
      </div>
   )
}

export default CryptoStats