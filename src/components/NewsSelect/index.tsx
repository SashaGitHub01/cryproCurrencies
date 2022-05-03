import { Select } from 'antd'
import React, { useEffect, useState } from 'react'
import { useCustomSearchParams } from '../../hooks/useCustomSearchParams'
import './NewsSelect.scss'
import { useTypedSelector } from '../../hooks/useTypedSelector'

const NewsSelect: React.FC = ({ }) => {
   const [category, setCategory] = useState('cryptocurrency')
   const { coins } = useTypedSelector(state => state.coinsAndStats)
   const [params, setParams] = useCustomSearchParams()

   const handleChange = (val: string) => {
      setParams({ ...params, category: val })
   }

   useEffect(() => {
      if (params.category) {
         setCategory(params.category)
      }
   }, [params.category])

   return (
      <div className="news-select">
         <div className="g">
            Category:
         </div>
         <Select
            className='news-selector'
            defaultValue={'cryptocurrency'}
            value={category}
            onChange={handleChange}
         >
            <Select.Option value={'cryptocurrency'}>
               Cryptocurrency
            </Select.Option>
            {coins?.length && coins.map((c) => (
               <Select.Option value={c.name.toLowerCase()} key={c.uuid} className={'news-selector__opt'}>
                  <span>{c.name}</span>
                  <img src={c.iconUrl} alt={c.name} />
               </Select.Option>
            ))}
         </Select>
      </div>
   )
}

export default NewsSelect