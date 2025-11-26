import React from 'react';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-content">
                <h2 style={{ color: 'var(--gold)' }}>Ready to reset?</h2>
                <div className="cta-wrapper">
                    <a href="https://wa.me/919037797703" target="_blank" rel="noopener noreferrer" className="primary-btn">
                        WhatsApp Booking
                    </a>
                    <a href="https://instagram.com/gypsysparadiso" target="_blank" rel="noopener noreferrer" className="secondary-btn">
                        Instagram
                    </a>
                </div>
                <div className="credits">
                    <span>© 2025 Gypsys Paradiso</span>
                    <span>Designed for Peace</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
