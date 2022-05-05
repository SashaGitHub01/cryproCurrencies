import React, { useEffect, useState } from 'react'
import './Header.scss'
import logo from '../../images/logo.png'
import { NavLink } from 'react-router-dom'
import { HomeIcon, NewsIcon, ChartIcon, ExchangeIcon } from '../../images/icons'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'

const Header: React.FC = () => {
   const loc = useLocation()
   const [active, setActive] = useState(false)

   useEffect(() => {
      if (active) setActive(false)
   }, [loc.pathname])

   const openNav = () => {
      setActive(true)
   }

   const closeNav = () => {
      setActive(false)
   }

   return (
      <>
         <header className="mob-header">
            <button className="navbar" onClick={openNav}>
               <div className="bar bar1" />
               <div className="bar bar2" />
               <div className="bar bar3" />
            </button>
            <div className="mob-header__logo">
               <Link className="mob-header__img" to='/'>
                  <img src={logo} alt="CryptoApp logo" />
               </Link>
            </div>
            <nav className={`mob-nav ${active ? 'active' : ''}`}>
               <div className="mob-nav__list">
                  <div className="mob-nav__logo">
                     <img src={logo} alt="CryptoApp logo" />
                  </div>
                  <div className="mob-nav__close" onClick={closeNav} role='button' />
                  <NavLink className="mob-nav__item mob-nav-item" to={'/'}>
                     <HomeIcon className='mob-nav-item__icon' />
                     <div className="mob-nav-item__link" >
                        <span>Home</span>
                     </div>
                  </NavLink>
                  <NavLink className="mob-nav__item mob-nav-item" to={'/cryptocurrencies'}>
                     <ChartIcon className='mob-nav-item__icon' />
                     <div className="mob-nav-item__link" >
                        <span>Cryptocurrencies</span>
                     </div>
                  </NavLink>
                  <NavLink className="mob-nav__item mob-nav-item" to={'/exchanges'}>
                     <ExchangeIcon className='mob-nav-item__icon' />
                     <div className="mob-nav-item__link" >
                        <span>Exchanges</span>
                     </div>
                  </NavLink>
                  <NavLink className="mob-nav__item mob-nav-item" to={'/news'}>
                     <NewsIcon className='mob-nav-item__icon' />
                     <div className="mob-nav-item__link" >
                        <span>News</span>
                     </div>
                  </NavLink>
               </div>
            </nav>
         </header>
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
      </>
   )
}

export default Header