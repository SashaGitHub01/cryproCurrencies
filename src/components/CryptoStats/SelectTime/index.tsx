import React, { useEffect, useState } from 'react'
import { Select } from 'antd'
import './SelectTime.scss';
import { useCustomSearchParams } from '../../../hooks/useCustomSearchParams';

const timeValues = [
   { value: '24h', title: '24 Hours' },
   { value: '7d', title: '7 Days' },
   { value: '30d', title: '30 Days' },
   { value: '3m', title: '3 Months' },
   { value: '1y', title: '1 Year' },
   { value: '5y', title: '5 Years' },
]

interface SelectTimeProps {

}

const SelectTime: React.FC<SelectTimeProps> = () => {
   const [period, setPeriod] = useState('7d')
   const [params, setParams] = useCustomSearchParams()

   useEffect(() => {
      if (params.period) {
         setPeriod(params.period)
      }
   }, [params.period])

   const handleChange = (val: string) => {
      setParams({ ...params, period: val })
   }

   return (
      <div className="select-time">
         <div className="select-time__title">
            Select a period:
         </div>
         <Select
            className="select-time__selector"
            value={period}
            defaultValue={'7d'}
            onChange={handleChange}
         >
            {timeValues.map((t) => (
               <Select.Option value={t.value} key={t.title}>
                  {t.title}
               </Select.Option>
            ))}
         </Select>
      </div>
   )
}

export default SelectTime