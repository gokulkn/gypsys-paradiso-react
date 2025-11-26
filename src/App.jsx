import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import VisualStream from './components/VisualStream';
import Accommodation from './components/Accommodation';
import Rituals from './components/Rituals';
import Reviews from './components/Reviews';
import Location from './components/Location';
import Essentials from './components/Essentials';
import Journey from './components/Journey';
import Footer from './components/Footer';
import MobileFloat from './components/MobileFloat';

function App() {
    useEffect(() => {
        // Reveal Animations
        const observerOptions = { threshold: 0.15 };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        const elements = document.querySelectorAll('.reveal-text, .reveal-img, .reveal-up, .reveal-block, .journey-timeline');
        elements.forEach(el => observer.observe(el));

        // Cleanup
        return () => {
            elements.forEach(el => observer.unobserve(el));
            observer.disconnect();
        };
    }, []);

    return (
        <>
            <div className="fog-layer"></div>
            <div className="noise-overlay"></div>

            <Navbar />
            <Hero />
            <Philosophy />
            <VisualStream />
            <Accommodation />
            <Rituals />
            <Reviews />
            <Location />
            <Essentials />
            <Journey />
            <Footer />
            <MobileFloat />
        </>
    );
}

export default App;
