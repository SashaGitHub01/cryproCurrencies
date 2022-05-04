import React from 'react'
import './Header.scss'
import logo from '../../images/logo.png'
import { NavLink } from 'react-router-dom'
import { HomeIcon, NewsIcon, ChartIcon, ExchangeIcon } from '../../images/icons'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
   return (
      <header className='header'>
         <div className="header__logo logo">
            <Link className="logo__img" to='/'>
               <img src={logo} alt="CryptoApp logo" />
            </Link>
            <div className="logo__title app-title">
               <h1 className="app-title__name">
                  Cryptoon
               </h1>
               <div className="app-title__line" />
            </div>
         </div>
         <nav className="header__nav nav">
            <div className="nav__list">
               <NavLink className="nav__item nav-item" to={'/'}>
                  <HomeIcon className='nav-item__icon' />
                  <div className="nav-item__link" >
                     <span>Home</span>
                  </div>
               </NavLink>
               <NavLink className="nav__item nav-item" to={'/cryptocurrencies'}>
                  <ChartIcon className='nav-item__icon' />
                  <div className="nav-item__link">
                     <span>Crypto currencies</span>
                  </div>
               </NavLink>
               <NavLink className="nav__item nav-item" to={'/exchanges'}>
                  <ExchangeIcon className='nav-item__icon' />
                  <div className="nav-item__link">
                     <span>Exchange</span>
                  </div>
               </NavLink>
               <NavLink className="nav__item nav-item" to={'/news'}>
                  <NewsIcon className='nav-item__icon' />
                  <div className="nav-item__link">
                     <span>News</span>
                  </div>
               </NavLink>
            </div>
         </nav>
      </header>
   )
}

export default Header