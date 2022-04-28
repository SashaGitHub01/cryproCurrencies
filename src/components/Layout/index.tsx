import React from 'react'
import Header from '../Header'
import './Layout.scss'

interface LayoutProps {
   children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
   return (
      <div className="layout">
         <div className="layout__row">
            <Header />
            <main className="layout__content">
               <div className="content">
                  {children}
               </div>
            </main>
         </div>
      </div>
   )
}

export default Layout