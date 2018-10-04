import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ loggedIn, onLogout }) => {
    if (loggedIn) {
        return (
            <nav className="navbar">
                <div className="navbar-start">
                    <Link className="navbar-item" to="/">
                        Home
                    </Link>
                    <Link className="navbar-item" to="/jobs/new">
                        Post Job
                    </Link>
                    {/* eslint-disable-next-line */}
                    <a className="navbar-item" onClick={onLogout}>
                        Logout
                    </a>
                </div>
            </nav>
        );
    }

    return (
        <nav className="navbar">
            <div className="navbar-start">
                <Link className="navbar-item" to="/">
                    Home
                </Link>
                <Link className="navbar-item" to="/login">
                    Login
                </Link>
            </div>
        </nav>
    );
};

export default NavBar;
