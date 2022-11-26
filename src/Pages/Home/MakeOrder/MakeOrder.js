import React from 'react';
import commonroom from '../../../assets/images/commonroom.jfif';

const MakeOrder = () => {
    return (
        <section>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={commonroom} className="lg:w-1/2 rounded-lg shadow-2xl" alt="" />
                    <div>
                        <h1 className="text-5xl font-bold">Make Order News!!!</h1>
                        <p className="py-6">Welcome to visit our market and decide.Incase of some resonable case installment will be considerable.All the best.We wish your good luck.</p>
                        <button className="btn btn-primary">Order Now</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeOrder;