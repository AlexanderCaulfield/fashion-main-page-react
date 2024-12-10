import { useState } from 'react';
import './favourite.css';
import FavouriteCard from './../FavouriteCard/FavouriteCard';
import {favourites} from './../../data';

const Favourite = () => {
    const [favourite, setFavourite] = useState(favourites);

    const favouriteCards = favourite.map((favourite) => {
        return <FavouriteCard 
            favourite={favourite}
            key={favourite.id}
            />
    });

    return (
        <section className="favourite">
            <div className="container">
                <div className="favourite__header">
                    <div className="favourite__title">
                        Young’s Favourite
                    </div>
                </div>
                <div className="favourite__cards">
                    {favouriteCards}
                </div>
            </div>
        </section>
    );
}
 
export default Favourite;