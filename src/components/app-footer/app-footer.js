import BeansLogo from '../app-beansLogo/app-beansLogo';
import Nav from '../app-nav/app-nav';

import grainsFooter from '../../resources/grains/grainsFooter.svg';
import grainsBlack from '../../resources/grains/grainsBlack.svg';

import './app-footer.scss';

const Footer = () => {
    return(
        <footer className="footer">
            <Nav clazzNav="nav" 
                clazzImg="nav__img" src={grainsFooter} alt="beans-black"
                clazzLink="nav__link"/>

            <BeansLogo beanslogo="beans__logo mt-10"
                img={grainsBlack}
                divider="beans__logo-divider black-divider"/>
        </footer>
    )
}

export default Footer;