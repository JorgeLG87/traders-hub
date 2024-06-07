import "./TickerTape.css";
import React, { useEffect, useRef } from 'react';

const TradingViewWidget2 = () => {

    const connectionStatus = useRef(false);

  useEffect(() => {

    if (connectionStatus.current===false) {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
        script.async = true;
        script.innerHTML = JSON.stringify({
        symbols: [
            { proName: "FOREXCOM:SPXUSD", title: "S&P 500 Index" },
            { proName: "FOREXCOM:NSXUSD", title: "US 100 Cash CFD" },
            { proName: "FX_IDC:EURUSD", title: "EUR to USD" },
            { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
            { proName: "BITSTAMP:ETHUSD", title: "Ethereum" }
        ],
        showSymbolLogo: true,
        isTransparent: false,
        displayMode: "adaptive",
        colorTheme: "light",
        locale: "en"
        });
        document.querySelector('.tradingview-widget-container__widget2').appendChild(script);

        return () => {
         connectionStatus.current = true;
        };
    }
  }, []);

  return (
    <div className="tradingview-widget-container2">
      <div className="tradingview-widget-container__widget2"></div>
    </div>
  );
};

export default TradingViewWidget2;
