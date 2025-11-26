import React from 'react';

const Rituals = () => {
    return (
        <section className="section rituals dark-mode">
            <div className="container">
                <div className="header-center reveal-text">
                    <h2>Curated Solitude.</h2>
                    <p className="sub-head">Simple pleasures, elevated.</p>
                </div>

                <div className="grid-triad">
                    <div className="card reveal-up">
                        <div className="card-img"><img src="/images/10.jpeg" alt="Fire" loading="lazy" /></div>
                        <h3>Fire & Stories</h3>
                        <p>Private campfires to warm your soul.</p>
                    </div>
                    <div className="card reveal-up delay-1">
                        <div className="card-img"><img src="/images/9.jpeg" alt="Trek" loading="lazy" /></div>
                        <h3>Forest Walks</h3>
                        <p>Guided trails through secret paths.</p>
                    </div>
                    <div className="card reveal-up delay-2">
                        <div className="card-img"><img src="/images/1.jpeg" alt="Night" loading="lazy" /></div>
                        <h3>Stargazing</h3>
                        <p>A sky so clear, you see the galaxy.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Rituals;
