import React from 'react';
import {NavLink} from "react-router-dom";

function Header(props) {
    return (
        <header className="masthead">
            <h3 className="head-brand">Cover</h3>

            <nav className="nav">
                <div className="homeLink">
                    <NavLink exact to="/" activeClassName="active-page">
                        Home
                    </NavLink>
                </div>

                <div className="featuresLink">
                    <NavLink to="/features"
                             activeClassName="active-page">
                        Features
                    </NavLink>
                </div>

                <div className="contactLink">
                    <NavLink to="/contact" activeClassName="active-page">
                        Contact
                    </NavLink>
                </div>
            </nav>
        </header>
    );
}

export default Header;