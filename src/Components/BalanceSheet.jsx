import "./BalanceSheet.css";

export default function BalanceSheet({ data2 }) {
    return (
       <div className="balance-sheet-container">
        <div className="first-part">
            <div className="row1">
                {data2.financials?.balance_sheet?.accounts_payable?.label ? <p className="label1">{data2.financials.balance_sheet.accounts_payable.label}:</p> : null}
                {data2.financials?.balance_sheet?.accounts_payable?.label ? <p className="label2">({(data2.financials.balance_sheet.accounts_payable.value).toLocaleString()})</p> : null}
            </div>
            <div className="row2">
                {data2.financials?.balance_sheet?.assets?.label ? <p className="label1">{data2.financials.balance_sheet.assets.label}:</p> : null}
                {data2.financials?.balance_sheet?.assets?.value ? <p className="label2">{(data2.financials.balance_sheet.assets.value).toLocaleString()}</p> : null}
            </div>
            < div className="row3">
                {data2.financials?.balance_sheet?.cash?.label ? <p className="label1">{data2.financials.balance_sheet.cash.label}:</p> : null}
                {data2.financials?.balance_sheet?.cash?.value ? <p className="label2">{(data2.financials.balance_sheet.cash.value).toLocaleString()}</p> : null}
            </div>
            < div className="row4">
                {data2.financials?.balance_sheet?.current_assets?.label ? <p className="label1">{data2.financials.balance_sheet.current_assets.label}:</p> : null}
                {data2.financials?.balance_sheet?.current_assets?.value ? <p className="label2">{(data2.financials.balance_sheet.current_assets.value).toLocaleString()}</p> : null}
            </div>
            < div className="row5">
                {data2.financials?.balance_sheet?.current_liabilities?.label ? <p className="label1">{data2.financials.balance_sheet.current_liabilities.label}:</p> : null}
                {data2.financials?.balance_sheet?.current_liabilities?.value ? <p className="label2">({(data2.financials.balance_sheet.current_liabilities.value).toLocaleString()})</p> : null}
            </div>
            < div className="row6">
                {data2.financials?.balance_sheet?.equity?.label ? <p className="label1">{data2.financials.balance_sheet.equity.label}:</p> : null}
                {data2.financials?.balance_sheet?.equity?.value ? <p className="label2">{(data2.financials.balance_sheet.equity.value).toLocaleString()}</p> : null}
            </div>
            < div className="row7">
                {data2.financials?.balance_sheet?.fixed_assets?.label ? <p className="label1">{data2.financials.balance_sheet.fixed_assets.label}:</p> : null}
                {data2.financials?.balance_sheet?.fixed_assets?.value ? <p className="label2">{(data2.financials.balance_sheet.fixed_assets.value).toLocaleString()}</p> : null}
            </div>
        </div>
        <div className="second-part">
            < div className="row8">
                {data2.financials?.balance_sheet?.inventory?.label ? <p className="label1">{data2.financials.balance_sheet.inventory.label}:</p> : null}
                {data2.financials?.balance_sheet?.inventory?.value ? <p className="label2">{(data2.financials.balance_sheet.inventory.value).toLocaleString()}</p> : null}
            </div>
            < div className="row9">
                {data2.financials?.balance_sheet?.liabilities?.label ? <p className="label1">{data2.financials.balance_sheet.liabilities.label}:</p> : null}
                {data2.financials?.balance_sheet?.liabilities?.value ? <p className="label2">({(data2.financials.balance_sheet.liabilities.value).toLocaleString()})</p> : null}
            </div>
            < div className="row10">
                {data2.financials?.balance_sheet?.long_term_debt?.label ? <p className="label1">{data2.financials.balance_sheet.long_term_debt.label}:</p> : null}
                {data2.financials?.balance_sheet?.long_term_debt?.value ? <p className="label2">({(data2.financials.balance_sheet.long_term_debt.value).toLocaleString()})</p> : null}
            </div>
            < div className="row11">
                {data2.financials?.balance_sheet?.temporary_equity?.label ? <p className="label1">{data2.financials.balance_sheet.temporary_equity.label}:</p> : null}
                {data2.financials?.balance_sheet?.temporary_equity?.value ? <p className="label2">{(data2.financials.balance_sheet.temporary_equity.value).toLocaleString()}</p> : null}
            </div>
            < div className="row12">
                {data2.financials?.balance_sheet?.wages?.label ? <p className="label1">{data2.financials.balance_sheet.wages.label}:</p> : null}
                {data2.financials?.balance_sheet?.wages?.value ? <p className="label2">({(data2.financials.balance_sheet.wages.value).toLocaleString()})</p> : null}
            </div>
        </div>
       </div>
    )
}