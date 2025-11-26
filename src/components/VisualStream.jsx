import React, { useState } from 'react';

const images = [
    "/images/1.jpeg", "/images/5.jpeg", "/images/9.jpeg",
    "/images/10.jpeg", "/images/2.jpeg", "/images/3.jpeg"
];

const VisualStream = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState('');

    const openLightbox = (src) => {
        setCurrentImage(src);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    return (
        <>
            <section className="visual-stream">
                <div className="marquee-track">
                    {/* Double the images for seamless loop */}
                    {[...images, ...images].map((src, index) => (
                        <div className="stream-item" key={index} onClick={() => openLightbox(src)}>
                            <img src={src} alt="Gallery" />
                        </div>
                    ))}
                </div>
            </section>

            {/* Lightbox */}
            <div
                className={`lightbox ${lightboxOpen ? 'active' : ''}`}
                onClick={closeLightbox}
            >
                <button className="lightbox-close" onClick={closeLightbox}>&times;</button>
                <img src={currentImage} alt="Gallery Preview" className="lightbox-img" onClick={(e) => e.stopPropagation()} />
            </div>
        </>
    );
};

export default VisualStream;
