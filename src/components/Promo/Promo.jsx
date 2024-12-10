import './promo.css';
import promoImg from './../../img/images/header-img.png';

const Promo = () => {
    return (
        <section className="promo">
            <div className="container">
                <div className="promo__content">
                    <div className="promo__text">

                        <div className="promo__title">
                            <span className='highlight'>
                                <span>LET’S</span>
                            </span>
                            EXPLORE
                            <span className='highlight highlight--red'>
                                <span>UNIQUE</span>
                            </span>
                            CLOTHES.
                        </div>

                        <div className="promo__moto">
                            Live for Influential and Innovative fashion!
                        </div>
                        
                        <div className="promo__btn-wrapper">
                            <a href="#!" className='promo__btn'>
                                Shop Now
                            </a>
                        </div>

                    </div>
                    <div className="promo__img">
                        <img src={promoImg} alt="Promo" />
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Promo;
