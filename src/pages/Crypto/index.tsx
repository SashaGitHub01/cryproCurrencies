import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './Crypto.scss'
import Loader from '../../components/Loader'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { fetchCoinDetails, fetchCoinHistory } from '../../redux/actions/coinDetailsA'
import { ArrowDownIcon, ArrowUpIcon } from '../../images/icons'
import { formatPrice } from '../../utils/formatPrice'
import parse from 'html-react-parser';
import CryptoStats from '../../components/CryptoStats'
import { useCustomSearchParams } from '../../hooks/useCustomSearchParams'

const Crypto = () => {
   const [params, setParams] = useCustomSearchParams()
   const dispatch = useAppDispatch()
   const { id } = useParams()
   const { coin, isFetching } = useTypedSelector(state => state.coinDetails)

   useEffect(() => {
      const options = {
         id: id as string,
         period: params?.period
      }
      dispatch(fetchCoinDetails(options))
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
                     <CryptoStats coin={coin} id={id as string} />
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
                                       <a className="crypto-link__url" href={link.url} target='_blank' rel="noreferrer">
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