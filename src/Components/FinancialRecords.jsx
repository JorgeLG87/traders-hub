// import { useSate } from "react"; 
import "./FinancialRecords.css";

// export default function FinancialRecords() {



//     return (
//         <>
//             {/* <p>Financial Records</p>
//             <div className="financial-tickerdata-container">

//                 <form className="financial-ticker-form">
//                     <input id="ticker" className="financial-ticker" type="text" placeholder="Ticker Symbol" />
//                 </form>
//                 <input type="date" id="calendar" name="calendar" className="financial-calendar"/>
//             </div> */}
//         </>
//     )
// }


// TradingViewWidget.jsx
// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';

function TradingViewWidget() {
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
                "width": "900",
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
    <div className="tradingview-widget-container" ref={container}>
      <div className="tradingview-widget-container__widget"></div>
      {/* <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a></div> */}
    </div>
  );
}

export default memo(TradingViewWidget);

