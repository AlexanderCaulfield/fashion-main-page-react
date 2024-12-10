import './brands.css';

import Nikifilini from './../../img/brands/Nikifilini.png';
import JadedLondon from './../../img/brands/JadedLondon.png';
import Affliction from './../../img/brands/Affliction.png';
import Tapout from './../../img/brands/Tapout.png';
import ChromeHearts from './../../img/brands/ChromeHearts.png';
import Volchok from './../../img/brands/Volchok.png';
import LoucheSaints from './../../img/brands/LoucheSaints.png';


const Brands = () => {
    return (
        <section className="brands">
            <div className="container">
                <ul className="brands__list">
                    <li><a href="#!"><img src={Nikifilini} alt="Nikifilini" /></a></li>
                    <li><a href="#!"><img src={JadedLondon} alt="Jaded London" /></a></li>
                    <li><a href="#!"><img src={Affliction} alt="Affliction" /></a></li>
                    <li><a href="#!"><img src={Tapout} alt="Tapout" /></a></li>
                    <li><a href="#!"><img src={Volchok} alt="Volchok" /></a></li>
                    <li><a href="#!"><img src={ChromeHearts} alt="Chrome Hearts" /></a></li>
                    <li><a href="#!"><img src={LoucheSaints} alt="LoucheSaints" /></a></li>
                </ul>
            </div>
        </section>
    );
}
 
export default Brands;