import BeansLogo from '../app-beansLogo/app-beansLogo';

import grainsBlack from '../../resources/grains/grainsBlack.svg';

import './app-about.scss';

const About = (props) => {
    return(
        <section className="about">
            <div className="about__item">
                <img src={props.img} alt={props.alt}/>
            </div>
            <div className="about__item">
                <h2 className="about__item-subtitle">{props.subtitle}</h2>
                <BeansLogo beanslogo="beans__logo"
                    img={grainsBlack}
                    divider="beans__logo-divider black-divider"/>

                <div className="about__item-descr">
                    Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.<br/><br/>
                    Afraid at highly months do things on at. Situation recommend objection do intention <br/>so questions.<br/>
                    As greatly removed calling pleased improve an. Last ask him cold feel<br/>
                    met spot shy want. Children me laughing we prospect answered followed. At it went<br/>
                    is song that held help face.
                </div>
            </div>
        </section>
    )
}

export default About;