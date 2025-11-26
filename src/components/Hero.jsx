import React, { useEffect, useRef } from 'react';

const Hero = () => {
    const imgRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const scroll = window.scrollY;
            if (imgRef.current && scroll < window.innerHeight) {
                imgRef.current.style.transform = `scale(1.1) translateY(${scroll * 0.2}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="hero">
            <div className="hero-img-container">
                <img
                    ref={imgRef}
                    src="/images/4.jpeg"
                    alt="Vattavada Landscape"
                    className="parallax-img"
                />
                <div className="hero-scrim"></div>
            </div>

            <div className="hero-content">
                <h1 className="hero-title reveal-up">
                    <span>SILENCE IS</span>
                    <span><i>THE ULTIMATE</i></span>
                    <span>LUXURY.</span>
                </h1>
                <div className="hero-sub reveal-up delay-3">
                    <p>A Sacred Social Detox. A pristine sanctuary hidden deep in the Shola forests.</p>
                    <a href="https://wa.me/919037797703" target="_blank" rel="noopener noreferrer" className="hero-btn">
                        Initiate Escape
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Hero;
