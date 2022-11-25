import React from 'react';
import timer from '../../../assets/icon/timer.png';
import location from '../../../assets/icon/location.jpg';
import contact from '../../../assets/icon/contact.png';
import Infocard from './Infocard';
const InfoCards = () => {
    const cardData = [
        {
            id: 1,
            name: 'visiting hours',
            description: 'visit 10 am to 8 pm everyday',
            icon: timer,
            bgClass: 'bg-secondary'
        },
        {
            id: 2,
            name: 'location',
            description: '241/B,Mohakhali,Dhaka-1212',
            icon: location,
            bgClass: 'bg-accent'
        },
        {
            id: 3,
            name: 'contact us',
            description: '01818675432',
            icon: contact,
            bgClass: 'bg-secondary'
        },
    ]
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3' >
            {
                cardData.map(card => <Infocard

                    key={card.id}
                    card={card}
                ></Infocard>
                )
            }
        </div>
    );
};

export default InfoCards;