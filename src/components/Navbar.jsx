import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`nav-bar ${scrolled ? 'scrolled' : ''}`}>
            <div className="brand">
                GYPSYS PARADISO
                <span className="nav-byline">Sanctuary Vattavada</span>
            </div>
            <div className="nav-right">
                <a href="https://wa.me/919037797703" target="_blank" rel="noopener noreferrer" className="nav-book">
                    RESERVE
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
