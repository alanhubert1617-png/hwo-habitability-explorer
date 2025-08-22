import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>Habitability Explorer</h1>
            </div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/explore">Explore</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;