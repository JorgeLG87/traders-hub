import "./Sidebar.css";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
    return (
        <div className="sidebar-container">
            <NavLink className="sidebar-item" style={{textDecoration:'none', color: 'white'}} to="/ticker">
                <p>Ticker Lookup</p>
            </NavLink>
            <NavLink to="/financials">
                <p className="sidebar-item">Financial Records</p>
            </NavLink>
            <NavLink to="/">
                <p className="sidebar-item">Company Ownership</p>
            </NavLink>
        </div>
    )
}