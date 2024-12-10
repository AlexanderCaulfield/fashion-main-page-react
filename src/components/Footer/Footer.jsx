import './footer.css';
import fbIcon from './../../img/socials/fb.svg';
import inIcon from './../../img/socials/in.svg';
import instIcon from './../../img/socials/inst.svg';
import twIcon from './../../img/socials/tw.svg';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__body">
                    <div className="footer__left">
                        <div className="footer__header">
                            FASHION
                        </div>
                        <div className="footer__text">
                            Complete your style with awesome clothes from us.
                        </div>
                        <div className="footer__icons">
                            <a href="#!"><img src={fbIcon} alt="Facebook" /></a>
                            <a href="#!"><img src={instIcon} alt="Instagram" /></a>
                            <a href="#!"><img src={twIcon} alt="Twitter" /></a>
                            <a href="#!"><img src={inIcon} alt="LinkedIn" /></a>
                        </div>
                    </div>
                    <div className="footer__right">
                        <div className="footer__list">
                            <ul>
                                <li><a href="#!">Company</a></li>
                                <li><a href="#!">About</a></li>
                                <li><a href="#!">Contact Us</a></li>
                                <li><a href="#!">Support</a></li>
                                <li><a href="#!">Careers</a></li>
                            </ul>
                            <ul>
                                <li><a href="#!">Quick Link</a></li>
                                <li><a href="#!">Share Location</a></li>
                                <li><a href="#!">Orders Tracking</a></li>
                                <li><a href="#!">Size Guide</a></li>
                                <li><a href="#!">FAQs</a></li>
                            </ul>
                            <ul>
                                <li><a href="#!">Legal</a></li>
                                <li><a href="#!">Terms & Conditions</a></li>
                                <li><a href="#!">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;