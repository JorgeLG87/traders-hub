import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';


import { getHighLows } from './api/fetch';
import { getInfoAllStocks } from './api/fetch';
import { newsOfTicker } from './api/fetch';

import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";

//Routes
import FinancialRecords from "./Components/FinancialRecords";
import Ticker from "./Components/Ticker";
import Home from "./Components/Home";

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
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/financials" element={<FinancialRecords/>}/>
          <Route path="/ticker" element={<Ticker getHighLows={getHighLows} newsOfTicker={newsOfTicker}/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
