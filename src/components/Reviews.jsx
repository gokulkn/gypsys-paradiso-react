import React, { useRef } from 'react';

const Reviews = () => {
    const scrollerRef = useRef(null);

    return (
        <section className="section reviews">
            <div className="container">
                <div className="review-header reveal-text">
                    <span className="label">USER FEEDBACK</span>
                    <h2>Stories from the Sanctuary.</h2>
                </div>

                {/* Horizontal Scroll Container */}
                <div className="review-scroller reveal-up" ref={scrollerRef}>

                    {/* Review 1 */}
                    <div className="review-card">
                        <div className="rc-stars">★★★★★</div>
                        <p className="rc-text">"The rugged jeep ride to the property was an adventure in itself. Hidden deep in the
                            jungle, it feels like a secret world. The silence here truly resets you."</p>
                        <div className="rc-author">
                            <span className="rc-name">Arjun K.</span>
                            <span className="rc-type">Solo Traveler</span>
                        </div>
                    </div>

                    {/* Review 2 */}
                    <div className="review-card">
                        <div className="rc-stars">★★★★★</div>
                        <p className="rc-text">"Hospitality redefined. The staff treated us like family, and the hot BBQ dinner in the
                            cold mist was unforgettable. Felt less like a resort, and more like home."</p>
                        <div className="rc-author">
                            <span className="rc-name">Sarah & Tom</span>
                            <span className="rc-type">Couple Getaway</span>
                        </div>
                    </div>

                    {/* Review 3 */}
                    <div className="review-card">
                        <div className="rc-stars">★★★★★</div>
                        <p className="rc-text">"Waking up to the mist flowing right into our tent was magical. A true escape from the city
                            noise. Without doubt, the best place in Vattavada."</p>
                        <div className="rc-author">
                            <span className="rc-name">Rahul Varma</span>
                            <span className="rc-type">Nature Lover</span>
                        </div>
                    </div>

                    {/* Review 4 */}
                    <div className="review-card">
                        <div className="rc-stars">★★★★★</div>
                        <p className="rc-text">"Respect for nature is real here. A zone completely free of plastic that feels pristine and
                            untouched. If you hate crowds, this is the place."</p>
                        <div className="rc-author">
                            <span className="rc-name">Meera J.</span>
                            <span className="rc-type">Eco Traveler</span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Reviews;
