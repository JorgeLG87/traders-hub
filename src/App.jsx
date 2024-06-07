import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';


import { getHighLows } from './api/fetch';
import { tickerFinancials } from './api/fetch';
import { getInfoAllStocks } from './api/fetch';
import { newsOfTicker } from './api/fetch';

import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import TradingViewWidget2 from './Components/TickerTape';

//Routes
import FinancialRecords from "./Components/FinancialRecords";
import Ticker from "./Components/Ticker";
import Home from "./Components/Home";
import CompanyOwnership from "./Components/CompanyOwnership"
import AboutUs from "./Components/AboutUs";


function App() {
  
  // getHighLows().then(res => console.log(res));

  // useEffect(() => {
  //   getHighLows("AAPL","2024","05","17").then(res => console.log(res));
  // },[]);

  // getInfoAllStocks("TSLA").then(res => console.log(res.results));

  return (
    <>
      <Router>
      <Header/>
      <Sidebar/>
      <TradingViewWidget2/>
        <Routes>
          <Route path="/" element={<Home TradingViewWidget2={TradingViewWidget2}/>}/>
          <Route path="/financials" element={<FinancialRecords tickerFinancials={tickerFinancials}/>}/>
          <Route path="/ticker" element={<Ticker getHighLows={getHighLows} newsOfTicker={newsOfTicker}/>}/>
          <Route path="/companyownership" element={<CompanyOwnership/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
