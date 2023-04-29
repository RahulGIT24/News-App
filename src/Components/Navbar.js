import React from 'react'
import { Link } from "react-router-dom";

const Navbar = (props) => {
    // static propTypes = {

    // }
    return (
        <div>
            <nav className={`navbar fixed-top navbar-expand-lg  navbar-${props.mode == 'light' ? 'light' : "dark"} bg-${props.mode == 'light' ? 'light' : "dark"}`}>
                <Link className="navbar-brand mx-3" to="/">News Monkey</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item"> <Link to="business" className="nav-link"> Business</Link></li>
                        <li className="nav-item"> <Link to="entertainment" className="nav-link"> Entertainment</Link></li>
                        <li className="nav-item"> <Link to="general" className="nav-link"> General</Link></li>
                        <li className="nav-item"> <Link to="health" className="nav-link"> Health</Link></li>
                        <li className="nav-item"> <Link to="science" className="nav-link"> Science</Link></li>
                        <li className="nav-item"> <Link to="sports" className="nav-link"> Sports</Link></li>
                        <li className="nav-item"> <Link to="technology" className="nav-link"> Technology</Link></li>
                    </ul>
                </div>
                <div className="form-check form-switch">
                    <input className="form-check-input" onClick={props.toogleBtn} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`Enable ${props.mode == 'light' ? 'Dark' : 'Light'} Mode`}</label>
                </div>
            </nav>
        </div>
    )

}

export default Navbar
