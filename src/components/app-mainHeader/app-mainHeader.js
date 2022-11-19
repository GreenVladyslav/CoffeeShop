import Nav from '../app-nav/app-nav';
import BeansLogo from '../app-beansLogo/app-beansLogo';

import grainsHeader from '../../resources/grains/grainsHeader.svg';
import grainsWhite from '../../resources/grains/grainsWhite.svg';

import './app-mainHeader.scss';

const MainHeader = () => {
    return(
        <section className="promo">
            <Nav clazzNav="nav nav-white" 
                clazzImg="nav__img" src={grainsHeader} alt="beans-white"
                clazzLink="nav__link nav-white_link"/>

            <h1 className="title">Everything You Love About Coffee</h1>
            <BeansLogo beanslogo="beans__logo"
                    img={grainsWhite}
                    divider="beans__logo-divider"/>
                    
            <h2 className="promo__subtitle">We makes every day full of energy and taste<br/><br/>Want to try our beans?</h2>
            <button className="promo__btn">More</button>
        </section>
    )
}

export default MainHeader;