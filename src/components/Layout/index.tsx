import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header'
import './Layout.scss'
import { MailIcon, GitIcon } from '../../images/icons'

interface LayoutProps {
   children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
   return (
      <div className="layout">
         <div className="layout__col">
            <div className="layout__row">
               <Header />
               <main className="layout__content">
                  <div className="content">
                     {children}
                  </div>
               </main>
            </div>
            <footer className="layout__footer footer">
               <div className="footer__row">
                  <div className="footer__main">
                     <div className="footer__col foot-col">
                        <div className="foot-col__title">
                           <span>About</span>
                        </div>
                        <ul className="foot-col__list">
                           <li className="foot-col__li">
                              <Link to='/'>
                                 Home
                              </Link>
                           </li>
                           <li className="foot-col__li">
                              <Link to='/exchanges'>
                                 Exchanges
                              </Link>
                           </li>
                           <li className="foot-col__li">
                              <Link to='/cryptocurrencies'>
                                 Cryptocurrencies
                              </Link>
                           </li>
                           <li className="foot-col__li">
                              <Link to='/news'>
                                 News
                              </Link>
                           </li>
                        </ul>
                     </div>
                     <div className="footer__col foot-col">
                        <div className="foot-col__title">
                           <span>Info</span>
                        </div>
                        <ul className="foot-col__list">
                           <li className="foot-col__li">
                              <Link to='/'>
                                 What is Bitcoin?
                              </Link>
                           </li>
                           <li className="foot-col__li">
                              <Link to='/'>
                                 Statistic
                              </Link>
                           </li>
                        </ul>
                     </div>
                     <div className="footer__col foot-col">
                        <div className="foot-col__title">
                           <span>Contact me</span>
                        </div>
                        <ul className="foot-col__list foot-contact">
                           <li className="foot-contact__li">
                              <GitIcon className='footer-icon' />
                              <a href='https://github.com/SashaGitHub01'>
                                 SashaGitHub01
                              </a>
                           </li>
                           <li className="foot-contact__li">
                              <MailIcon className='footer-icon' />
                              <span>
                                 alexwebdev777@gmail.com
                              </span>
                           </li>
                        </ul>
                     </div>
                  </div>
                  <div className="footer__col foot-col foot-col-center">
                     <div className="foot-col__title">
                        <span>About us</span>
                     </div>
                     <p className='foot-col__aboutus'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi odit magni hic nulla! Quisquam, omnis, praesentium inventore numquam rerum enim labore iusto laboriosam, minus perferendis ipsum ullam! Aliquam, quia facere.
                     </p>
                     <span className='foot-col__rights'>
                        © 2022 All rights resereved. Cryptoon, USA.
                     </span>
                  </div>
               </div>
            </footer>
         </div>
      </div>
   )
}

export default Layout