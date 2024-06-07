import "./ComprehensiveIncome.css";

export default function ComprehensiveIncome({ data2 }) {
    return (
        <div className="comprehensive-income-container">
            <div className="part-one">
                <div className="row1-ci">
                    {data2.financials?.comprehensive_income?.comprehensive_income_loss?.label ? <p className="label1">{data2.financials.comprehensive_income.comprehensive_income_loss.label}:</p> : null}
                    {data2.financials?.comprehensive_income?.comprehensive_income_loss?.label ? <p className="label2">{(data2.financials.comprehensive_income.comprehensive_income_loss.value).toLocaleString()}</p> : null}
                </div>
                <div className="row2-ci">
                    {data2.financials?.comprehensive_income?.comprehensive_income_loss_attributable_to_noncontrolling_interest?.label ? <p className="label1">{data2.financials.comprehensive_income.comprehensive_income_loss_attributable_to_noncontrolling_interest.label}:</p> : null}
                    {data2.financials?.comprehensive_income?.comprehensive_income_loss_attributable_to_noncontrolling_interest?.label ? <p className="label2">{(data2.financials.comprehensive_income.comprehensive_income_loss_attributable_to_noncontrolling_interest.value).toLocaleString()}</p> : null}
                </div>
                <div className="row3-ci">
                    {data2.financials?.comprehensive_income?.comprehensive_income_loss_attributable_to_parent?.label ? <p className="label1">{data2.financials.comprehensive_income.comprehensive_income_loss_attributable_to_parent.label}:</p> : null}
                    {data2.financials?.comprehensive_income?.comprehensive_income_loss_attributable_to_parent?.label ? <p className="label2">{(data2.financials.comprehensive_income.comprehensive_income_loss_attributable_to_parent.value).toLocaleString()}</p> : null}
                </div>
            </div>
            <div className="second-part">
                <div className="row4-ci">
                    {data2.financials?.comprehensive_income?.other_comprehensive_income_loss?.label ? <p className="label1">{data2.financials.comprehensive_income.other_comprehensive_income_loss.label}:</p> : null}
                    {data2.financials?.comprehensive_income?.other_comprehensive_income_loss?.label ? <p className="label2">{(data2.financials.comprehensive_income.other_comprehensive_income_loss.value).toLocaleString()}</p> : null}
                </div>
                <div className="row5-ci">
                    {data2.financials?.comprehensive_income?.other_comprehensive_income_loss_attributable_to_parent?.label ? <p className="label1">{data2.financials.comprehensive_income.other_comprehensive_income_loss_attributable_to_parent.label}:</p> : null}
                    {data2.financials?.comprehensive_income?.other_comprehensive_income_loss_attributable_to_parent?.label ? <p className="label2">{(data2.financials.comprehensive_income.other_comprehensive_income_loss_attributable_to_parent.value).toLocaleString()}</p> : null}
                </div>
            </div>
        </div>
    )
}