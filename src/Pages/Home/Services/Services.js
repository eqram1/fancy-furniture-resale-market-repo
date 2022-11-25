import React from 'react';
import bedroom from '../../../assets/images/bedroom.jpg'
import kitchenroom from '../../../assets/images/kitchenroom.jpg'
import dinningroom from '../../../assets/images/dinninngroom.jfif'
import Service from './Service';
const Services = () => {
    const servicesData = [
        {
            id: 1,
            name: 'Bed room furniture',
            description: 'Khat with related necessaries',
            img: bedroom
        },
        {
            id: 2,
            name: 'Kitchen room furniture',
            description: 'Kitchen cavinet with related necessaries',
            img: kitchenroom
        },
        {
            id: 3,
            name: 'Dinning room furniture',
            description: 'Dinning table with related necessaries',
            img: dinningroom
        },

    ]
    return (
        <div className='mt-16'>
            <div className='text-center'>
                <h3 className='text-2xl font-bold text-primary uppercase'>Our Services</h3>
                <h2 className='text-3xl'>Services we offered</h2>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    servicesData.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;