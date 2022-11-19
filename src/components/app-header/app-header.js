import Nav from '../app-nav/app-nav';

import grainsHeader from '../../resources/grains/grainsHeader.svg';

import './app-header.scss';

const Header = (props) => {
    return(
        <header className={props.clazz}>
            <Nav clazzNav="nav nav-white" 
                clazzImg="nav__img" src={grainsHeader} alt="beans-white"
                clazzLink="nav__link nav-white_link"/>

            <h1 className="title">{props.title}</h1>
        </header>
    )
}

export default Header;