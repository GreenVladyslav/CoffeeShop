import BeansLogo from '../app-beansLogo/app-beansLogo';

import ourCoffeeImg from '../../resources/ourCoffeeImg.png';
import grainsBlack from '../../resources/grains/grainsBlack.svg';

import './app-descrCoffee.scss';

const DescrCoffee = () => {
    return(
        <section className="aboutCoffe">
            <div className="aboutCoffe__item">
                <img src={ourCoffeeImg} alt="aromistico"/>
            </div>
            <div className="aboutCoffe__item">
                <h2 className="aboutCoffe__item-subtitle">About it</h2>
                <BeansLogo beanslogo="beans__logo"
                    img={grainsBlack}
                    divider="beans__logo-divider black-divider"/>

                <div className="aboutCoffe__item-descr">
                    <p><span>Country:</span> Brasil</p>
                    <p><span>Description:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <div className="aboutCoffe__item-price">Price: <span>16.99$</span></div>
                </div>
            </div>
        </section>
    )
}

export default DescrCoffee;