import "./Sidebar.css";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="sidebar-container">
            <NavLink style={{textDecoration:'none', color: 'white'}} to="/ticker">
                <p className="sidebar-item">Ticker Lookup</p>
            </NavLink>
            <NavLink style={{textDecoration:'none', color: 'white'}} to="/financials">
                <p className="sidebar-item">Financial Records</p>
            </NavLink>
            <NavLink to="/companyownership" style={{textDecoration:'none', color: 'white'}}>
                <p className="sidebar-item">Company Ownership</p>
            </NavLink>
            <NavLink to="/aboutus" style={{textDecoration:'none', color: 'white'}}>
                <p className="sidebar-item">About Us</p>
            </NavLink>
        </div>
    )
}