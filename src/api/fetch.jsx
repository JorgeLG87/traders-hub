const URL = import.meta.env.VITE_MY_URL_V1;
const URL2 = import.meta.env.VITE_MY_URL_V2;
const URL3 = import.meta.env.VITE_MY_URL_VX;
const API_KEY = import.meta.env.VITE_API_KEY;



export function getHighLows(ticker,date) {
    return fetch(`${URL}open-close/${ticker}/${date}?adjusted=true&apiKey=${API_KEY}`).then(response => response.json());
}


export function getInfoAllStocks(ticker) {
    return fetch(`${URL2}reference/news?ticker=${ticker}&limit=10&apiKey=${API_KEY}`).then(response => response.json());
}

export function newsOfTicker(ticker) {
    return fetch(`${URL2}reference/news?ticker=${ticker}&limit=12&apiKey=${API_KEY}`).then(response => response.json());
}

export function tickerFinancials(ticker) {
    return fetch(`${URL3}reference/financials?ticker=${ticker}&limit=10&apiKey=${API_KEY}`).then(response => response.json());
}

