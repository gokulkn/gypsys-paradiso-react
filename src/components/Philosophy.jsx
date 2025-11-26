import React from 'react';

const Philosophy = () => {
    return (
        <section className="section philosophy">
            <div className="container grid-split">
                <div className="text-col reveal-text">
                    <h2>Gypsys Paradiso</h2>
                    <p className="location-byline">Munnar, Vattavada</p>
                    <div className="separator"></div>
                    <p className="lead">A serene sanctuary in a reserved forest, untouched by plastic. Slow mornings, shola breeze,
                        starry skies.
                    </p>
                    <p className="body-text">Gypsys Paradiso is a rustic campsite rooted in nature, nestled in a quiet rural village. We
                        don’t
                        offer the luxuries of a typical hotel here—nature itself is the true luxury. Arrive curious, leave restored.
                    </p>
                </div>
                <div className="img-col reveal-img">
                    <img src="/images/12.jpeg" alt="Forest Path" loading="lazy" width="600" height="650" />
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
