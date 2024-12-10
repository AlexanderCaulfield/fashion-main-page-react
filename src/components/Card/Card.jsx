import './card.css';
import arrowImg from './../../img/icons/arrow.svg';

const Card = ( {category} ) => {
    const {img, title} = category;
    
    return (
        <div className="card">
            <a href="#!" className='card__link'></a>
            <img className="card__img" src={img} alt={title} />
            <div className="card__body">
                <div className="card__text">
                    <div className="card__title">{title}</div>
                    <div className="card__title-subtext">Explore Now!</div>
                </div>
                <div className="card__icon">
                    <img src={arrowImg} alt="Open" />
                </div>
            </div>
        </div>
    );
}
 
export default Card;