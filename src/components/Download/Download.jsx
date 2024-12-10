import './download.css';
import AppStoreImg from './../../img/icons/app-store.png';
import GooglePlayImg from './../../img/icons/google-play.png';
import VoucherImg from './../../img/images/vouchers-img.png';

const Download = () => {
    return (
        <section className="download">
            <div className="container">
                <div className="download__body">
                    <div className="download__left">
                        <div className="download__header">
                            DOWNLOAD APP & GET THE VOUCHER!
                        </div>
                        <div className="download__text">
                            Get 30% off for first transaction using
                            Rondovision mobile app for now.
                        </div>
                        <div className="download__images">
                            <a href="#!"><img src={AppStoreImg} alt="AppStore" /></a>
                            <a href="#!"><img src={GooglePlayImg} alt="GooglePlay" /></a>
                        </div>
                    </div>
                    <div className="download__right">
                        <img src={VoucherImg} alt="Voucher" />
                    </div>
                </div>
                
            </div>
        </section>
    );
}
 
export default Download;