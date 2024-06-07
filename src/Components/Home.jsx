import "./Home.css";
import React, { useEffect, useRef, memo } from 'react';
import TradingViewWidget2 from "./TickerTape";

function TradingViewWidget({ TradingViewWidget2 }) {
  const container = useRef();

  const connectionRef = useRef(false);
  
  useEffect(
      () => {
        if (connectionRef.current === false) {
            const script = document.createElement("script");
            script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
            script.type = "text/javascript";
            script.async = true;
            script.innerHTML = `
                {
                "width": "800",
                "height": "500",
                "symbol": "NASDAQ:AAPL",
                "interval": "D",
                "timezone": "Etc/UTC",
                "theme": "light",
                "style": "1",
                "locale": "en",
                "allow_symbol_change": true,
                "calendar": false,
                "support_host": "https://www.tradingview.com"
                }`;
            container.current.appendChild(script);
            return () => {
                connectionRef.current = true;
            };
        };
      }, []
  );



  return (
    <>
      <div className="welcome-container">
          <div className="home-welcome-text-container">
            <p className="home-welcome-text">Welcome to a traders heaven..</p>
          </div>
      </div>
      <div className="chartside-text-container">
        <p className="chartside-text">Your one stop for financial tools!!</p>
      </div>
      <div className="chart-container">
        <div className="tradingview-widget-container" ref={container}>
          <div className="tradingview-widget-container__widget"></div>
        </div>
      </div>
    </>
  );
}

export default memo(TradingViewWidget);