import React from 'react';

const Essentials = () => {
    return (
        <section className="section faq-section">
            <div className="container">
                <div className="reveal-up">
                    <span className="label">SYSTEM REQUIREMENTS</span>
                    <h2>Know Before You Go</h2>
                </div>

                <div className="bento-grid reveal-up delay-1">
                    {/* Network */}
                    <div className="bento-card">
                        <h3 className="bento-title">Network Coverage</h3>
                        <p className="bento-text">Jio & BSNL Only. Signal strength variable.</p>
                    </div>

                    {/* Fuel */}
                    <div className="bento-card">
                        <h3 className="bento-title">Fuel Logistics</h3>
                        <p className="bento-text">Last station: Munnar. Tank capacity check required.</p>
                    </div>

                    {/* Check Post */}
                    <div className="bento-card">
                        <h3 className="bento-title">Access Control</h3>
                        <p className="bento-text">Checkpost closes at 18:00 HRS strict.</p>
                    </div>

                    {/* Payment */}
                    <div className="bento-card">
                        <h3 className="bento-title">Transactions</h3>
                        <p className="bento-text">Digital (GPay) Only. No ATM infrastructure.</p>
                    </div>

                    {/* Alcohol */}
                    <div className="bento-card">
                        <h3 className="bento-title">Restricted Items</h3>
                        <p className="bento-text">Alcohol unavailable locally. Procurement in Munnar advised.</p>
                    </div>

                    {/* Eco Rules */}
                    <div className="bento-card">
                        <h3 className="bento-title">Eco-Protocol</h3>
                        <p className="bento-text">Zero Plastic Zone. Strict enforcement.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Essentials;
