import React, { useEffect } from 'react'
import './Home.scss'
import { Row, Col } from 'antd'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { formatNums } from '../../utils/formatNums'
import { fetchCoinsAndStats } from '../../redux/actions/coinsAndStatsA'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import CryptocurrsList from '../../components/CryptocurrsList'

const Home: React.FC = () => {
   const limit = 10;
   const dispatch = useAppDispatch()
   const { stats, isFetching, coins } = useTypedSelector(state => state.coinsAndStats)

   useEffect(() => {
      dispatch(fetchCoinsAndStats(limit))
   }, [])

   return (
      <div className="home">
         <div className="home__head">
            <h2 className="home__title">
               Crypto Statistics
            </h2>
         </div>
         <div className="home__stats stats">
            {stats
               ? <Row className="stats__grid" gutter={[10, 30]}>
                  <Col span={12} className="stats__item stats-item">
                     <div className="stats-item__head">
                        <h3 className="stats-item__title">
                           Total Cryptocurrencies
                        </h3>
                     </div>
                     <div className="stats-item__value">
                        <span>
                           {formatNums(stats.total)}
                        </span>
                     </div>
                  </Col>
                  <Col span={12} className="stats__item stats-item">
                     <div className="stats-item__head">
                        <h3 className="stats-item__title">
                           Total Market Cup
                        </h3>
                     </div>
                     <div className="stats-item__value">
                        <span>
                           {formatNums(stats.totalMarketCap)}
                        </span>
                     </div>
                  </Col>
                  <Col span={12} className="stats__item stats-item">
                     <div className="stats-item__head">
                        <h3 className="stats-item__title">
                           Total Markets
                        </h3>
                     </div>
                     <div className="stats-item__value">
                        <span>
                           {formatNums(stats.totalMarkets)}
                        </span>
                     </div>
                  </Col>
                  <Col span={12} className="stats__item stats-item">
                     <div className="stats-item__head">
                        <h3 className="stats-item__title">
                           Total Exchanges
                        </h3>
                     </div>
                     <div className="stats-item__value">
                        <span>
                           {formatNums(stats.totalExchanges)}
                        </span>
                     </div>
                  </Col>
                  <Col span={12} className="stats__item stats-item">
                     <div className="stats-item__head">
                        <h3 className="stats-item__title">
                           Total Volume (last 24h)
                        </h3>
                     </div>
                     <div className="stats-item__value">
                        <span>
                           {formatNums(stats.total24hVolume)}
                        </span>
                     </div>
                  </Col>
               </Row>
               : null}
         </div>
         <div className="crypto-top">
            <div className="crypto-top__head">
               <h2 className="crypto-top__title">
                  Top 10 Cryptocurrencies in the world
               </h2>
            </div>
            <CryptocurrsList coins={coins} />
         </div>
      </div>
   )
}

export default Home