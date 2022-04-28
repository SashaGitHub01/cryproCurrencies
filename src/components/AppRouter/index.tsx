import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cryptocurrencies from '../../pages/Cryptocurrencies'
import Home from '../../pages/Home'
import Crypto from '../../pages/Crypto'
import News from '../../pages/News'
import Exchanges from '../../pages/Exchanges'

const AppRouter = () => {
   return (
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/cryptocurrencies' element={<Cryptocurrencies />} />
         <Route path='/crypto/:id' element={<Crypto />} />
         <Route path='/news' element={<News />} />
         <Route path='/exchanges' element={<Exchanges />} />
      </Routes>
   )
}

export default AppRouter