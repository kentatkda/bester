import * as React from 'react';
import { Link } from "react-router-dom";

import './Navbar.css';

class Navbar extends React.Component {

    public render() {
        return (
            <header className="navbar" style={{ padding: 0 }}>
                <nav className="navbar__navigation">
                    <div>
                        <Link to="/BESTER" className="navbar__title">BESTER</Link>
                    </div>
                    <div className="spacer" style={{ flex: 1 }} />
                    <div className="navbar__navigation-items">
                        <ul>
                            <Link to="/gallery">
                                <li>gallery</li>
                            </Link>
                            <Link to="/events">
                                <li>Events</li>
                            </Link>
                            <Link to="/shinkan">
                                <li>Shinkan</li>
                            </Link>
                            <Link to="/contact">
                                <li>Contact</li>
                            </Link>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Navbar;
