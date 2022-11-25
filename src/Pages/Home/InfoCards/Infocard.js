import React from 'react';

const Infocard = ({ card }) => {
    const { name, description, icon, bgClass } = card;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure>
                <img src={icon} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions">
                    <button className="btn btn-secondary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Infocard;