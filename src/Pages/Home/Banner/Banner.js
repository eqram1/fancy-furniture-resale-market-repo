import React from 'react';
import khat from '../../../assets/images/khat.jfif';
const Banner = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
                <img src={khat} className="rounded-lg w-1/2 shadow-2xl" alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Second Hand Furniture!!!</h1>
                    <p className="py-6">Welcome to visit in our second-hand-furniture-resale-marhet.We are committed to best product with resonable price.Various kinds of design for your best choice are present there.Come with family and decide .Wish your best luck.Thanks for your early coming.  </p>
                    <button className="btn btn-secondary">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;