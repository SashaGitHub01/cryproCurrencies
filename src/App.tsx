import { useState } from 'react';
import './App.scss';
import AppRouter from './components/AppRouter';
import Layout from './components/Layout';

function App() {
   return (
      <div className="wrapper">
         <Layout>
            <AppRouter />
         </Layout>
      </div>
   )
}

export default App;
