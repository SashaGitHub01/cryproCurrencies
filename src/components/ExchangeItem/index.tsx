import { InputNumber, Form } from 'antd'
import { useForm } from 'antd/lib/form/Form'
import numeral from 'numeral'
import React, { useState } from 'react'
import { ICoin } from '../../API/types/coinranking'
import './ExchangeItem.scss'

interface ExchangeItemProps {
   coin: ICoin
}

const ExchangeItem: React.FC<ExchangeItemProps> = ({ coin }) => {
   const [result, setResult] = useState(coin.price)

   const handleChange = (val: any) => {
      setResult(coin.price * val)
   }

   return (
      <div className="exchange-table__row exchg-item">
         <div className="exchg-item__row">
            <div className="exchg-item__info">
               <div className="exchg-item__rank">
                  <span>#{coin.rank}</span>
               </div>
               <div className="exchg-item__img">
                  <img src={coin.iconUrl} alt={coin.name} />
               </div>
               <div className="exchg-item__name">
                  {coin.name}
               </div>
            </div>
            <form className="exchg-item__form exchg-form">
               <div className="exchg-form__input">
                  <Form.Item
                     noStyle
                  >
                     <InputNumber
                        onChange={handleChange}
                        defaultValue={1}
                        type={'number'}
                        addonBefore={coin.symbol}
                     />
                  </Form.Item>
               </div>
               <span className="exchg-form__equal">
                  =
               </span>
               <div className="exchg-form__input">
                  <Form.Item
                     noStyle
                  >
                     <InputNumber
                        value={numeral(result).format('0,000.0000')}
                        readOnly
                        addonBefore={'$'}
                     />
                  </Form.Item>
               </div>
            </form>
         </div>
      </div>
   )
}

export default ExchangeItem