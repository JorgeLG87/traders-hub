import { useState, useEffect } from "react";
import "./Ticker.css";
import News from "./News";

export default function Ticker({ getHighLows, newsOfTicker }) {

    const [ ticker, setTicker ] = useState("");
    const [ data, setData ] = useState({});
    const [ date, setDate ] = useState("");
    const [ info, setInfo ] = useState([]); 

    function handleSubmit(e) {
        e.preventDefault();
        const currTicker = document.getElementById("ticker").value;
        const currDate = document.getElementById("calendar").value;
        console.log(currTicker);
        setTicker(currTicker);
        setDate(currDate);
    }
    
    
    useEffect(() => {
        getHighLows(ticker.toUpperCase(), date).then(res => setData(res));
        newsOfTicker(ticker).then(res => setInfo(res.results));
    },[ticker])

    return (
        <div className="tickerbody-container">
            <div className="form-tickerdata-container">
                <form onSubmit={handleSubmit} className="ticker-form">
                    <input id="ticker" className="ticker" type="text" placeholder="Ticker Symbol" />
                </form>
                <input type="date" id="calendar" name="calendar" className="calendar"/>
            </div>

            <div className="tickerdata-container">
                <p>Open: {data.open}</p>
                <p>Close: {data.close}</p>
                <p>High: {data.high}</p>
                <p>Low: {data.low}</p>  
                <p>Volume: {data.volume}</p>    
            </div>
            <br></br>
            <br></br>
            <News info={info}/> 
            
      
        </div>
    )
}