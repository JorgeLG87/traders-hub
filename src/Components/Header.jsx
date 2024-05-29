import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="header-container">
            <Link style={{textDecoration:"none"}}to="/">
                <p className="website-title">Traders HUB</p>
            </Link>
        </div>
    )

}