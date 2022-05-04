import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './Crypto.scss'
import Loader from '../../components/Loader'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { fetchCoinDetails } from '../../redux/actions/coinDetailsA'
import { ArrowDownIcon, ArrowUpIcon } from '../../images/icons'
import { formatPrice } from '../../utils/formatPrice'
import { formatNums } from '../../utils/formatNums'
import millify from 'millify'

import {
   BitcoinIcon,
   UsdIcon,
   InfoIcon,
   HashIcon,
   TopIcon,
   ChartIcon,
   VolIcon,
} from '../../images/icons'
import parse from 'html-react-parser';

const timeValues = ['24h', '7d', '30d', '3m', '1y', '5y']

const Crypto = () => {
   const dispatch = useAppDispatch()
   const { id } = useParams()
   const { coin, isFetching } = useTypedSelector(state => state.coinDetails)

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

   useEffect(() => {
      dispatch(fetchCoinDetails({ id: id as string, }))
   }, [])

   return (
      <div className="crypto">
         {isFetching
            ? <Loader />
            : coin
               ? <>
                  <div
                     className="crypto__head"
                     style={{ borderBottom: `2px solid ${coin?.color}`, borderTop: `2px solid ${coin?.color}`, }}
                  >
                     <div className="crypto__main-info">
                        <div className="crypto__img">
                           <img src={coin?.iconUrl} alt={coin?.name} />
                        </div>
                        <div className="crypto__names">
                           <h2 className="crypto__name">
                              {coin?.name}
                           </h2>
                           <h3 className="crypto__symbol">
                              ({coin?.symbol})
                           </h3>
                        </div>
                     </div>
                     <div className="crypto__prices crypto-prices">
                        <div className="crypto-prices__value">
                           {coin.price ? formatPrice(coin.price) : '-'}
                        </div>
                        <div
                           className={`crypto-prices__change ${coin?.change <= 0 ? 'crypto-prices__change--n' : 'crypto-prices__change--p'}`}>
                           {coin.change <= 0
                              ? <ArrowDownIcon className='change-icon change-icon--down' />
                              : <ArrowUpIcon className='change-icon change-icon--up' />}
                           <span>
                              {coin?.change}%
                           </span>
                        </div>
                     </div>
                  </div>
                  <div className="crypto__content">
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
                     </div>
                     <div className="crypto__about">
                        <div className="crypto__what">
                           What is {coin.name}?
                        </div>
                        <div className="crypto__description cr-descr">
                           <div className="cr-descr__html">
                              {parse(coin?.description)}
                           </div>
                           <div className="cr-descr__list">
                              <div className="cr-descr__list-name">
                                 Links
                              </div>
                              <ul className="cr-descr__links">
                                 {coin.links.map((link) => (
                                    <li className="crypto-link" key={link.url + link.name}>
                                       <div className="crypto-link__title">
                                          {link.type}
                                       </div>
                                       <a className="crypto-link__url" href={link.url} target='_blank'>
                                          {link.name}
                                       </a>
                                    </li>
                                 ))}
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </>
               : null}
      </div>
   )
}

export default Crypto