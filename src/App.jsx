import React from 'react';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import Home from './Home.jsx';
import Header from './Header.jsx';
import Coins from './Coins.jsx';
import Exchange from './Exchange.jsx';
import CoinDetails from './CoinDetails.jsx';
import Footer from './Footer.jsx';

const App = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/coins" element={<Coins/>}/>
        <Route path="/exchange" element={<Exchange/>}/>
        <Route path="/coins/:id" element={<CoinDetails/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App