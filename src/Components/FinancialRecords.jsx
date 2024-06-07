import "./FinancialRecords.css";
import { useState, useEffect, useRef } from "react";
import BalanceSheet from "./BalanceSheet";
import IncomeStatement from "./IncomeStatement";
import CashFlowStatement from "./CashFlowStatement";
import ComprehensiveIncome from "./ComprehensiveIncome";


export default function FinancialRecords({ tickerFinancials }) {

    const [ ticker2, setTicker2 ] = useState("");
    const [ data2, setData2 ] = useState({});
    const [ isData2, setIsData2 ] = useState(false);
    const [ recordType, setRecordType ] = useState("");
    
    function handleSubmit(e) {
        e.preventDefault();
        const currTicker = document.getElementById("financials-ticker").value;
        setTicker2(currTicker);
    }
    

    useEffect(() => {
            if (ticker2 !== "") {
                tickerFinancials(ticker2.toUpperCase()).then(res => setData2(res.results[0]));
                
                setIsData2(true);
            } else {
                setIsData2(false);
            }
    },[ticker2])


    console.log(data2, "Line 41");
    console.log(recordType, "Line 32");

    return (
        <div className="financials-container">
            <div className="financials-form-container">
                <form onSubmit={handleSubmit} className="financials-form">
                    <input id="financials-ticker" className="ticker-input" type="text" placeholder="Ticker Symbol"/>
                </form>
                <button onClick={() => setRecordType("balance_sheet")} className="option1">Balance Sheet</button>
                <button onClick={() => setRecordType("income_statement")} className="option2">Income Statement</button>
                <button onClick={() => setRecordType("cash_flow_statement")} className="option3">Cash Flow Statement</button>
                <button onClick={() => setRecordType("comprehensive_income")} className="option4">Comprehensive Income</button>
            </div>
                {data2 ? <p className="company-name">{data2.company_name}</p> : null}
            <div className="financial-records-container">
                {/* {data2.financials?.balance_sheet?.accounts_payable?.label ? <p className="label1">{data2.financials.balance_sheet.accounts_payable.label}:</p> : null}
                {data2.financials?.balance_sheet?.accounts_payable?.label ? <p className="label2">{(data2.financials.balance_sheet.accounts_payable.value).toLocaleString()}</p> : null} */}
                {recordType === "balance_sheet" ? <BalanceSheet data2={data2}/> : null}
                {recordType === "income_statement" ? <IncomeStatement data2={data2}/> : null}
                {recordType === "cash_flow_statement" ? <CashFlowStatement data2={data2}/> : null}
                {recordType === "comprehensive_income" ? <ComprehensiveIncome data2={data2}/> : null}
            </div>
        </div>
    )
}  