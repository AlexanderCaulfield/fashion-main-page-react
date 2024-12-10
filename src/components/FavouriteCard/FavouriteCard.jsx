import './favouriteCard.css';
import arrowImg from './../../img/icons/arrow.svg';

const favouriteCard = ( {favourite} ) => {
    const {img, title} = favourite;

    return (
        <div className="favourite__card">
            <a href="#!" className='favourite__card-link'></a>
            <img className="favourite__card-img" src={img} alt={title} />
            <div className="favourite__card-body">
                <div className="favourite__card-text">
                    <div className="favourite__card-title">{title}</div>
                    <div className="favourite__card-title-subtext">Explore Now!</div>
                </div>
                <div className="favourite__card-icon">
                    <img src={arrowImg} alt="Open" />
                </div>
            </div>
        </div>
    );
}
 
export default favouriteCard;