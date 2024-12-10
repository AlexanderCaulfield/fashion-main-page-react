import { useState } from 'react';
import Card from '../Card/Card';
import {categories} from './../../data';
import './arrivals.css';

const Arrivals = () => {
    const [arrivals, setArrivals] = useState(categories);

    const categoryCards = arrivals.map((category) => {
        return <Card 
            category={category}
            key={category.id}
            />
    });

    return (
        <section className='arrivals'>
            <div className="container">
                <div className="arrivals__header">
                    <h2 className="title-2">NEW ARRIVALS</h2>
                </div>
                <div className="arrivals__cards">
                    {categoryCards}
                </div>
            </div>
        </section>
    );
}
 
export default Arrivals;