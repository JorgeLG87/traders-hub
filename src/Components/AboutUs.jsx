import "./AboutUs.css";

export default function AboutUs() {
    return (
        <div className="aboutUs-main-container">
            < div className="title-container">
                <p className="title">Jorge Godoy</p>
            </div>
            <img className="profile-image" src="/professionalpic.jpeg" alt="profile pic"/>
            <div className="links-container">
                <img className="links-icon" src="/github.svg"/>
                <p className="links-text">Github Account</p>
            </div>
            <div className="links-container">
                <img className="links-icon" src="/linkedin.svg"/>
                <p className="links-text">LinkedIn Account</p>
            </div>
        </div>
    )
}

