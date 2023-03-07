import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class Navbar extends Component {
    // static propTypes = {

    // }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand" to="/">News Monkey</Link>
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
                </nav>
            </div>
        )
    }
}

export default Navbar
