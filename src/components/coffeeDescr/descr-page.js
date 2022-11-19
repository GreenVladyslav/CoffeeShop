import Header from '../app-header/app-header';
import Footer from '../app-footer/app-footer';
import DescrCoffee from '../app-descrCoffee/app-descrCoffee';

import './descr-page.scss';

const DescrPage = () => {
    return(
        <div className='descr-page'>
            <Header clazz="header"
                title="Our Coffee"/>
            <DescrCoffee/>
            <Footer/>
        </div>
    )
}

export default DescrPage;