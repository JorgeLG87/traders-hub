import "./CashFlowStatement.css";

export default function CashFlowStatement({ data2 }) {
    return (
        <div className="cashflow-statement-container">
            <div className="first-part">
                <div className="row1-cfs">
                    {data2.financials?.cash_flow_statement?.net_cash_flow?.label ? <p className="label1">{data2.financials.cash_flow_statement.net_cash_flow.label}:</p> : null}
                    {data2.financials?.cash_flow_statement?.net_cash_flow?.label ? <p className="label2">{(data2.financials.cash_flow_statement.net_cash_flow.value).toLocaleString()}</p> : null}
                </div>
                <div className="row2-cfs">
                    {data2.financials?.cash_flow_statement?.net_cash_flow_continuing?.label ? <p className="label1">{data2.financials.cash_flow_statement.net_cash_flow_continuing.label}:</p> : null}
                    {data2.financials?.cash_flow_statement?.net_cash_flow_continuing?.label ? <p className="label2">{(data2.financials.cash_flow_statement.net_cash_flow_continuing.value).toLocaleString()}</p> : null}
                </div>
                <div className="row3-cfs">
                    {data2.financials?.cash_flow_statement?.net_cash_flow_from_financing_activities?.label ? <p className="label1">{data2.financials.cash_flow_statement.net_cash_flow_from_financing_activities.label}:</p> : null}
                    {data2.financials?.cash_flow_statement?.net_cash_flow_from_financing_activities?.label ? <p className="label2">{(data2.financials.cash_flow_statement.net_cash_flow_from_financing_activities.value).toLocaleString()}</p> : null}
                </div>
                <div className="row4-cfs">
                    {data2.financials?.cash_flow_statement?.net_cash_flow_from_financing_activities_continuing?.label ? <p className="label1">{data2.financials.cash_flow_statement.net_cash_flow_from_financing_activities_continuing.label}:</p> : null}
                    {data2.financials?.cash_flow_statement?.net_cash_flow_from_financing_activities_continuing?.label ? <p className="label2">{(data2.financials.cash_flow_statement.net_cash_flow_from_financing_activities_continuing.value).toLocaleString()}</p> : null}
                </div>
            </div>
            <div className="second-part">
                <div className="row5-cfs">
                        {data2.financials?.cash_flow_statement?.net_cash_flow_from_investing_activities?.label ? <p className="label1">{data2.financials.cash_flow_statement.net_cash_flow_from_investing_activities.label}:</p> : null}
                        {data2.financials?.cash_flow_statement?.net_cash_flow_from_investing_activities?.label ? <p className="label2">{(data2.financials.cash_flow_statement.net_cash_flow_from_investing_activities.value).toLocaleString()}</p> : null}
                </div>
                <div className="row6-cfs">
                    {data2.financials?.cash_flow_statement?.net_cash_flow_from_investing_activities_continuing?.label ? <p className="label1">{data2.financials.cash_flow_statement.net_cash_flow_from_investing_activities_continuing.label}:</p> : null}
                    {data2.financials?.cash_flow_statement?.net_cash_flow_from_investing_activities_continuing?.label ? <p className="label2">{(data2.financials.cash_flow_statement.net_cash_flow_from_investing_activities_continuing.value).toLocaleString()}</p> : null}
                </div>
                <div className="row7-cfs">
                    {data2.financials?.cash_flow_statement?.net_cash_flow_from_operating_activities?.label ? <p className="label1">{data2.financials.cash_flow_statement.net_cash_flow_from_operating_activities.label}:</p> : null}
                    {data2.financials?.cash_flow_statement?.net_cash_flow_from_operating_activities?.label ? <p className="label2">{(data2.financials.cash_flow_statement.net_cash_flow_from_operating_activities.value).toLocaleString()}</p> : null}
                </div>
                <div className="row8-cfs">
                    {data2.financials?.cash_flow_statement?.net_cash_flow_from_operating_activities_continuing?.label ? <p className="label1">{data2.financials.cash_flow_statement.net_cash_flow_from_operating_activities_continuing.label}:</p> : null}
                    {data2.financials?.cash_flow_statement?.net_cash_flow_from_operating_activities_continuing?.label ? <p className="label2">{(data2.financials.cash_flow_statement.net_cash_flow_from_operating_activities_continuing.value).toLocaleString()}</p> : null}
                </div>
            </div>
        </div>
    )
}