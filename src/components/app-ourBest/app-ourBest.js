import solimo from '../../resources/solimo.png';
import presto from '../../resources/presto.png';
import aromistico from '../../resources/aromistico.png';

import './app-ourBest.scss';

const OurBest = () => {
    return(
        <section className="best">
            <h2 className="best__subtitle">Our best</h2>
            <div className="best__inner">
                <a className="best__item" href="/about.html">
                    <img className="best__item-img" src={solimo} alt="coffee"/>
                    <p className="best__item-descr">Solimo Coffee Beans 2 kg</p>
                    <div className="best__item-price">10.73$</div>
                </a>

                <a className="best__item" href="/about.html">
                    <img className="best__item-img" src={presto} alt="coffee"/>
                    <p className="best__item-descr">Presto Coffee Beans 1 kg</p>
                    <div className="best__item-price">15.99$</div>
                </a>

                <a className="best__item" href="/about.html">
                    <img className="best__item-img" src={aromistico} alt="coffee"/>
                    <p className="best__item-descr">AROMISTICO Coffee 1 kg</p>
                    <div className="best__item-price">6.99$</div>
                </a>
            </div>
        </section>
    )
}

export default OurBest;