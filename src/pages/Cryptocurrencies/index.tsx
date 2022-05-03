import React from 'react'
import CryptocurrsList from '../../components/CryptocurrsList'
import { useAppDispatch } from '../../hooks/useAppDispatch'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { fetchCryptocurrencies } from '../../redux/actions/cryptocurrenciesA'
import { Input, Button, Form } from 'antd'
import './Cryptocurrencies.scss'
import { useForm } from 'antd/lib/form/Form'
import Loader from '../../components/Loader'
import { useFetchCryptoByParams } from '../../hooks/useFetchCryptoByParams'

const Cryptocurrencies = () => {
   const limit = 100;
   const [params, setParams] = useFetchCryptoByParams(limit)
   const [form] = useForm()
   const { coins, total, isFetching } = useTypedSelector(state => state.cryptocurrencies)
   const dispatch = useAppDispatch()

   const initial = {
      search: ''
   }

   const onSubmit = (values: { search: string }) => {
      const { search } = values

      if (search.trim() === '') return;

      setParams({ ...params, search })
      dispatch(fetchCryptocurrencies({ limit, search }))
   }

   return (
      <div className="currensies">
         <div className="currensies__head">
            <h2 className="currensies__title">
               All Cryptocurrencies
            </h2>
            <Form
               onFinish={onSubmit}
               initialValues={initial}
               form={form}
               className="currensies__form"
            >
               <Form.Item
                  className="currensies__input"
                  name={'search'}
                  noStyle
               >
                  <Input
                     placeholder='Search crypto'
                  />
               </Form.Item>
               <div className="currensies__btn">
                  <Button type='primary' className='search-btn' htmlType='submit'>
                     Search
                  </Button>
               </div>
            </Form>
         </div>
         {isFetching
            ? <Loader />
            : coins?.length > 0
               ? <>
                  <CryptocurrsList
                     pagination={true}
                     limit={limit}
                     total={total}
                     coins={coins}
                  />
               </>
               : <>
                  <div className="currensies__nodata">
                     No data
                  </div>
               </>}
      </div>
   )
}

export default Cryptocurrencies