import React from 'react';

const Journey = () => {
    return (
        <section className="section journey-section">
            <div className="container">
                <div className="reveal-up">
                    <span className="label">NAVIGATION ROUTE</span>
                    <h2>Getting Here</h2>
                    <p style={{ color: 'var(--ash)', maxWidth: '600px' }}>From Vattavada, a scenic 7 km rugged stretch awaits you.</p>
                </div>

                <div className="journey-timeline reveal-up delay-2">
                    {/* Step 1 */}
                    <div className="timeline-point">
                        <div className="timeline-dot"></div>
                        <h3>Munnar</h3>
                        <p style={{ fontSize: '0.8rem', color: 'var(--gold)' }}>FUEL LOGISTICS</p>
                    </div>

                    {/* Step 2 */}
                    <div className="timeline-point">
                        <div className="timeline-dot"></div>
                        <h3>Checkpost</h3>
                        <p style={{ fontSize: '0.8rem', color: 'var(--gold)' }}>DEADLINE 1800</p>
                    </div>

                    {/* Step 3 */}
                    <div className="timeline-point">
                        <div className="timeline-dot"></div>
                        <h3>Vattavada</h3>
                        <p style={{ fontSize: '0.8rem', color: 'var(--gold)' }}>OFF-ROAD 7KM</p>
                    </div>

                    {/* Step 4 */}
                    <div className="timeline-point">
                        <div className="timeline-dot"></div>
                        <h3>Paradiso</h3>
                        <p style={{ fontSize: '0.8rem', color: 'var(--gold)' }}>ARRIVAL</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Journey;
