import React, { useEffect, useRef } from 'react';

const Accommodation = () => {
    const bgRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (bgRef.current) {
                const stayRect = bgRef.current.parentElement.getBoundingClientRect();
                if (stayRect.top < window.innerHeight && stayRect.bottom > 0) {
                    const speed = 0.1;
                    const scroll = window.scrollY;
                    // Calculate relative scroll for smoother effect
                    // Or stick to the original logic:
                    bgRef.current.style.transform = `scale(1.1) translateY(${(scroll - stayRect.top - window.innerHeight / 2) * speed}px)`;
                    // Adjusted slightly from original to match React context, 
                    // original was: `scale(1.1) translateY(${(scroll - stayRect.top) * speed}px)`
                    // Let's stick to original logic exactly if possible, but `scroll` is global.
                    bgRef.current.style.transform = `scale(1.1) translateY(${(scroll - stayRect.top) * speed}px)`;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="panoramic-stay">
            <div className="panoramic-bg">
                <img ref={bgRef} src="/images/3.jpeg" alt="Mist Cabin" className="parallax-bg" loading="lazy" />
            </div>
            <div className="panoramic-overlay"></div>

            <div className="panoramic-content reveal-text">
                <div className="glass-card">
                    <span className="label">The Accommodation</span>
                    <h2>Wake up inside <br /><em>the clouds.</em></h2>
                    <p>Blurring the line between shelter and nature. Watch the mist roll into your room as you sip fresh tea.
                        Experience authentic glamping with plush bedding and private decks.</p>

                    <div className="specs-row">
                        {/* Item 1: Mist Cabins */}
                        <div className="spec-item">
                            <svg className="spec-icon gold-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M3 21h18M5 21V7l8-4 8 4v14M9 10a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2" />
                            </svg>
                            <span className="spec-label highlight-text">Mist Cabins</span>
                        </div>
                        {/* Item 2: Forest Tents */}
                        <div className="spec-item">
                            <svg className="spec-icon gold-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M19 21H5L12 3l7 18zM12 9v12" />
                            </svg>
                            <span className="spec-label highlight-text">Forest Tents</span>
                        </div>
                        {/* Item 3: Elevation */}
                        <div className="spec-item">
                            <svg className="spec-icon gold-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M8 3l4 8 5-5 5 15H2L8 3z" />
                            </svg>
                            <span className="spec-label highlight-text">6000ft Elevation</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Accommodation;
