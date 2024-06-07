import "./IncomeStatement.css";

export default function IncomeStatement({ data2 }) {
    return (
        <div className="income-statement-container">
            <div className="first-part">
                <div className="row1-is">
                    {data2.financials?.income_statement?.basic_average_shares?.label ? <p className="label1">{data2.financials.income_statement.basic_average_shares.label}:</p> : null}
                    {data2.financials?.income_statement?.basic_average_shares?.label ? <p className="label2">{(data2.financials.income_statement.basic_average_shares.value).toLocaleString()}</p> : null}
                </div>
                <div className="row2-is">
                    {data2.financials?.income_statement?.basic_earnings_per_share?.label ? <p className="label1">{data2.financials.income_statement.basic_earnings_per_share.label}:</p> : null}
                    {data2.financials?.income_statement?.basic_earnings_per_share?.label ? <p className="label2">{(data2.financials.income_statement.basic_earnings_per_share.value).toLocaleString()}</p> : null}
                </div>
                <div className="row3-is">
                    {data2.financials?.income_statement?.benefits_costs_expenses?.label ? <p className="label1">{data2.financials.income_statement.benefits_costs_expenses.label}:</p> : null}
                    {data2.financials?.income_statement?.benefits_costs_expenses?.label ? <p className="label2">({(data2.financials.income_statement.benefits_costs_expenses.value).toLocaleString()})</p> : null}
                </div>
                <div className="row4-is">
                    {data2.financials?.income_statement?.cost_of_revenue?.label ? <p className="label1">{data2.financials.income_statement.cost_of_revenue.label}:</p> : null}
                    {data2.financials?.income_statement?.cost_of_revenue?.label ? <p className="label2">({(data2.financials.income_statement.cost_of_revenue.value).toLocaleString()})</p> : null}
                </div>
                <div className="row5-is">
                    {data2.financials?.income_statement?.costs_and_expenses?.label ? <p className="label1">{data2.financials.income_statement.costs_and_expenses.label}:</p> : null}
                    {data2.financials?.income_statement?.costs_and_expenses?.label ? <p className="label2">({(data2.financials.income_statement.costs_and_expenses.value).toLocaleString()})</p> : null}
                </div>
                <div className="row6-is">
                    {data2.financials?.income_statement?.diluted_average_shares?.label ? <p className="label1">{data2.financials.income_statement.diluted_average_shares.label}:</p> : null}
                    {data2.financials?.income_statement?.diluted_average_shares?.label ? <p className="label2">{(data2.financials.income_statement.diluted_average_shares.value).toLocaleString()}</p> : null}
                </div>
            </div>
            <div className="second-part">
                <div className="row7-is">
                    {data2.financials?.income_statement?.diluted_earnings_per_share?.label ? <p className="label1">{data2.financials.income_statement.diluted_earnings_per_share.label}:</p> : null}
                    {data2.financials?.income_statement?.diluted_earnings_per_share?.label ? <p className="label2">{(data2.financials.income_statement.diluted_earnings_per_share.value).toLocaleString()}</p> : null}
                </div>
                <div className="row8-is">
                    {data2.financials?.income_statement?.gross_profit?.label ? <p className="label1">{data2.financials.income_statement.gross_profit.label}:</p> : null}
                    {data2.financials?.income_statement?.gross_profit?.label ? <p className="label2">{(data2.financials.income_statement.gross_profit.value).toLocaleString()}</p> : null}
                </div>
                <div className="row9-is">
                    {data2.financials?.income_statement?.net_income_loss?.label ? <p className="label1">{data2.financials.income_statement.net_income_loss.label}:</p> : null}
                    {data2.financials?.income_statement?.net_income_loss?.label ? <p className="label2">({(data2.financials.income_statement.net_income_loss.value).toLocaleString()})</p> : null}
                </div>
                <div className="row10-is">
                    {data2.financials?.income_statement?.operating_expenses?.label ? <p className="label1">{data2.financials.income_statement.operating_expenses.label}:</p> : null}
                    {data2.financials?.income_statement?.operating_expenses?.label ? <p className="label2">({(data2.financials.income_statement.operating_expenses.value).toLocaleString()})</p> : null}
                </div>
                <div className="row11-is">
                    {data2.financials?.income_statement?.research_and_development?.label ? <p className="label1">{data2.financials.income_statement.research_and_development.label}:</p> : null}
                    {data2.financials?.income_statement?.research_and_development?.label ? <p className="label2">({(data2.financials.income_statement.research_and_development.value).toLocaleString()})</p> : null}
                </div>
                <div className="row12-is">
                    {data2.financials?.income_statement?.revenues?.label ? <p className="label1">{data2.financials.income_statement.revenues.label}:</p> : null}
                    {data2.financials?.income_statement?.revenues?.label ? <p className="label2">{(data2.financials.income_statement.revenues.value).toLocaleString()}</p> : null}
                </div>
            </div>
        </div>
    )
}