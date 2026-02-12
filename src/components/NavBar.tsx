import { useState } from 'react';
import { NavLink } from "react-router-dom";
import '../navbar.css'; // We will create this next

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    };

    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <Logo />
                </div>
                <div className="menu-icon" onClick={handleShowNavbar}>
                    <Hamburger />
                </div>
                {/* Toggle the 'active' class based on state */}
                <div className={`nav-elements ${showNavbar ? "active" : ""}`}>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/list">Student List</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/cali">About Cali</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

const Hamburger = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="52" height="24" viewBox="0 0 52 24">
        <g id="Group_9" transform="translate(-294 -47)">
            <rect width="42" height="4" rx="2" transform="translate(304 47)" fill="#574c4c" />
            <rect width="42" height="4" rx="2" transform="translate(304 67)" fill="#574c4c" />
            <rect width="52" height="4" rx="2" transform="translate(294 57)" fill="#574c4c" />
        </g>
    </svg>
);

const Logo = () => (
    <img
        src="logo.svg"
        alt="Logo"
        style={{ height: '41px', width: 'auto' }}
    />
);

export default Navbar;