import './sale.css';
import saleImg from './../../img/images/promo-img.png';

const Sale = () => {
    return (
        <section className="sale">
            <div className="container">
                <div className="sale__content">
                    <div className="sale__img">
                        <img src={saleImg} alt="Sale" />
                    </div>
                    <div className="sale__text">
                        <div className="sale__title">
                            <span className='highlight-sale'>
                                <span>PAYDAY</span>
                            </span>
                            SALE NOW
                        </div>
                        <div className="sale__subtext">
                            Spend minimal $100 get 30% off
                            voucher code for your next purchase
                        </div>
                        <div className="sale__date">
                            1 June - 10 June 2021
                        </div>
                        <div className="sale__star-text">
                            *Terms & Conditions apply
                        </div>
                        <div className="sale__btn">
                            <a href="#!">
                                SHOP NOW
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Sale;