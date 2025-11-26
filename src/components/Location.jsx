import React, { useState, useEffect } from 'react';

const Location = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        // Fallback timeout
        const timer = setTimeout(() => {
            setLoaded(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const handleLoad = () => {
        setLoaded(true);
    };

    return (
        <section className="section location">
            <div className={`map-container ${loaded ? 'loaded' : ''}`}>
                {/* Branded Loader */}
                <div className="map-loader">
                    <div className="gold-spinner"></div>
                    <p>Locating Sanctuary...</p>
                </div>
                {/* Map Iframe */}
                <iframe
                    id="googleMap"
                    src="https://maps.google.com/maps?q=Gypsys%20Paradiso%20Vattavada&t=k&z=18&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    onLoad={handleLoad}
                    title="Location Map"
                >
                </iframe>
            </div>
        </section>
    );
};

export default Location;
